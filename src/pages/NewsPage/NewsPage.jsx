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
import { useLanguage } from '../../context/LanguageContext';

function NewsPage() {
  const { language, translations } = useLanguage();
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
    { text: translations[language].newsPageCategory.category1, link: "/news/category" },
    { text: translations[language].newsPageCategory.category2, link: "/news/category" },
    { text: translations[language].newsPageCategory.category3, link: "/news/category" },
    { text: translations[language].newsPageCategory.category4, link: "/news/category" }
  ];

  return (
    <>
      <div className={`${styles.homePage} ${contentBlurred ? 'blurContent' : ''}`}>
        <div className={styles.container}>
          <div className={styles.mainContent}>
            <header className={styles.headerSection}>
              <CurrencyBar
                date={translations[language].newsPage.date}
                usdRate="USD: 75.34 ₽ (-0.42)"
                eurRate="EUR: 82.16 ₽ (-0.18)"
                cnyRate="CNY: 10.45 ₽ (+0.05)"
                weather={translations[language].newsPage.weather}
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
                  title={translations[language].featuredArticle.title}
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a4c23fc82f29bdd2f35e7d887b71ef0cac845de8?placeholderIfAbsent=true"
                  date={translations[language].featuredArticle.date}
                  readTime={translations[language].featuredArticle.readTime}
                />
              </div>

              <aside className={styles.sidebarContent}>
                <NewsCard
                  title={translations[language].newsPage.title1}
                  author={translations[language].newsPage.author1}
                  date={translations[language].newsPage.date1}
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a943e018a2f1251e2c8c3cea423ae0310ea8effb?placeholderIfAbsent=true"
                />
                <NewsCard
                  title={translations[language].newsPage.title2}
                  author={translations[language].newsPage.author2}
                  date={translations[language].newsPage.date2}
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e959eaaf6542e14a760a8a1819ce727d1a539380?placeholderIfAbsent=true"
                />
                <NewsCard
                  title={translations[language].newsPage.title3}
                  author={translations[language].newsPage.author3}
                  date={translations[language].newsPage.date3}
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/093559d7cdf1bf33ab1d7dd9d97e6492fd2d44a7?placeholderIfAbsent=true"
                />
              </aside>
            </div>

            <NewsSection title={translations[language].newsPage.title4} moreText={translations[language].newsPage.moreText4}>
              <div className={styles.sectionLayout}>
                <FeaturedCard
                  title={translations[language].newsPage.title5}
                  category={translations[language].newsPage.category5}
                  date={translations[language].newsPage.date5}
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b2f8be1dc4e9b7c9229063ae0fd310e7988ed737?placeholderIfAbsent=true"
                />
                <div className={styles.regularNewsGrid}>
                  <NewsCard
                    title={translations[language].newsPage.title6}
                    author={translations[language].newsPage.author6}
                    date={translations[language].newsPage.date6}
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d8dbef8b44ba5e552a3568e88ef4f8df5a5ca2cb?placeholderIfAbsent=true"
                  />
                  <NewsCard
                    title={translations[language].newsPage.title7}
                    author={translations[language].newsPage.author7}
                    date={translations[language].newsPage.date7}
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/123b7720b75336eb33e394af4ac7b72b8f80bff2?placeholderIfAbsent=true"
                  />
                  <NewsCard
                    title={translations[language].newsPage.title8}
                    author={translations[language].newsPage.author8}
                    date={translations[language].newsPage.date8}
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ca9926a21db15989a880d5f8c3d84d721e86ef45?placeholderIfAbsent=true"
                  />
                </div>
              </div>

              <div className={styles.horizontalNewsLayout}>
                <NewsCard
                  title={translations[language].newsPage.title9}
                  author={translations[language].newsPage.author9}
                  date={translations[language].newsPage.date9}
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3abe3b65512e5345bf8d9ddf9e17d3cd11b69ede?placeholderIfAbsent=true"
                  isHorizontal
                />
                <NewsCard
                  title={translations[language].newsPage.title10}
                  author={translations[language].newsPage.author10}
                  date={translations[language].newsPage.date10}
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/bd7d81644a92d963f916d7cdf4a2162743f19450?placeholderIfAbsent=true"
                  isHorizontal
                />
                <NewsCard
                  title={translations[language].newsPage.title11}
                  author={translations[language].newsPage.author11}
                  date={translations[language].newsPage.date11}
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f94b5d4adb4b578b45e7fbc533239336c79e000b?placeholderIfAbsent=true"
                  isHorizontal
                />
              </div>
            </NewsSection>

            <NewsSection title={translations[language].newsPage.title12} moreText={translations[language].newsPage.moreText12}>
              <div className={styles.horizontalNewsLayout}>
                <div className={styles.regularNewsGrid}>
                  <NewsCard
                    title={translations[language].newsPage.title13}
                    author={translations[language].newsPage.author13}
                    date={translations[language].newsPage.date13}
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/71055a1dc5610c7443c869861e7d3d5231ffa35b?placeholderIfAbsent=true"
                  />
                  <NewsCard
                    title={translations[language].newsPage.title14}
                    author={translations[language].newsPage.author14}
                    date={translations[language].newsPage.date14}
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ee1a216fa632f809433b34d65550008cdc4dcb8b?placeholderIfAbsent=true"
                  />
                  <NewsCard
                    title={translations[language].newsPage.title15}
                    author={translations[language].newsPage.author15}
                    date={translations[language].newsPage.date15}
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/6a5c320f452df9fc34e3a86722e2f27ba2ba2511?placeholderIfAbsent=true"
                  />
                </div>
                <SpecialCard
                  title={translations[language].newsPage.title16}
                  author={translations[language].newsPage.author16}
                  date={translations[language].newsPage.date16}
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7db43ddbdb063546425552b39800245806af2e7e?placeholderIfAbsent=true"
                  badge="30 октября 2024 года"
                />
              </div>
            </NewsSection>

            <NewsSection title={translations[language].newsPage.title17} moreText={translations[language].newsPage.moreText17}>
              <div className={styles.horizontalNewsLayout}>
                <NewsCard
                  title={translations[language].newsPage.title18}
                  author={translations[language].newsPage.author18}
                  date={translations[language].newsPage.date18}
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/9c561d3cfbab50aa844e5bccaff470d7a63b3dd1?placeholderIfAbsent=true"
                  isHorizontal
                />
                <NewsCard
                  title={translations[language].newsPage.title19}
                  author={translations[language].newsPage.author19}
                  date={translations[language].newsPage.date19}
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/830e179465d7a35383d0a4dfd0efc573efd19be7?placeholderIfAbsent=true"
                  isHorizontal
                />
                <NewsCard
                  title={translations[language].newsPage.title20}
                  author={translations[language].newsPage.author20}
                  date={translations[language].newsPage.date20}
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/1b7e3822e6cc1d1f1f85e39f8e7761652e8a6310?placeholderIfAbsent=true"
                  isHorizontal
                />
              </div>
            </NewsSection>

            <section className={styles.sectionWrapper}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{translations[language].newsPage.mostReadTitle}</h2>
                <span className={styles.sectionDivider} />
              </header>

              <div className={styles.mostReadSection}>
                <div className={styles.mostReadGrid}>
                  <div className={styles.mostReadColumn}>
                    <NewsCard
                      title={translations[language].newsPage.title21}
                      author={translations[language].newsPage.author21}
                      date={translations[language].newsPage.date21}
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8b3e42cf976ec3f8d5563e7fb3dc7127030c47f8?placeholderIfAbsent=true"
                    />
                  </div>
                  <div className={styles.mostReadColumn}>
                    <NewsCard
                      title={translations[language].newsPage.title22}
                      author={translations[language].newsPage.author22}
                      date={translations[language].newsPage.date22}
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e2de9f08e1ffda012cd697ceec9a2f8db9f02a9a?placeholderIfAbsent=true"
                    />
                  </div>
                  <div className={styles.mostReadColumn}>
                    <NewsCard
                      title={translations[language].newsPage.title23}
                      author={translations[language].newsPage.author23}
                      date={translations[language].newsPage.date23}
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ecff5d6b25a654605c24b065595a837c583f02be?placeholderIfAbsent=true"
                    />
                  </div>
                </div>

                <div className={styles.mostReadGrid}>
                  <div className={styles.mostReadColumn}>
                    <NewsCard
                      title={translations[language].newsPage.title24}
                      author={translations[language].newsPage.author24}
                      date={translations[language].newsPage.date24}
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e325e92ef245fb458a196f87982bb9f59dea54?placeholderIfAbsent=true"
                    />
                  </div>
                  <div className={styles.mostReadColumn}>
                    <NewsCard
                      title={translations[language].newsPage.title25}
                      author={translations[language].newsPage.author25}
                      date={translations[language].newsPage.date25}
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e95f26d851cff52b9d1c5212a3550c384efd6a3a?placeholderIfAbsent=true"
                    />
                  </div>
                  <div className={styles.mostReadColumn}>
                    <NewsCard
                      title={translations[language].newsPage.title26}
                      author={translations[language].newsPage.author26}
                      date={translations[language].newsPage.date26}
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
