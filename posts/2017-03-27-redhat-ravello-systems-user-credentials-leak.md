---
layout: post
author: Kévin Maschtaler
title: "Red Hat's Ravello Systems user credentials leak"
excerpt: "I found the credentials of a Red Hat solution architect, and was able to log into their Ravello Systems account. It's a good opportunity to learn something!"
date: '2017-03-27 12:00:00'
lang: en
image: /content/redhat-ravello-systems-user-credentials-leak/hackerman.png
tag:
    - security
    - github
---

I found the credentials of a [Red Hat](https://www.redhat.com/) solution architect, and was able to log into their [Ravello Systems](https://www.ravellosystems.com/) account.

It's a good opportunity to learn something.
You need to know that I'm not a security researcher, and my only goal is to raise minimum awareness about security.
Let's transform this into a case study.

## The impact of the credentials leak

To fully understand the impact of my discovery, let's answer to a few questions:

### What is Ravello Systems and how Red Hat uses it?

Here is a short description from the Ravello's website:

> **Run VMware workloads on public clouds - without any changes.**
> Ravello's Smart Labs have self-contained capsules to run your VMware/KVM development, test, training and demo environments in the cloud without migration

In simple words, Ravello is a Platform-as-a-Service (PaaS), which allows to host Virtual Machines (VM) and plug them together to mimic real and expensive infrastructures.

By chance, Red Hat seems to be a flagship client of this service, and there is a whole dedicated page.

> Red Hat is using Ravello to run multiple environments (OpenStack, KVM, Red Hat Enterprise Linux, OpenShift) on <abbr title="Amazon Web Services">AWS</abbr> for their global partner training. [Read more](https://www.ravellosystems.com/customer-case-studies/virtual-training-lab-red-hat).

To summarise, Ravello is used by the Red Hat Global Partner Enablement (GPE) team and this team "is responsible for sales and technical enablement for partners – how to sell, promote, install, configure and troubleshoot Red Hat’s portfolio of software products".

Hence, Ravello is the training platform of the Red Hat partners, where they can try Red Hat products before going to production.

### What I Had Access To

I had access to a user account with all permissions, except those of the administration, including: list, create, update or delete all `Applications`, `Blueprints`, `Elastic IPs`, `Key Pairs`, `Disk Images`, `Library VMs`, etc.

I could see all the current training/demo environments, the entire list of users, the billing page, and the full VMs repository.

The attack surface of a potential malicious person was basically: steal all the partners data and/or reduce a big chunk of the Red Hat GPE team's work to nothing.

To prove the dangerousness of the leak to the Red Hat security team, I successfully logged into a VM. The password was in the VM description.

![RedHat Live VM](/content/redhat-ravello-systems-user-credentials-leak/redhat-live-vm.png)

The account was in the `sudoer` group and I could easily create an [Ansible](https://www.ansible.com/tower) account if I wanted to.

This is just an example, but I didn't want to go too far or risk to make a mistake with a partner environment.

## How I Found the Credentials

You might ask how I found these credentials, if I used a fancy hacker tool like [Metasploit](https://www.metasploit.com/) or bought them on the Deep Web for 50 BTC.

The real process was way easier, and much more alarming. I was just bored during a week-end, and decided to try some dumb researches on GitHub like `delete password` or `remove credentials`.

Well, you see it coming. What I found within 30 minutes was really stunning:

-   6 AWS access keys with their secret tokens
-   3 MongoDB connection URI (with login and password)
-   1 Twitter API credentials
-   1 Twilio API credentials
-   1 GitHub account credentials
-   1 Gmail account credentials
-   And 1 Ravello Systems account credentials

![The RedHat commit](/content/redhat-ravello-systems-user-credentials-leak/redhat-commit.png)

Fortunately, most of these credentials were disabled or deleted (I tried), and I've contacted all the commit authors if it wasn't the case.
All of them took actions within hours.

## What We Can Learn, and How It Could Have Been Avoided

To be clear, I don’t underestimate Red Hat developers skills, or any developer who ever pushed a `remove my access key` or a `Oops`.
It happened to me several times.

Everyone makes mistakes, and what follows might seem obvious, but a reminder can be life saving sometimes.

#### Don't commit credentials

Obviously. Most of the commits I found was related to Proof-of-Concept projects or Hackathon code.
Configuration is hard and it's easy to make a mistake in a rush.
But still, some services like AWS, GitHub, Gmail and so store a huge bunch of sensitive, personal or company data.

If you already commited your credentials, change your password, revoke the token or whatever as soon as possible.
There is a way to safely remove sensitive data from GitHub: See [Removing sensitive data from a repository](https://help.github.com/articles/removing-sensitive-data-from-a-repository/) on GitHub Help.

#### Use a password manager

You have the choice: [LastPass](https://www.lastpass.com), [1password](https://1password.com/) and others.
The point is to not share the same password on two different services.

#### Use two factor authentication on critical services

You can consider AWS, GitHub, Gmail, and every other service storing/using money or company-wide data as critical.
The usage of a two factor authenticator (SMS, Google Authenticator, Authy) seems annoying, but we quickly get into the habit, and it radically reduces an attacker chances.

#### As an admin, create individual accounts and grant least privilege

When it comes to manage user permissions, only add the permissions that are needed. Do not content yourself with removing admin & billing permissions.

On AWS for example, do not remove all the developers from `IAM` but give only access to `EC2` and `S3` services if it's what the developers need.

## Conclusion

What I wrote above is really the basics of security that every developer should be aware of.
If you are not sure or not comfortable with third party services administration, don't hesitate to ask for help around you.

Security isn't only a Russian hacker's business or CIA scandals. Above all, it is a matter of awareness of every collaborators.

To paraphrase [Troy Hunt](https://www.troyhunt.com), a famous security researcher and speaker:

> Sadly, your are never as security conscious as what you are right after a serious incident.

Thanks to the Red Hat teams who have been quick to respond, and allowed me to publish this article.

IT security is a very interesting field and I barely touched upon the subject. You can expect to read more about it on [my blog](https://www.kmaschta.me/blog/).

What was the chances that I watch the Matrix trilogy again and find an important Red Hat password in the same week-end?

![Hackerman](/content/redhat-ravello-systems-user-credentials-leak/hackerman.png)

### Timeline

-   **22 Feb 2017 at 20:20** - The credentials are leaked on GitHub
-   **03 Mar 2017 at 22:18** - A commit removes the credentials from the repo (but the commit itself is still visible)
-   **11 Mar 2017 at 19:25** - Credentials leak reported to secalert@redhat.com
-   **11 Mar 2017 at 19:33** - The related Red Hat developer was contacted on Twitter
-   **12 Mar 2017 at 18:11** - The leaked password is changed
-   **22 Mar 2017 at 15:51** - Red Hat gives me the permission to disclose this article
