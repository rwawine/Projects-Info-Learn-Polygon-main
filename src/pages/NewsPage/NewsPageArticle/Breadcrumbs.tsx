"use client";
import * as React from "react";
import styles from "../HomePage.module.css";

interface BreadcrumbsProps {
    items: Array<{
        text: string;
        onClick?: () => void;
    }>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <nav className={styles.breadcrumbsContainer}>
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/281a973f9b3684056c20f00835be32abfcee6b43?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                className={styles.breadcrumbIcon}
                alt="Breadcrumb icon"
            />
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div className={index === items.length - 1 ? styles.breadcrumbLongItem : styles.breadcrumbItem}>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d549310ebe5a8f966f4a1fa43bed15bf863fb06?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                            className={styles.breadcrumbIcon}
                            alt="Breadcrumb separator"
                        />
                        <button
                            className={index === items.length - 1 ? styles.breadcrumbLongButton : styles.breadcrumbButton}
                            onClick={item.onClick}
                        >
                            <span className={index === items.length - 1 ? styles.breadcrumbLongText : styles.breadcrumbText}>
                                {item.text}
                            </span>
                        </button>
                    </div>
                </React.Fragment>
            ))}
        </nav>
    );
};
