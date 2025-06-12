"use client";
import * as React from "react";
import styles from "./NewsSection.module.css";
import { NewsHeader } from "./NewsHeader.tsx";
import { NewsCard } from "./NewsCard.tsx";
import { SidebarCard } from "./SidebarCard.tsx";
import { LoadMoreButton } from "./LoadMoreButton.tsx";

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
    const newsArticles: NewsArticle[] = [
        {
            id: "1",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/19e2ceb9b62494a0b6c1aa12429e8f6c8a8e973d?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
            tags: ["#Общество", "#Текущие события"],
            title: "Как волонтерство переписывает правила социальной ответственности",
            description: "Современные волонтерские инициативы становятся важнейшим инструментом для решения социальных проблем. Они демонстрируют, как самоотверженные действия отдельных граждан могут привести к значительным изменениям на местном и глобальном уровнях. В этой статье исследуются примеры успешных проектов, которые вдохновляют на участие и активизм.",
            author: "Ava Smith",
            date: "Oct 12, 2024"
        },
        {
            id: "2",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/667ffee411b400949a5f46264462cb6989fb2d65?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
            tags: ["#Общество", "#Тенденции"],
            title: "Новые формы социального взаимодействия в цифровую эпоху",
            description: "С ускорением цифровизации общественная жизнь претерпевает кардинальные изменения. Появление платформ для онлайн-взаимодействия и социальных сетей создает новые возможности для связи и обмена идеями, но также ставит перед обществом вызовы, связанные с изоляцией и ментальным здоровьем.",
            author: "Liam Johnson",
            date: "Oct 15, 2024"
        },
        {
            id: "3",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/67f6d9487c08a774a956b7f295e5c539c4daf03a?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
            tags: ["#Общество", "#Анализ"],
            title: "Экологические инициативы: от grassroots до глобального",
            description: "В последние годы наблюдается рост экологических движений, которые переходят от местных инициатив к глобальным кампаниям. Эта статья анализирует, как grassroots-инициативы вдохновляют на глобальное изменение мышления и действий в отношении устойчивого развития и защиты окружающей среды.",
            author: "Olivia Brown",
            date: "Sep 25, 2024"
        },
        {
            id: "4",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/eebf2e360c245160a077b583d678fab38ce1f82e?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
            tags: ["#Общество", "#Инновации"],
            title: "Как искусственный интеллект меняет общественные нормы",
            description: "Технологическое развитие, особенно в области искусственного интеллекта, вызывает значительные сдвиги в социальных нормах и этических стандартах. В статье рассматриваются последствия внедрения ИИ в повседневную жизнь и его влияние на общественные отношения, работу и личные данные.",
            author: "Noah Davis",
            date: "Oct 5, 2024"
        }
    ];

    return (
        <main className={styles.newsContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.mainContent}>
                    <NewsHeader
                        title="Общество"
                        subtitle="Показано 10 из 1245 новостей"
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
