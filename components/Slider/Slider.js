import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './Slider.module.css';

function Slider({ slides }) {
    const [currentSlide, setSlide] = useState(0);
    const [pristine, setPristine] = useState(true);

    const changeSlide = (i) => () => {
        setSlide(i);
        setPristine(false);
    };

    const onKeyDown = (i) => (evt) => {
        if (['Enter', ' '].includes(evt.key)) {
            evt.preventDefault();
            setSlide(i);
        }
    };

    useEffect(() => {
        let timeout;
        if (pristine) {
            timeout = setTimeout(() => {
                setSlide((currentSlide + 1) % slides.length);
            }, 10000);
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [pristine, currentSlide, setSlide, slides.length]);

    return (
        <div className={styles.slider}>
            <div className={styles.tabs}>
                {slides.map((slide, i) => (
                    <div
                        key={slide.name}
                        className={
                            currentSlide === i ? styles.activeTab : styles.tab
                        }
                        onClick={changeSlide(i)}
                        onKeyDown={onKeyDown(i)}
                        role="button"
                        tabIndex={0}
                    >
                        <Image
                            width={60}
                            height={60}
                            src={slide.image}
                            alt={slide.name}
                            styles={{}}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.content}>{slides[currentSlide].content}</div>
        </div>
    );
}

export default Slider;
