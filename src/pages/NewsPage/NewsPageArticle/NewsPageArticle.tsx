"use client";
import * as React from "react";
import styles from "../HomePage.module.css";
import { CurrencyBar } from "../CurrencyBar";
import { Navigation } from "../Navigation";
import { NewsCard } from "../NewsCard";
import { Footer } from "../Footer";
import { Breadcrumbs } from "./Breadcrumbs";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleContent } from "./ArticleContent";
import { Link } from "react-router-dom";
function NewsPage() {
    const categories = [
        { text: "Экономика", link: "/news/category" },
        { text: "Технологии", link: "/news/category" },
        { text: "Общество", link: "/news/category" },
        { text: "Другое", link: "/news/category" }
    ];
    const breadcrumbItems = [
        {
            text: "Экономика",
            onClick: () => console.log("Navigate to Economics")
        },
        {
            text: "Глубокое погружение в влияние культурных движений на современное общество",
            onClick: () => console.log("Navigate to current article")
        }
    ];

    const tags = ["#Политика", "#Горячие новости"];

    const articleContent = `Культурные движения на протяжении веков были движущей силой социальных изменений, но в сегодняшнем глобально связанном мире их влияние стало более сильным и непосредственным. Эти движения, варьирующиеся от инициатив социальной справедливости до экологических кампаний и цифровых инноваций, формируют не только индивидуальные убеждения, но и целые сообщества и отрасли. Растущее осознание и защита этих причин подчеркивают сдвиг в обществе к принципам инклюзивности, разнообразия и устойчивого развития, которые все больше определяют эволюцию современного общества.

Одним из самых заметных культурных движений последних лет стал призыв к социальной справедливости и равенству. Это движение проявилось в различных формах, от борьбы за гендерное равенство и расовую справедливость до продвижения прав ЛГБТК+ и инклюзивности на рабочем месте. В результате компании, организации и даже правительства были вынуждены пересмотреть свои практики и политику. Многие бизнесы внедряют программы разнообразия и инклюзии, а несколько организаций активно работают над устранением разрыва в оплате труда, обеспечением справедливого представительства и созданием безопасных пространств для маргинализированных групп. Влияние этих усилий очевидно не только в корпоративном мире, но и в развлекательной, образовательной и медийной сферах, где разнообразное представительство и аутентичное повествование теперь являются приоритетами.

Экологические движения — еще одна мощная сила, переопределяющая современное общество. От активизма по борьбе с изменением климата до устойчивого сельского хозяйства, люди по всему миру объединяются для решения экологических проблем. Этот призыв к устойчивому развитию влияет не только на поведение потребителей — где экологически чистые продукты и услуги теперь высоко ценятся — но и побуждает целые отрасли к инновациям. Многие компании инвестируют в возобновляемые источники энергии, принимают политику нулевых отходов и стремятся сократить свой углеродный след. Правительства также начинают придавать приоритет зеленым политикам, под влиянием активизма на местах и срочности глобального потепления. Эти экологические движения подчеркивают необходимость как немедленных, так и долгосрочных изменений для защиты планеты и ее ресурсов, побуждая как отдельных людей, так и корпорации переосмыслить свое воздействие на окружающую среду.

Рост цифровой культуры и движений, основанных на технологиях, еще больше трансформировал то, как люди взаимодействуют друг с другом и участвуют в культурных изменениях. Платформы социальных медиа стали мощными инструментами для повышения осведомленности, позволяя сообщениям быстро и широко распространяться. Хэштеги, вирусные кампании и онлайн-сообщества позволили людям объединяться вокруг общих причин, от прав человека до политических реформ. Эта цифровая связь не только расширила охват культурных движений, но и позволила отдельным людям играть более активную роль в социальных изменениях. Теперь люди могут делиться ресурсами, организовывать мероприятия и способствовать глобальному чувству общности, объединяя людей из разных слоев общества и регионов в стремлении к общим целям.

В то же время культурные движения оказали значительное влияние на индустрии искусства и медиа. По мере роста осведомленности о таких вопросах, как представительство, психическое здоровье и инклюзивность, художники и создатели используют свои работы для отражения этих тем. От фильмов и телешоу, которые затрагивают сложные социальные темы, до литературы, бросающей вызов традиционным нормам, искусство стало средством, с помощью которого обсуждаются и понимаются социальные проблемы. Художники добиваются историй, которые отражают широкий спектр человеческого опыта, подчеркивая голоса и нарративы, которые часто были упущены. Эта тенденция не только расширяет рамки художественного выражения, но и побуждает аудиторию рассматривать разнообразные перспективы и участвовать в значимых беседах о идентичности, равенстве и эмпатии.`;

    const handleBackClick = () => {
        console.log("Navigate back");
    };
    return (
        <div className={styles.homePage}>
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <header className={styles.headerSection}>
                        <CurrencyBar
                            date="Вторник, 04 мая 2025"
                            usdRate="USD: 75.34 ₽ (-0.42)"
                            eurRate="EUR: 82.16 ₽ (-0.18)"
                            cnyRate="CNY: 10.45 ₽ (+0.05)"
                            weather="Москва: +22°C, облачно"
                        />
                    </header>

                    <Link className={styles.logo} to="/news"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50ae2ee72a836aa2c1561aa578f2f047d64e8744?placeholderIfAbsent=true" className={styles.logo} alt="Logo" />
                    </Link>

                    <Navigation categories={categories} />
                </div>

                <main className={styles.contentWrapper}>

                    <section className={styles.breadcrumbSection}>
                        <button className={styles.backButton} onClick={handleBackClick}>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d49518388612af27d9cb86355e60d3a42a66ee5b?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                                className={styles.backIcon}
                                alt="Back arrow"
                            />
                            <span className={styles.backText}>Вернуться</span>
                        </button>
                        <Breadcrumbs items={breadcrumbItems} />
                    </section>

                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc5623cd3347923dc485de69c6ba6bac870f10c0?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                        className={styles.heroImage}
                        alt="Article hero image"
                    />

                    <div className={styles.articleContainer}>
                        <ArticleHeader
                            tags={tags}
                            authorName="Гай Хокинс"
                            publishDate="Вторник, 04 мая 2025"
                        />

                        <ArticleContent
                            title="Глубокое погружение в влияние культурных движений на современное общество"
                            content={articleContent}
                        />
                    </div>

                    <section className={styles.sectionWrapper}>
                        <header className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Похожие статьи</h2>
                            <span className={styles.sectionDivider} />
                        </header>

                        <div className={styles.mostReadSection}>
                            <div className={styles.mostReadGrid}>
                                <div className={styles.mostReadColumn}>
                                    <NewsCard
                                        title="Технологии будущего: вызовы и решения"
                                        author="Елена Петрова"
                                        date="20 октября 2024 года"
                                        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8b3e42cf976ec3f8d5563e7fb3dc7127030c47f8?placeholderIfAbsent=true"
                                    />
                                </div>
                                <div className={styles.mostReadColumn}>
                                    <NewsCard
                                        title="Цифровая трансформация: новые горизонты"
                                        author="Сергей Лебедев"
                                        date="21 октября 2024 года"
                                        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e2de9f08e1ffda012cd697ceec9a2f8db9f02a9a?placeholderIfAbsent=true"
                                    />
                                </div>
                                <div className={styles.mostReadColumn}>
                                    <NewsCard
                                        title="Социальные медиа: влияние на общество и культуру"
                                        author="Анна Сидорова"
                                        date="22 октября 2024 года"
                                        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ecff5d6b25a654605c24b065595a837c583f02be?placeholderIfAbsent=true"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default NewsPage;
