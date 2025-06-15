"use client";
import React from 'react';
import styles from './JobListings.module.css';

export default function JobListings() {
  const jobCards = [
    {
      id: 1,
      company: "Яндекс",
      title: "Консультант по визуализации данных - Power BI",
      location: "Брюссель",
      type: "Полная занятость",
      salary: "50-55 тыс.",
      time: "29 минут назад",
      isNew: true,
      isHighlighted: true
    },
    {
      id: 2,
      company: "Яндекс",
      title: "Младший UI-дизайнер",
      location: "Мадрид",
      type: "Полная занятость",
      salary: "30-32 тыс.",
      time: "1 день назад",
      isNew: false,
      isHighlighted: false
    },
    {
      id: 3,
      company: "Яндекс",
      title: "Инженер технической поддержки",
      location: "Соединенные Штаты",
      type: "Полная занятость",
      salary: "50-52 тыс.",
      time: "1 день назад",
      isNew: false,
      isHighlighted: false
    },
    {
      id: 4,
      company: "Яндекс",
      title: "Дизайнер продукта",
      location: "Лондон",
      type: "Полная занятость",
      salary: "40-42 тыс.",
      time: "2 дня назад",
      isNew: false,
      isHighlighted: false
    },
    {
      id: 5,
      company: "Яндекс",
      title: "Копирайтер (Рост)",
      location: "Лондон",
      type: "Полная занятость",
      salary: "38-40 тыс.",
      time: "3 дня назад",
      isNew: false,
      isHighlighted: false
    },
    {
      id: 6,
      company: "Яндекс",
      title: "Старший UX/UI дизайнер",
      location: "Соединенные Штаты",
      type: "Полная занятость",
      salary: "38-40 тыс.",
      time: "20 дней назад",
      isNew: false,
      isHighlighted: false
    }
  ];

  return (
    <aside className={styles.listingsContainer}>
      <div className={styles.filtersContainer}>
        <div className={styles.filterControls}>
          <button className={styles.filtersButton}>
            <div className={styles.filtersButtonContent}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f421666852abc14cef0f91a1ac1b06af326229c8?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.filterIcon} alt="" />
              <span className={styles.filtersText}>Фильтры</span>
            </div>
          </button>
          <div className={styles.sortDropdown}>
            <span className={styles.sortText}>Сортировать по</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b85ca9008a9ad320b2a03b59d84901d35103d3c?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.sortIcon} alt="" />
          </div>
        </div>
      </div>

      <div className={styles.jobCardsContainer}>
        {jobCards.map((job) => (
          <article
            key={job.id}
            className={job.isHighlighted ? styles.jobCardHighlighted : styles.jobCard}
          >
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/40844b18408884f1e749dc7eefced0cbdfd4a10f?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.companyAvatar} alt={`${job.company} логотип`} />
            <div className={styles.jobContent}>
              <div className={styles.jobHeader}>
                <div className={styles.jobHeaderContent}>
                  <h3 className={styles.companyName}>{job.company}</h3>
                  <div className={styles.titleContainer}>
                    <h4 className={styles.jobTitle}>{job.title}</h4>
                    {job.isNew && (
                      <span className={styles.newBadge}>Новая вакансия</span>
                    )}
                  </div>
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.jobDetailItem}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c370e234ab7119b1829f967dc284f005757bec71?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.detailIcon} alt="" />
                    <span className={styles.detailText}>{job.location}</span>
                  </div>
                  <div className={styles.jobDetailItem}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d38bca87e40bc217b5152e5c39b8532a96e14f4e?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.detailIcon} alt="" />
                    <span className={styles.detailText}>{job.type}</span>
                  </div>
                  <div className={styles.jobDetailItem}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8249060218663101a26c00799b08f1f09cd4c3c5?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.detailIcon} alt="" />
                    <span className={styles.detailText}>{job.salary}</span>
                  </div>
                  <div className={styles.jobDetailItem}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/02829ddc1c6a2d36295c27a1f4bf864640fd653f?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.detailIcon} alt="" />
                    <span className={styles.detailText}>{job.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}
