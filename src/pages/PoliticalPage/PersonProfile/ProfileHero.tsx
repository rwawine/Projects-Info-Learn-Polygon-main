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
            Пол: женский
            <br />
            Дата рождения: 19.09. 1975
            <br />
            Семейное положение: в браке
            <br />
            Количество детей: 1<br />
            Образование: Магистратура Катарийский государственный
            университет имени Давида Кемпа
            <br />
            Военная служба: нет
            <br />
            Партия Республиканцев
          </div>
        </div>
        <button className={styles.downloadButton}>
          Скачать декларацию
        </button>
      </article>
    </section>
  );
}
