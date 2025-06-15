"use client";
import * as React from "react";
import styles from "./InputDesign.module.css";

interface HeaderProps {
  logo: string;
  activeNavItem?: string;
}

export const Header: React.FC<HeaderProps> = ({ logo, activeNavItem = "Главная" }) => {
  const navItems = [
    { label: "Главная", href: "/political-site" },
    { label: "Персоны", href: "#" },
    { label: "Партии", href: "/political-site/party" },
    { label: "Политическое устройство", href: "#" }
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
