import React from 'react';
import styles from './JobVacancy.module.css';
import FilterControls from './FilterControls.tsx';
import JobCard from './JobCard.tsx';
import Pagination from './Pagination.tsx';
import { useLanguage } from '../../../context/LanguageContext';

const JobListingsVacancy: React.FC = () => {
  const { language, translations } = useLanguage();
  const jobsData = [
    {
      id: 1,
      company: translations[language].jobListingsVacancy.company1,
      position: translations[language].jobListingsVacancy.title1,
      isNew: true,
      location: translations[language].jobListingsVacancy.location1,
      type: translations[language].jobListingsVacancy.type1,
      salary: translations[language].jobListingsVacancy.salary1,
      timeAgo: translations[language].jobListingsVacancy.time1,
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6f64b65cfa0c7c96503ac986edbd0fe9f184609c?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf',
      isHighlighted: false
    },
    {
      id: 2,
      company: translations[language].jobListingsVacancy.company2,
      position: translations[language].jobListingsVacancy.title2,
      isNew: false,
      location: translations[language].jobListingsVacancy.location2,
      type: translations[language].jobListingsVacancy.type2,
      salary: translations[language].jobListingsVacancy.salary2,
      timeAgo: translations[language].jobListingsVacancy.time2,
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bbcf41f0489b55d9798bff01556ee865e0d58346?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf',
      isHighlighted: true
    },
    {
      id: 3,
      company: translations[language].jobListingsVacancy.company3,
      position: translations[language].jobListingsVacancy.title3,
      isNew: false,
      location: translations[language].jobListingsVacancy.location3,
      type: translations[language].jobListingsVacancy.type3,
      salary: translations[language].jobListingsVacancy.salary3,
      timeAgo: translations[language].jobListingsVacancy.time3,
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/20ca315d00748f4c3d789edc1287602310bcb923?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf',
      isHighlighted: false
    },
    {
      id: 4,
      company: translations[language].jobListingsVacancy.company4,
      position: translations[language].jobListingsVacancy.title4,
      isNew: false,
      location: translations[language].jobListingsVacancy.location4,
      type: translations[language].jobListingsVacancy.type4,
      salary: translations[language].jobListingsVacancy.salary4,
      timeAgo: translations[language].jobListingsVacancy.time4,
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/aac02a05760d3a2841029f618f624e536a9813f7?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf',
      isHighlighted: false
    },
    {
      id: 5,
      company: translations[language].jobListingsVacancy.company5,
      position: translations[language].jobListingsVacancy.title5,
      isNew: false,
      location: translations[language].jobListingsVacancy.location5,
      type: translations[language].jobListingsVacancy.type5,
      salary: translations[language].jobListingsVacancy.salary5,
      timeAgo: translations[language].jobListingsVacancy.time5,
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f9ef193a799fa8183243f50bbf0cc5f3655c5875?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf',
      isHighlighted: false
    },
    {
      id: 6,
      company: translations[language].jobListingsVacancy.company6,
      position: translations[language].jobListingsVacancy.title6,
      isNew: false,
      location: translations[language].jobListingsVacancy.location6,
      type: translations[language].jobListingsVacancy.type6,
      salary: translations[language].jobListingsVacancy.salary6,
      timeAgo: translations[language].jobListingsVacancy.time6,
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/88dd4600c73920de352235c9b500580f67f574d7?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf',
      isHighlighted: false
    }
  ];

  return (
    <section className={styles.jobListingsVacancy}>
      <div className={styles.jobListingsVacancyContainer}>
        <FilterControls />
        <div className={styles.jobCards}>
          {jobsData.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default JobListingsVacancy;
