"use client";
import * as React from "react";
import styles from "./CompanyListing.module.css";

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                Биржа труда
            </h1>
            <nav className={styles.navigation}>
                <a href="/job-board" className={styles.navLink}>
                    Главная
                </a>
                <a href="#" className={styles.navLink}>
                    Новости
                </a>
                <a href="/job-companies" className={styles.navLinkActive}>
                    Компании
                </a>
                <a href="/job-board/vacancy" className={styles.navLink}>
                    Вакансии
                </a>
            </nav>
        </header>
    );
};
