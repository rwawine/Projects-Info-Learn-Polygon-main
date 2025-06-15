import React from 'react';
import styles from './JobVacancy.module.css';

const JobDetails: React.FC = () => {
  return (
    <aside className={styles.jobDetails}>
      <div className={styles.jobDetailsCard}>
        <div className={styles.jobDetailsHeader}>
          <div className={styles.companyInfo}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/04224ac7b1ec90a658947e6bfe73ba67349b58f5?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.companyIcon} alt="CAPCO logo" />
            <span className={styles.companyLocation}>CAPCO, Москва, Россия</span>
          </div>
          <button className={styles.applyButton}>Откликнуться</button>
        </div>
        <h2 className={styles.jobTitle}>Консультант по визуализации данных - Power BI</h2>

        <div className={styles.jobTags}>
          <div className={styles.tagsList}>
            <span className={styles.tag}>Москва</span>
            <span className={styles.tag}>Офис</span>
            <span className={styles.tag}>40 часов в неделю</span>
          </div>
          <div className={styles.jobDescription}>
            <p className={styles.descriptionText}>
              Capco - это глобальная консалтинговая компания в области технологий и бизнеса, специализирующаяся на секторе финансовых услуг. Мы стремимся помочь нашим клиентам добиться успеха в постоянно меняющейся отрасли, сочетая инновационное мышление с уникальными экспертными ноу-хау. Решения, которые мы предлагаем нашим клиентам каждый день, так же разнообразны, как и наши сотрудники.
              <br />В рамках нашей продолжающейся глобальной стратегии расширения Capco расширяет свою практику обработки данных в Великобритании в нашем лондонском офисе. В настоящее время мы ищем консультантов по управлению, обладающих опытом анализа данных, для руководства и развития команд для поддержки крупномасштабных проектов по преобразованию для наших ведущих клиентов в сфере финансовых услуг.
              <br />Кандидат должен:Обладаете настоящей страстью к обработке данных и стремлением перевести отрасль на перспективный подход к анализу данныхБудьте готовы присоединиться к команде, которая будет развивать возможности британской практики визуализации данных и более широкую британскую и глобальную практику обработки данных для поддержки таких изменяющихся в отрасли тем, как визуализация данных, рассказывание историй о данных, описательная и диагностическая аналитика, Диалоговая аналитика и
            </p>
            <button className={styles.loadMoreButton}>Загрузить еще</button>
          </div>
        </div>
      </div>

      <div className={styles.companyOverview}>
        <h3 className={styles.overviewTitle}>Обзор компании</h3>
        <div className={styles.companyStats}>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Количество сотрудников</span>
            <span className={styles.statValue}>От 5 тыс. до 10 тыс. чел</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Средняя зарплата</span>
            <span className={styles.statValue}>183 895 рублей (2023)</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Год создания</span>
            <span className={styles.statValue}>30.08.2022</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Уставной капитал, ₽</span>
            <span className={styles.statValue}>875,3 млн</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Чистая прибыль, ₽</span>
            <span className={styles.statValue}>2,6 млрд (2023 г.)</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Баланс, ₽</span>
            <span className={styles.statValue}>18,26 млрд (2023 г.)</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default JobDetails;
