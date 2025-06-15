import React, { useState } from 'react';
import styles from './JobDetailPanel.module.css';

export default function JobDetailPanel() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className={styles.detailPanelContainer}>
      <article className={styles.jobDetailCard}>
        <header className={styles.jobHeader}>
          <div className={styles.jobHeaderTop}>
            <div className={styles.companyInfo}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/eab9eecd1db008c46061b8b1ece86e81996104af?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.companyAvatar} alt="Яндекс логотип" />
              <span className={styles.companyLocation}>Яндекс, Брюссель</span>
            </div>
            <button className={styles.applyButton}>Откликнуться</button>
          </div>
          <h2 className={styles.jobTitle}>
            Консультант по визуализации данных - Power BI
          </h2>
        </header>

        <div className={styles.jobTags}>
          <div className={styles.tagsList}>
            <span className={styles.tag}>Брюссель</span>
            <span className={styles.tag}>Офис</span>
            <span className={styles.tag}>40 часов в неделю</span>
            <div className={styles.salaryTag}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac3cd28c2ac19e08e3a2a7a3ae9a6c7219e4c8f5?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.salaryIcon} alt="" />
              <span className={styles.salaryText}>50-55 тыс.</span>
            </div>
          </div>

          <div className={styles.jobDescription}>
            <p className={`${styles.descriptionText} ${!isExpanded ? styles.collapsed : ''}`}>
              Команда people-аналитики Яндекса ищет специалиста,
              который будет помогать развивать аналитику
              HR-маркетинга. Вам предстоит исследовать, как на воронку
              найма влияют разные каналы привлечения: рекламные
              кампании, DevRel, CRM-маркетинг, мероприятия Weekend
              Offer и Fast Track.
              <br />
              Какие задачи вас ждут
              <br />
              Развивать аналитику DevRel, мероприятий быстрого найма и
              удовлетворённости кандидатов
              <br />
              Анализировать базу кандидатов и CRM-коммуникации
              <br />
              Строить сквозную аналитику из разных источников данных
              (Яндекс Метрики, Форм, Контеста, Фемиды, Трекера,
              внешних рекламных источников)
              <br />
              Создавать аналитические отчёты и дашборды, считать
              корреляции и регрессии
              <br />
              Выдвигать гипотезы, исследовать данные и искать в них
              инсайты
              <br />
              Команда people-аналитики Яндекса ищет специалиста,
              который будет помогать развивать аналитику
              HR-маркетинга. Вам предстоит исследовать, как на воронку
              найма влияют разные каналы привлечения: рекламные
              кампании, DevRel, CRM-маркетинг, мероприятия Weekend
              Offer и Fast Track.
              <br />
              Какие задачи вас ждут
              <br />
              Развивать аналитику DevRel, мероприятий быстрого найма и
              удовлетворённости кандидатов
              <br />
              Анализировать базу кандидатов и CRM-коммуникации
              <br />
              Строить сквозную аналитику из разных источников данных
              (Яндекс Метрики, Форм, Контеста, Фемиды, Трекера,
              внешних рекламных источников)
              <br />
              Создавать аналитические отчёты и дашборды, считать
              корреляции и регрессии
              <br />
              Выдвигать гипотезы, исследовать данные и искать в них
              инсайты
            </p>
            <button 
              className={styles.loadMoreButton}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Свернуть' : 'Загрузить еще'}
            </button>
          </div>
        </div>
      </article>

      <section className={styles.companyOverview}>
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
      </section>
    </aside>
  );
}
