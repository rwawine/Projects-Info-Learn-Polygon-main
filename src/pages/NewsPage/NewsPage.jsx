"use client";
import * as React from "react";
import styles from "./HomePage.module.css";
import { CurrencyBar } from "./CurrencyBar";
import { Navigation } from "./Navigation";
import { FeaturedArticle } from "./FeaturedArticle";
import { NewsCard } from "./NewsCard";
import { NewsSection } from "./NewsSection";
import { SpecialCard } from "./SpecialCard";
import { FeaturedCard } from "./FeaturedCard";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { EmailConfirm } from "./EmailConfirm/EmailConfirm";
import { CaptchaOverlay } from "./Captcha/CaptchaOverlay";

function NewsPage() {
  const [showCaptcha, setShowCaptcha] = React.useState(false);
  const [contentBlurred, setContentBlurred] = React.useState(false);
  
  React.useEffect(() => {
    // Check if user has verified captcha in this session
    const hasVerifiedCaptcha = sessionStorage.getItem("captchaVerified");
    
    if (!hasVerifiedCaptcha) {
      setShowCaptcha(true);
      setContentBlurred(true);
    }
  }, []);
  
  const handleCaptchaVerify = () => {
    sessionStorage.setItem("captchaVerified", "true");
    setShowCaptcha(false);
    setContentBlurred(false);
  };

  const categories = [
    { text: "Экономика", link: "/news/category" },
    { text: "Технологии", link: "/news/category" },
    { text: "Общество", link: "/news/category" },
    { text: "Другое", link: "/news/category" }
  ];

  return (
    <>
      <div className={`${styles.homePage} ${contentBlurred ? 'blurContent' : ''}`}>
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
            <div className={styles.mainLayout}>
              <div className={styles.primaryContent}>
                <FeaturedArticle
                  title="Глубокое погружение в влияние культурных движений на современное общество"
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a4c23fc82f29bdd2f35e7d887b71ef0cac845de8?placeholderIfAbsent=true"
                  date="9 сентября 2024 года"
                  readTime="06 минут"
                />
              </div>

              <aside className={styles.sidebarContent}>
                <NewsCard
                  title="Влияние искусственного интеллекта на будущее рабочей силы"
                  author="Сара Блейк"
                  date="15 сентября 2024 года"
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a943e018a2f1251e2c8c3cea423ae0310ea8effb?placeholderIfAbsent=true"
                />
                <NewsCard
                  title="Социальные изменения в эпоху цифровизации"
                  author="Ли Чен"
                  date="22 сентября 2024 года"
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e959eaaf6542e14a760a8a1819ce727d1a539380?placeholderIfAbsent=true"
                />
                <NewsCard
                  title="Экологическая ответственность бизнеса: новые тренды и вызовы"
                  author="Эмили Тейлор"
                  date="29 сентября 2024 года"
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/093559d7cdf1bf33ab1d7dd9d97e6492fd2d44a7?placeholderIfAbsent=true"
                />
              </aside>
            </div>

            <NewsSection title="Общество" moreText="Больше новостей общества">
              <div className={styles.sectionLayout}>
                <FeaturedCard
                  title="На гребне новых идей и технологий"
                  category="Экономические тренды и инновации"
                  date="6 сентября 2024 года"
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b2f8be1dc4e9b7c9229063ae0fd310e7988ed737?placeholderIfAbsent=true"
                />
                <div className={styles.regularNewsGrid}>
                  <NewsCard
                    title="Глобальные тренды в экономике и их влияние на общество"
                    author="Гай Хокинс"
                    date="29 сентября 2024 года"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d8dbef8b44ba5e552a3568e88ef4f8df5a5ca2cb?placeholderIfAbsent=true"
                  />
                  <NewsCard
                    title="Будущее технологий: как ИИ меняет экономические модели"
                    author="Гай Хокинс"
                    date="29 сентября 2024 года"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/123b7720b75336eb33e394af4ac7b72b8f80bff2?placeholderIfAbsent=true"
                  />
                  <NewsCard
                    title="Устойчивое развитие: новые подходы и стратегии"
                    author="Гай Хокинс"
                    date="29 сентября 2024 года"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ca9926a21db15989a880d5f8c3d84d721e86ef45?placeholderIfAbsent=true"
                  />
                </div>
              </div>

              <div className={styles.horizontalNewsLayout}>
                <NewsCard
                  title="Экономические последствия цифровизации бизнеса"
                  author="Экономика"
                  date="22 сентября 2024 года"
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3abe3b65512e5345bf8d9ddf9e17d3cd11b69ede?placeholderIfAbsent=true"
                  isHorizontal
                />
                <NewsCard
                  title="Будущее социальных медиа в эпоху новых технологий"
                  author="Общество"
                  date="29 сентября 2024 года"
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/bd7d81644a92d963f916d7cdf4a2162743f19450?placeholderIfAbsent=true"
                  isHorizontal
                />
                <NewsCard
                  title="Инновации в сфере возобновляемых источников энергии"
                  author="Технологии"
                  date="6 октября 2024 года"
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f94b5d4adb4b578b45e7fbc533239336c79e000b?placeholderIfAbsent=true"
                  isHorizontal
                />
              </div>
            </NewsSection>

            <NewsSection title="Технологии" moreText="Больше новостей технлологии">
              <div className={styles.horizontalNewsLayout}>
                <div className={styles.regularNewsGrid}>
                  <NewsCard
                    title="Технологические горизонты: новые вызовы и перспективы"
                    author="Алексей Смирнов"
                    date="25 мая 2026 года"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/71055a1dc5610c7443c869861e7d3d5231ffa35b?placeholderIfAbsent=true"
                  />
                  <NewsCard
                    title="Будущее технологий: вызовы и возможности"
                    author="Анастасия Соколова"
                    date="15 июня 2027 года"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ee1a216fa632f809433b34d65550008cdc4dcb8b?placeholderIfAbsent=true"
                  />
                  <NewsCard
                    title="Инновации завтрашнего дня: что нам готовит будущее"
                    author="Игорь Федоров"
                    date="25 мая 2026 года"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/6a5c320f452df9fc34e3a86722e2f27ba2ba2511?placeholderIfAbsent=true"
                  />
                </div>
                <SpecialCard
                  title="Технологические тренды, формирующие будущее нашего мира"
                  author="Александр Грейсон"
                  date="30 октября 2024 года"
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7db43ddbdb063546425552b39800245806af2e7e?placeholderIfAbsent=true"
                  badge="30 октября 2024 года"
                />
              </div>
            </NewsSection>

            <NewsSection title="Экономика" moreText="Больше новостей экономики">
              <div className={styles.horizontalNewsLayout}>
                <NewsCard
                  title="Влияние искусственного интеллекта на финансовые рынки"
                  author="Экономика"
                  date="10 октября 2024 года"
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/9c561d3cfbab50aa844e5bccaff470d7a63b3dd1?placeholderIfAbsent=true"
                  isHorizontal
                />
                <NewsCard
                  title="Тенденции устойчивого развития в мировой экономике"
                  author="Экономика"
                  date="15 ноября 2024 года"
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/830e179465d7a35383d0a4dfd0efc573efd19be7?placeholderIfAbsent=true"
                  isHorizontal
                />
                <NewsCard
                  title="Перспективы криптовалют в современных экономических условиях"
                  author="Экономика"
                  date="5 декабря 2024 года"
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/1b7e3822e6cc1d1f1f85e39f8e7761652e8a6310?placeholderIfAbsent=true"
                  isHorizontal
                />
              </div>
            </NewsSection>

            <section className={styles.sectionWrapper}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Самое читаемое</h2>
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

                <div className={styles.mostReadGrid}>
                  <div className={styles.mostReadColumn}>
                    <NewsCard
                      title="Анализ глобальных экономических изменений и их влияние на общество"
                      author="Ли Чен"
                      date="15 сентября 2024 года"
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e325e92ef245fb458a196f87982bb9f59dea54?placeholderIfAbsent=true"
                    />
                  </div>
                  <div className={styles.mostReadColumn}>
                    <NewsCard
                      title="Влияние технологий на финансовые системы и их последствия"
                      author="Сара Блейк"
                      date="22 сентября 2024 года"
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e95f26d851cff52b9d1c5212a3550c384efd6a3a?placeholderIfAbsent=true"
                    />
                  </div>
                  <div className={styles.mostReadColumn}>
                    <NewsCard
                      title="Тренды в мировой экономике и их влияние на будущее"
                      author="Эмили Тейлор"
                      date="29 сентября 2024 года"
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/fb8492323526dfbfebcf9a67377b811420521a2e?placeholderIfAbsent=true"
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </div>
      
      {showCaptcha && <CaptchaOverlay onVerify={handleCaptchaVerify} />}
      <EmailConfirm />
    </>
  );
}

export default NewsPage;
