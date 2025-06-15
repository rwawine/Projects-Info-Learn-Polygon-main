"use client";
import * as React from "react";
import styles from "./JobBoard.module.css";

function BlogSection() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <header className={styles.blogHeader}>
          <h2 className={styles.blogTitle}>Недавние блоги</h2>
          <a href="#" className={styles.viewAllButton}>
            <span className={styles.viewAllText}>
              Все статьи
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
                  Оливия Рей • 1 Янв 2023
                </p>
                <div className={styles.blogTitleContainer}>
                  <h3 className={styles.blogPostTitle}>
                    Топ-5 профессий будущего
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
                  Узнайте, какие профессии будут наиболее востребованы в
                  ближайшие годы.
                </p>
              </div>
              <div className={styles.blogCategories}>
                <div className={styles.blogBadge}>
                  <span className={styles.blogBadgeText}>
                    Тенденции
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
                    Феникс Бейкер • 1 Янв 2023
                  </p>
                  <div className={styles.blogPostCardText}>
                    <h3 className={styles.blogPostCardTitle}>
                      Как написать идеальное резюме
                    </h3>
                    <p className={styles.blogPostCardExcerpt}>
                      Полезные советы по созданию резюме, которое
                      привлечёт внимание работодателей
                    </p>
                  </div>
                </div>
                <div className={styles.blogPostCardCategories}>
                  <div className={styles.blogBadge}>
                    <span className={styles.blogBadgeRecommendations}>
                      Рекомендации
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
                    Лана Штайнер • 1 Янв 2023
                  </p>
                  <div className={styles.blogPostCardText}>
                    <h3 className={styles.blogPostCardTitle}>
                      Новые вакансии месяца
                    </h3>
                    <p className={styles.blogPostCardExcerpt}>
                      Обзор самых свежих объявлений о работе в различных
                      отраслях.
                    </p>
                  </div>
                </div>
                <div className={styles.blogPostCardCategories}>
                  <div className={styles.blogBadge}>
                    <span className={styles.blogBadgeJobs}>
                      Вакансии
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
