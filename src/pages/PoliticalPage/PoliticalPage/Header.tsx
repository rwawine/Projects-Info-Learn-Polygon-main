"use client";
import * as React from "react";
import styles from "./InputDesign.module.css";
import { useLanguage } from '../../../context/LanguageContext';
interface HeaderProps {
  logo: string;
  activeNavItem?: string;
}

export const Header: React.FC<HeaderProps> = ({ logo, activeNavItem = "Главная" }) => {
  const { language, translations } = useLanguage();
  const navItems = [
    { label: translations[language].PoliticalPageHeader.home, href: "/political-site" },
    { label: translations[language].PoliticalPageHeader.persons, href: "/political-site/directory" },
    { label: translations[language].PoliticalPageHeader.parties, href: "/political-site/party" },
    { label: translations[language].PoliticalPageHeader.politicalSystem, href: "/political-site/system" }
  ];

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>{logo}</h1>
      <nav className={styles.navigation}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={item.label === activeNavItem ? styles.navItemActive : styles.navItem}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
