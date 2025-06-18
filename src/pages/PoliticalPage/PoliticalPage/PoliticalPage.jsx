"use client";
import * as React from "react";
import styles from "./InputDesign.module.css";
import { Header } from "./Header.tsx";
import { HeroSection } from "./HeroSection.tsx";
import { SearchForm } from "./SearchForm.tsx";
import { Footer } from "./Footer.tsx";

import { useLanguage } from '../../../context/LanguageContext';

function PoliticalPage() {
  const { language, translations } = useLanguage();
  return (
    <div className={styles.container}>
      <main className={styles.mainWrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/96616e0e520f292aa2495403eda5e25b39d3d5f2?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
          alt="Background"
          className={styles.backgroundImage}
        />

        <Header logo={translations[language].PoliticalPageHeader.title} />

        <HeroSection
          title={translations[language].PoliticalPagePoliticalPage.subtitle}
          description={translations[language].PoliticalPagePoliticalPage.description}
        />

        <SearchForm
          title={translations[language].PoliticalPageSearchForm.searchTitle}
          selectPlaceholder={translations[language].PoliticalPageSearchForm.selectPlaceholder}
          searchPlaceholder={translations[language].PoliticalPageSearchForm.searchPlaceholder}
          buttonText={translations[language].PoliticalPageSearchForm.buttonText}
          filtersText={translations[language].PoliticalPageSearchForm.filtersText}
          selectIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/54846b380c22bf284c9fd857673c102a9c227630?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
          filtersIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/f421666852abc14cef0f91a1ac1b06af326229c8?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
        />
      </main>

      <Footer
        siteTitle={translations[language].PoliticalPageFooter.siteTitle}
        copyright={translations[language].PoliticalPageFooter.copyright}
        backLinkText={translations[language].PoliticalPageFooter.backLinkText}
      />
    </div>
  );
}

export default PoliticalPage;
