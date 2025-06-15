"use client";
import * as React from "react";
import styles from "./InputDesign.module.css";
import { Header } from "./Header.tsx";
import { HeroSection } from "./HeroSection.tsx";
import { SearchForm } from "./SearchForm.tsx";
import { Footer } from "./Footer.tsx";

function PoliticalPage() {
  return (
    <div className={styles.container}>
      <main className={styles.mainWrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/96616e0e520f292aa2495403eda5e25b39d3d5f2?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
          alt="Background"
          className={styles.backgroundImage}
        />

        <Header logo="Катариум" />

        <HeroSection
          title="Lorem ipsum dolor sit amet, consectetur adipiscing."
          description="Proin rutrum euismod leo non aliquam. Mauris lacinia ultrices diam, quis bibendum justo auctor eget. Praesent aliquam vestibulum nisi et porttitor."
        />

        <SearchForm
          title="Lorem ipsum dolor sit amet"
          selectPlaceholder="Все разделы"
          searchPlaceholder="Поиск..."
          buttonText="Найти"
          filtersText="Фильтры"
          selectIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/54846b380c22bf284c9fd857673c102a9c227630?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
          filtersIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/f421666852abc14cef0f91a1ac1b06af326229c8?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
        />
      </main>

      <Footer
        siteTitle='Сайт государственного устройства "Катариум"'
        copyright="2023. Все права защищены"
        backLinkText="Вернуться в контур системы"
      />
    </div>
  );
}

export default PoliticalPage;
