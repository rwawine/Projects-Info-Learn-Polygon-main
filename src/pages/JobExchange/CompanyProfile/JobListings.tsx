"use client";
import React from 'react';
import styles from './JobListings.module.css';
import { useLanguage } from '../../../context/LanguageContext';

export default function JobListings() {
  const { language, translations } = useLanguage();
  const jobCards = [
    {
      id: 1,
      company: translations[language].jobListings.company,
      title: translations[language].jobListings.title,
      location: translations[language].jobListings.location,
      type: translations[language].jobListings.type,
      salary: translations[language].jobListings.salary,
      time: translations[language].jobListings.time,
      isNew: true,
      isHighlighted: true
    },
    {
      id: 2,
      company: translations[language].jobListings.company2,
      title: translations[language].jobListings.title2,
      location: translations[language].jobListings.location2,
      type: translations[language].jobListings.type2,
      salary: translations[language].jobListings.salary2,
      time: translations[language].jobListings.time2,
      isNew: false,
      isHighlighted: false
    },
    {
      id: 3,
      company: translations[language].jobListings.company3,
      title: translations[language].jobListings.title3,
      location: translations[language].jobListings.location3,
      type: translations[language].jobListings.type3,
      salary: translations[language].jobListings.salary3,
      time: translations[language].jobListings.time3,
      isNew: false,
      isHighlighted: false
    },
    {
      id: 4,
      company: translations[language].jobListings.company4,
      title: translations[language].jobListings.title4,
      location: translations[language].jobListings.location4,
      type: translations[language].jobListings.type4,
      salary: translations[language].jobListings.salary4,
      time: translations[language].jobListings.time4,
      isNew: false,
      isHighlighted: false
    },
    {
      id: 5,
      company: translations[language].jobListings.company5,
      title: translations[language].jobListings.title5,
      location: translations[language].jobListings.location5,
      type: translations[language].jobListings.type5,
      salary: translations[language].jobListings.salary5,
      time: translations[language].jobListings.time5,
      isNew: false,
      isHighlighted: false
    },
    {
      id: 6,
      company: translations[language].jobListings.company6,
      title: translations[language].jobListings.title6,
      location: translations[language].jobListings.location6,
      type: translations[language].jobListings.type6,
      salary: translations[language].jobListings.salary6,
      time: translations[language].jobListings.time6,
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
              <span className={styles.filtersText}>{translations[language].jobListings.filters}</span>
            </div>
          </button>
          <div className={styles.sortDropdown}>
            <span className={styles.sortText}>{translations[language].jobListings.sortBy}</span>
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
                      <span className={styles.newBadge}>{translations[language].jobListings.newJob}</span>
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
