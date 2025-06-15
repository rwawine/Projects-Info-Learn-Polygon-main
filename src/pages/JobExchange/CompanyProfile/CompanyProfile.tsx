import React from 'react';
import styles from './CompanyProfile.module.css';

export default function CompanyProfile() {
  return (
    <section className={styles.profileContainer}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9f9ce93fe7211a4638cc614cd7c3dae7cd3dce0?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.companyLogo} alt="Яндекс логотип" />
      <div className={styles.companyInfo}>
        <h2 className={styles.companyName}>Яндекс</h2>
        <p className={styles.companyDescription}>
          Яндекс — одна из крупнейших IT-компаний в России. Мы развиваем
          самую популярную в стране поисковую систему и создаём сервисы,
          которые делают жизнь людей более комфортной и яркой.
        </p>
      </div>
    </section>
  );
}
