import React from 'react';
import styles from './ProfileHero.module.css';

export function ProfileHero() {
  return (
    <section className={styles.profileSection}>
      <div className={styles.profileImageContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/58bb13c795e733e2341d0779659fe0050ef276d3?placeholderIfAbsent=true&apiKey=7e6da1720f6048238d49aadd8c584765"
          className={styles.profileImage}
          alt="Самира Наргес"
        />
      </div>
      <article className={styles.profileContent}>
        <div className={styles.profileInfo}>
          <div className={styles.profileDetails}>
            <p className={styles.position}>
              Министр Здравоохранения
            </p>
            <h1 className={styles.name}>
              Самира Наргес
            </h1>
          </div>
          <div className={styles.personalInfo}>
            <p>Пол: женский</p>
            <p>Дата рождения: 19.09. 1975</p>
            <p>Семейное положение: в браке</p>
            <p>Количество детей: 1</p>
            <p>Образование: Магистратура Катарийский государственный
              университет имени Давида Кемпа</p>
            <p>Военная служба: нет</p>
            <p>Партия Республиканцев</p>
          </div>
        </div>
        <button className={styles.downloadButton}>
          Скачать декларацию
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M5 5L9 1M9 1L13 5M9 1V13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1 13V17H17V13" stroke="white" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
      </article>
    </section>
  );
}
