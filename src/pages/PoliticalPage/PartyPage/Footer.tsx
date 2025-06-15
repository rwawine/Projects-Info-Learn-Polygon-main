"use client";
import * as React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerBrand}>
                    Сайт государственного устройства "Катариум"
                </div>
                <nav className={styles.footerNavigation}>
                    <a href="#" className={styles.footerLink}>Главная</a>
                    <a href="#" className={styles.footerLink}>Партии</a>
                    <a href="#" className={styles.footerLink}>Персоны</a>
                    <a href="#" className={styles.footerLink}>Политическое устройство</a>
                </nav>
            </div>
            <div className={styles.footerDivider} />
            <div className={styles.footerBottom}>
                <p className={styles.copyright}>
                    2023. Все права защищены
                </p>
                <a href="#" className={styles.systemLink}>
                    Вернуться в контур системы
                </a>
            </div>
        </footer>
    );
}

export default Footer;
