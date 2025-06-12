"use client";
import * as React from "react";
import styles from "./HomePage.module.css";

interface CurrencyBarProps {
    date: string;
    usdRate: string;
    eurRate: string;
    cnyRate: string;
    weather: string;
}

export const CurrencyBar: React.FC<CurrencyBarProps> = ({
    date,
    usdRate,
    eurRate,
    cnyRate,
    weather,
}) => {
    return (
        <div className={styles.currencyBar}>
            <div className={styles.currencyItem}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed6d28971574bc713a089fca022fbcb938ae78ce?placeholderIfAbsent=true" className={styles.currencyIcon} alt="Calendar" />
                <div className={styles.dateText}>{date}</div>
            </div>
            <div className={styles.currencyItem}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a49c0ac0a6cff20502538446d6ab94486f17b65e?placeholderIfAbsent=true" className={styles.currencyIcon} alt="USD" />
                <div className={styles.usdText}>
                    USD: 75.34 ₽ (
                    <span className={styles.redText}>-0.42</span>)
                </div>
            </div>
            <div className={styles.currencyItem}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f285e5b0c9ce4e57a63d38309d2bedfc48d3a634?placeholderIfAbsent=true" className={styles.currencyIcon} alt="EUR" />
                <div className={styles.eurText}>
                    EUR: 82.16 ₽ (
                    <span className={styles.redText}>-0.18</span>)
                </div>
            </div>
            <div className={styles.currencyItem}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a2d4d89a89f74d6693fbbd117496bc87beff6c1?placeholderIfAbsent=true" className={styles.currencyIcon} alt="CNY" />
                <div className={styles.cnyText}>
                    CNY: 10.45 ₽ (
                    <span className={styles.greenText}>+0.05</span>)
                </div>
            </div>
            <div className={styles.currencyItem}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c37c48c5e8f1a1f18a3d5a5d1fae6e531ba739?placeholderIfAbsent=true" className={styles.currencyIcon} alt="Weather" />
                <div className={styles.weatherText}>{weather}</div>
            </div>
        </div>
    );
};
