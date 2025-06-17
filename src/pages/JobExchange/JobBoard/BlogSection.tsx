"use client";
import * as React from "react";
import styles from "./JobBoard.module.css";
import { useLanguage } from '../../../context/LanguageContext';

function BlogSection() {
  const { language, translations } = useLanguage();
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <header className={styles.blogHeader}>
          <h2 className={styles.blogTitle}>{translations[language].blogSection.recentBlogs}</h2>
          <a href="#" className={styles.viewAllButton}>
            <span className={styles.viewAllText}>
              {translations[language].blogSection.allArticles}
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a14ce2c0a793027f0c3d1103219b6e7727ccfae?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              className={styles.viewAllIcon}
              alt=""
            />
          </a>
        </header>
        <div className={styles.blogContent}>
          <article className={styles.featuredBlogPost}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3c79c02edea6863301dc65a8ac82e59e5ef91af?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              className={styles.featuredBlogImage}
              alt="Featured blog post"
            />
            <div className={styles.blogPostContent}>
              <div className={styles.blogPostMeta}>
                <p className={styles.blogAuthor}>
                  {translations[language].blogSection.author}
                </p>
                <div className={styles.blogTitleContainer}>
                  <h3 className={styles.blogPostTitle}>
                    {translations[language].blogSection.title}
                  </h3>
                  <div className={styles.blogIconWrapper}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6fa9005a7fa076a973b5803f8fbe4d2848ab714?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                      className={styles.blogIcon}
                      alt=""
                    />
                  </div>
                </div>
                <p className={styles.blogPostExcerpt}>
                  {translations[language].blogSection.excerpt}
                </p>
              </div>
              <div className={styles.blogCategories}>
                <div className={styles.blogBadge}>
                  <span className={styles.blogBadgeText}>
                    {translations[language].blogSection.trends}
                  </span>
                </div>
              </div>
            </div>
          </article>
          <div className={styles.blogPostsColumn}>
            <article className={styles.blogPostCard}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3955f69e078f5be2c98c85b51ea46580235d107?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                className={styles.blogPostImage}
                alt="Blog post"
              />
              <div className={styles.blogPostCardContent}>
                <div className={styles.blogPostCardMeta}>
                  <p className={styles.blogPostAuthor}>
                    {translations[language].blogSection.author}
                  </p>
                  <div className={styles.blogPostCardText}>
                    <h3 className={styles.blogPostCardTitle}>
                      {translations[language].blogSection.title2}
                    </h3>
                    <p className={styles.blogPostCardExcerpt}>
                      {translations[language].blogSection.excerpt2}
                    </p>
                  </div>
                </div>
                <div className={styles.blogPostCardCategories}>
                  <div className={styles.blogBadge}>
                    <span className={styles.blogBadgeRecommendations}>
                      {translations[language].blogSection.recommendations}
                    </span>
                  </div>
                </div>
              </div>
            </article>
            <article className={styles.blogPostCard}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/616b1374613c9f660f9e28a2ef5b165eb8613fdd?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                className={styles.blogPostImage}
                alt="Blog post"
              />
              <div className={styles.blogPostCardContent}>
                <div className={styles.blogPostCardMeta}>
                  <p className={styles.blogPostAuthor}>
                    {translations[language].blogSection.author}
                  </p>
                  <div className={styles.blogPostCardText}>
                    <h3 className={styles.blogPostCardTitle}>
                      {translations[language].blogSection.title3}
                    </h3>
                    <p className={styles.blogPostCardExcerpt}>
                      {translations[language].blogSection.excerpt3}
                    </p>
                  </div>
                </div>
                <div className={styles.blogPostCardCategories}>
                  <div className={styles.blogBadge}>
                    <span className={styles.blogBadgeJobs}>
                      {translations[language].blogSection.jobs}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
