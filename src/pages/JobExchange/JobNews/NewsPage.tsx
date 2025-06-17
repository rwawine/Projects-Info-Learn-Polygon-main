import React from 'react';
import { Header } from './Header';
import { BlogCard } from './BlogCard';
import { HorizontalBlogCard } from './HorizontalBlogCard';
import { FeaturedBlogCard } from './FeaturedBlogCard';
import { Pagination } from './Pagination';
import Footer from './Footer';
import styles from './NewsPage.module.css';
import { useLanguage } from '../../../context/LanguageContext';

export const JobNews: React.FC = () => {
  const { language, translations } = useLanguage();
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />

        <h1 className={styles.pageTitle}>
          {translations[language].newsPage.title}
        </h1>

        <main className={styles.mainContent}>
          <div className={styles.contentWrapper}>
            <section className={styles.topSection}>
              <FeaturedBlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a3c79c02edea6863301dc65a8ac82e59e5ef91af?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author={translations[language].newsPageJob.author1}
                date={translations[language].newsPageJob.date1}
                title={translations[language].newsPageJob.title1}
                description={translations[language].newsPageJob.description1}
                category={translations[language].newsPageJob.category1}
                categoryColor="#6941c6"
                categoryBgColor="#f9f5ff"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d6fa9005a7fa076a973b5803f8fbe4d2848ab714?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                className={styles.featuredCard}
              />

              <div className={styles.sideColumn}>
                <HorizontalBlogCard
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b3955f69e078f5be2c98c85b51ea46580235d107?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                  author={translations[language].newsPageJob.author2}
                  date={translations[language].newsPageJob.date2}
                  title={translations[language].newsPageJob.title2}
                  description={translations[language].newsPageJob.description2}
                  category={translations[language].newsPageJob.category2}
                  categoryColor="#026aa2"
                  categoryBgColor="#f0f9ff"
                  className={styles.horizontalCard}
                />

                <HorizontalBlogCard
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/616b1374613c9f660f9e28a2ef5b165eb8613fdd?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                  author={translations[language].newsPageJob.author3}
                  date={translations[language].newsPageJob.date3}
                  title={translations[language].newsPageJob.title3}
                  description={translations[language].newsPageJob.description3}
                  category={translations[language].newsPageJob.category3}
                  categoryColor="#027a48"
                  categoryBgColor="#ecfdf3"
                  className={styles.horizontalCardSecond}
                />
              </div>
            </section>

            <FeaturedBlogCard
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5157eb1d801287939c798ed511f51acafd200f43?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              author={translations[language].newsPageJob.author4}
              date={translations[language].newsPageJob.date4}
              title={translations[language].newsPageJob.title4}
              description={translations[language].newsPageJob.description4}
              category={translations[language].newsPageJob.category4}
              categoryColor="#6941c6"
              categoryBgColor="#f9f5ff"
              iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d6fa9005a7fa076a973b5803f8fbe4d2848ab714?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              isHorizontal={true}
              className={styles.featuredSection}
            />

            <section className={styles.gridSection}>
              <BlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8a51ffe309380c089cd407af59e33ea045381750?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author={translations[language].newsPageJob.author5}
                date={translations[language].newsPageJob.date5}
                title={translations[language].newsPageJob.title5}
                description={translations[language].newsPageJob.description5}
                category={translations[language].newsPageJob.category5}
                categoryColor="#6941c6"
                categoryBgColor="#f9f5ff"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/faaa59db969f838cb97d1c132996b061f5d82c25?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              />

              <BlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e5210bf3ffe599528627555baf51e9af0b686da0?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author={translations[language].newsPageJob.author6}
                date={translations[language].newsPageJob.date6}
                title={translations[language].newsPageJob.title6}
                description={translations[language].newsPageJob.description6}
                category={translations[language].newsPageJob.category6}
                categoryColor="#026aa2"
                categoryBgColor="#f0f9ff"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6a94d8972155680da4a762d46a265765593099?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              />

              <BlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ed48762038554ffde9efd285c30634ec90569545?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author="Кэндис У"
                date={translations[language].newsPageJob.date7}
                title={translations[language].newsPageJob.title7}
                description={translations[language].newsPageJob.description7}
                category={translations[language].newsPageJob.category7}
                categoryColor="#6941c6"
                categoryBgColor="#f9f5ff"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d6fa9005a7fa076a973b5803f8fbe4d2848ab714?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              />
            </section>

            <section className={styles.gridSectionLarge}>
              <BlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/50929b115871f2e51ee0126ac8e08b70e1a1d5ed?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author={translations[language].newsPageJob.author8}
                date={translations[language].newsPageJob.date8}
                title={translations[language].newsPageJob.title8}
                description={translations[language].newsPageJob.description8}
                category={translations[language].newsPageJob.category8}
                categoryColor="#6941c6"
                categoryBgColor="#f9f5ff"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/faaa59db969f838cb97d1c132996b061f5d82c25?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              />

              <BlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/da18fa1a17c89b0a3c9917b088b2eb092de0f42a?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author={translations[language].newsPageJob.author9}
                date={translations[language].newsPageJob.date9}
                title={translations[language].newsPageJob.title9}
                description={translations[language].newsPageJob.description9}
                category={translations[language].newsPageJob.category9}
                categoryColor="#027a48"
                categoryBgColor="#ecfdf3"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6a94d8972155680da4a762d46a265765593099?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              />

              <BlogCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b8cb7c32cfd11fa4b1b8faa51988762785f29632?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                author={translations[language].newsPageJob.author10}
                date={translations[language].newsPageJob.date10}
                title={translations[language].newsPageJob.title10}
                description={translations[language].newsPageJob.description10}
                category={translations[language].newsPageJob.category10}
                categoryColor="#6941c6"
                categoryBgColor="#f9f5ff"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d6fa9005a7fa076a973b5803f8fbe4d2848ab714?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              />
            </section>

            <FeaturedBlogCard
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5157eb1d801287939c798ed511f51acafd200f43?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              author={translations[language].newsPageJob.author11}
              date={translations[language].newsPageJob.date11}
              title={translations[language].newsPageJob.title11}
              description={translations[language].newsPageJob.description11}
              category={translations[language].newsPageJob.category11}
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
