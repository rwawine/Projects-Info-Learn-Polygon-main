import React from 'react';
import { Header } from './Header';
import { BlogCard } from './BlogCard';
import { HorizontalBlogCard } from './HorizontalBlogCard';
import { FeaturedBlogCard } from './FeaturedBlogCard';
import { Pagination } from './Pagination';
import { Footer } from './Footer';
import styles from './NewsPage.module.css';

export const JobNews: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />

        <h1 className={styles.pageTitle}>
          Новости биржи
        </h1>

        <main className={styles.mainContent}>
          <div className={styles.contentWrapper}>
            <section className={styles.topSection}>
              <FeaturedBlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a3c79c02edea6863301dc65a8ac82e59e5ef91af?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author="Оливия Рей"
                date="1 Янв 2023"
                title="Топ-5 профессий будущего"
                description="Узнайте, какие профессии будут наиболее востребованы в ближайшие годы."
                category="Тенденции"
                categoryColor="#6941c6"
                categoryBgColor="#f9f5ff"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d6fa9005a7fa076a973b5803f8fbe4d2848ab714?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                className={styles.featuredCard}
              />

              <div className={styles.sideColumn}>
                <HorizontalBlogCard
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b3955f69e078f5be2c98c85b51ea46580235d107?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                  author="Феникс Бейкер"
                  date="1 Янв 2023"
                  title="Как написать идеальное резюме"
                  description="Полезные советы по созданию резюме, которое привлечёт внимание работодателей"
                  category="Рекомендации"
                  categoryColor="#026aa2"
                  categoryBgColor="#f0f9ff"
                  className={styles.horizontalCard}
                />

                <HorizontalBlogCard
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/616b1374613c9f660f9e28a2ef5b165eb8613fdd?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                  author="Лана Штайнер"
                  date="1 Янв 2023"
                  title="Новые вакансии месяца"
                  description="Обзор самых свежих объявлений о работе в различных отраслях."
                  category="Вакансии"
                  categoryColor="#027a48"
                  categoryBgColor="#ecfdf3"
                  className={styles.horizontalCardSecond}
                />
              </div>
            </section>

            <FeaturedBlogCard
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5157eb1d801287939c798ed511f51acafd200f43?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              author="Оливия Рей"
              date="1 Янв 2023"
              title="Работа на удалёнке: плюсы и минусы"
              description="Исследуем преимущества и недостатки удалённого формата работы"
              category="Удалённая работа"
              categoryColor="#6941c6"
              categoryBgColor="#f9f5ff"
              iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d6fa9005a7fa076a973b5803f8fbe4d2848ab714?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              isHorizontal={true}
              className={styles.featuredSection}
            />

            <section className={styles.gridSection}>
              <BlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8a51ffe309380c089cd407af59e33ea045381750?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author="Алек Уиттен"
                date="1 Янв 2023"
                title="Как успешно пройти собеседование"
                description="Подготовка к собеседованию и эффективные стратегии."
                category="Собеседование"
                categoryColor="#6941c6"
                categoryBgColor="#f9f5ff"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/faaa59db969f838cb97d1c132996b061f5d82c25?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              />

              <BlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e5210bf3ffe599528627555baf51e9af0b686da0?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author="Деми Уилкинсон"
                date="1 Янв 2023"
                title="Рынок труда после пандемии"
                description="Как COVID-19 изменил рынок труда и какие профессии актуальны."
                category="Аналитика"
                categoryColor="#026aa2"
                categoryBgColor="#f0f9ff"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6a94d8972155680da4a762d46a265765593099?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              />

              <BlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ed48762038554ffde9efd285c30634ec90569545?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author="Кэндис У"
                date="1 Янв 2023"
                title="Советы по поиску работы"
                description="Эффективные подходы к поиску и заявлению на вакансии."
                category="Поиск работы"
                categoryColor="#6941c6"
                categoryBgColor="#f9f5ff"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d6fa9005a7fa076a973b5803f8fbe4d2848ab714?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              />
            </section>

            <section className={styles.gridSectionLarge}>
              <BlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/50929b115871f2e51ee0126ac8e08b70e1a1d5ed?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author="Натали Крейг"
                date="1 Янв 2023"
                title="Интервью с успешным рекрутером"
                description="Полезные советы от профессионала по трудоустройству."
                category="Интервью"
                categoryColor="#6941c6"
                categoryBgColor="#f9f5ff"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/faaa59db969f838cb97d1c132996b061f5d82c25?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              />

              <BlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/da18fa1a17c89b0a3c9917b088b2eb092de0f42a?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author="Дрю Кано"
                date="1 Янв 2023"
                title="Технологии, меняющие карьеру"
                description="Как цифровые технологии влияют на выбор профессии."
                category="Технологии"
                categoryColor="#027a48"
                categoryBgColor="#ecfdf3"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6a94d8972155680da4a762d46a265765593099?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              />

              <BlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b8cb7c32cfd11fa4b1b8faa51988762785f29632?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author="Орландо Диггс"
                date="1 Янв 2023"
                title="Ошибки при составлении резюме"
                description="Самые распространённые ошибки и как их избежать."
                category="Советы"
                categoryColor="#6941c6"
                categoryBgColor="#f9f5ff"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d6fa9005a7fa076a973b5803f8fbe4d2848ab714?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              />
            </section>

            <FeaturedBlogCard
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5157eb1d801287939c798ed511f51acafd200f43?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              author="Оливия Рей"
              date="1 Янв 2023"
              title="Секреты успешного карьерного роста"
              description="Стратегии, которые помогут вам продвинуться по карьерной лестнице"
              category="Карьера"
              categoryColor="#6941c6"
              categoryBgColor="#f9f5ff"
              iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d6fa9005a7fa076a973b5803f8fbe4d2848ab714?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              isHorizontal={true}
              className={styles.featuredSection}
            />
          </div>

          <div className={styles.paginationContainer}>
            <Pagination />
          </div>
        </main>

        <div className={styles.footerSection}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default JobNews;
