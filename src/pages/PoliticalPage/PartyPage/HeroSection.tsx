"use client";
import * as React from "react";
import StatCard from "./StatCard";
import styles from "./HeroSection.module.css";

function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b25803f903bfd80044376f90c9aa17ef02960496?placeholderIfAbsent=true&apiKey=b6b92bb0a9e5482b8b21f0df90550158"
                className={styles.backgroundImage}
                alt="Background"
            />
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    Lorem ipsum dolor sit amet.
                </h1>
                <div className={styles.statsGrid}>
                    <StatCard
                        number="200"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        variant="primary"
                    />
                    <StatCard
                        number="+341"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        variant="secondary"
                    />
                    <StatCard
                        number="200"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        variant="primary"
                    />
                    <StatCard
                        number="+341"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        variant="secondary"
                    />
                </div>
                <p className={styles.heroDescription}>
                    Curabitur faucibus tempor leo, et viverra justo placerat congue.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae.
                </p>
            </div>
        </section>
    );
}

export default HeroSection;
