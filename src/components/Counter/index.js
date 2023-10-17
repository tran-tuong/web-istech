import React, { useEffect, useRef, useState } from "react";
import styles from "./Counter.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CounterDate() {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('October 20, 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = Date.now();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) 
                clearInterval(interval.current);
            else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer();

        return () => {
            clearInterval(interval.current);
        }
    });

    return <div className={cx('counter-list')}>
        <section className={cx('counter-item')}>
            <span>{days}</span>
            <p className={cx('small-text')}>Days</p>
        </section>
        <section className={cx('counter-item')}>
            <span>{hours}</span>
            <p className={cx('small-text')}>Hours</p>
        </section>
        <section className={cx('counter-item')}>
            <span>{minutes}</span>
            <p className={cx('small-text')}>Minutes</p>
        </section>
        <section className={cx('counter-item')}>
            <span>{seconds}</span>
            <p className={cx('small-text')}>Seconds</p>
        </section>
    </div>;
}

export default CounterDate;
