"use client";
import * as React from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footerSection}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1159498aaabb43bd5e8129851be360881361e831?placeholderIfAbsent=true" className={styles.footerDivider} alt="" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50ae2ee72a836aa2c1561aa578f2f047d64e8744?placeholderIfAbsent=true" className={styles.footerLogo} alt="Logo" />
            <div className={styles.footerContent}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ef3b8bbeb0826df1e8d0458eb0067f595d5e1f5?placeholderIfAbsent=true" className={styles.headerDivider} alt="" />
                <div className={styles.footerInfo}>
                    <div className={styles.copyrightText}>
                        Авторские права © 2024 - Новости - Все права защищены
                    </div>
                    <Link to="/" className={styles.backLink}>Вернуться в Контур системы</Link>
                </div>
            </div>
        </footer>
    );
};
