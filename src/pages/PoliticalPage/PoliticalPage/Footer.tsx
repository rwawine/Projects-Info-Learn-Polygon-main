"use client";
import * as React from "react";
import styles from "./InputDesign.module.css";
import { useLanguage } from '../../../context/LanguageContext';
interface FooterProps {
  siteTitle: string;
  copyright: string;
  backLinkText: string;
}

export const Footer: React.FC<FooterProps> = ({ siteTitle, copyright, backLinkText }) => {
  const { language, translations } = useLanguage();
  const navItems = [
    { label: translations[language].PoliticalPageFooter.home, href: "/political-site" },
    { label: translations[language].PoliticalPageFooter.parties, href: "/political-site/party" },
    { label: translations[language].PoliticalPageFooter.persons, href: "/political-site/person" },
    { label: translations[language].PoliticalPageFooter.politicalSystem, href: "/political-site/system" }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h4 className={styles.footerTitle}>{siteTitle}</h4>
        <nav className={styles.footerNavigation}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </div>
      <div className={styles.footerDivider} />
      <div className={styles.footerBottom}>
        <span className={styles.copyright}>{copyright}</span>
        <a href="/" className={styles.backLink}>{backLinkText}</a>
      </div>
    </footer>
  );
};
