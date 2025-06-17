"use client";
import * as React from "react";
import styles from "./NewsSection.module.css";
import { NewsHeader } from "./NewsHeader.tsx";
import { NewsCard } from "./NewsCard.tsx";
import { SidebarCard } from "./SidebarCard.tsx";
import { LoadMoreButton } from "./LoadMoreButton.tsx";
import { useLanguage } from '../../../context/LanguageContext';

interface NewsArticle {
    id: string;
    imageUrl: string;
    tags: string[];
    title: string;
    description: string;
    author: string;
    date: string;
}

function NewsSection() {
    const { language, translations } = useLanguage();
    const newsArticles: NewsArticle[] = [
        {
            id: "1",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/19e2ceb9b62494a0b6c1aa12429e8f6c8a8e973d?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
            tags: [translations[language].newsPageCategory.tag1, translations[language].newsPageCategory.tag2],
            title: translations[language].newsPageCategory.articleTitle1,
            description: translations[language].newsPageCategory.description1,
            author: translations[language].newsPageCategory.author1,
            date: translations[language].newsPageCategory.date1
        },
        {
            id: "2",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/667ffee411b400949a5f46264462cb6989fb2d65?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
            tags: [translations[language].newsPageCategory.tag1, translations[language].newsPageCategory.tag2],
            title: translations[language].newsPageCategory.articleTitle2,
            description: translations[language].newsPageCategory.description2,
            author: translations[language].newsPageCategory.author2,
            date: translations[language].newsPageCategory.date2
        },
        {
            id: "3",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/67f6d9487c08a774a956b7f295e5c539c4daf03a?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
            tags: [translations[language].newsPageCategory.tag1, translations[language].newsPageCategory.tag2],
            title: translations[language].newsPageCategory.articleTitle3,
            description: translations[language].newsPageCategory.description3,
            author: translations[language].newsPageCategory.author3,
            date: translations[language].newsPageCategory.date3
        },
        {
            id: "4",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/eebf2e360c245160a077b583d678fab38ce1f82e?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
            tags: [translations[language].newsPageCategory.tag1, translations[language].newsPageCategory.tag2],
            title: translations[language].newsPageCategory.articleTitle4,
            description: translations[language].newsPageCategory.description4,
            author: translations[language].newsPageCategory.author4,
            date: translations[language].newsPageCategory.date4
        }
    ];

    return (
        <main className={styles.newsContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.mainContent}>
                    <NewsHeader
                        title={translations[language].newsPageCategory.title}
                        subtitle={translations[language].newsPageCategory.subtitle}
                    />

                    <div className={styles.dividerImage}></div>

                    <section className={styles.articlesSection}>
                        {newsArticles.map((article, index) => (
                            <React.Fragment key={article.id}>
                                <NewsCard article={article} />
                                {index === 1 && (
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/abe4499b7d048e51b3a4cc073785473dde1cfcc6?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                                        alt="Advertisement banner"
                                        className={styles.adBanner}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </section>
                </div>

                <aside className={styles.sidebar}>
                    <SidebarCard />
                </aside>
            </div>

            <LoadMoreButton />
        </main>
    );
}

export default NewsSection;
