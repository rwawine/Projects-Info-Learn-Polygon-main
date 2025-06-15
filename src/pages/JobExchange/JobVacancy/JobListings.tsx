import React from 'react';
import styles from './JobVacancy.module.css';
import FilterControls from './FilterControls.tsx';
import JobCard from './JobCard.tsx';
import Pagination from './Pagination.tsx';

const jobsData = [
  {
    id: 1,
    company: 'VK',
    position: 'Аналитик данных',
    isNew: true,
    location: 'Минск',
    type: 'Полная занятость',
    salary: '50-55 тыс.',
    timeAgo: '29 минут назад',
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6f64b65cfa0c7c96503ac986edbd0fe9f184609c?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf',
    isHighlighted: false
  },
  {
    id: 2,
    company: 'CAPCO',
    position: 'Консультант по визуализации данных - Power BI',
    isNew: false,
    location: 'Мадрид',
    type: 'Полная занятость',
    salary: '30-32 тыс.',
    timeAgo: '1 день назад',
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bbcf41f0489b55d9798bff01556ee865e0d58346?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf',
    isHighlighted: true
  },
  {
    id: 3,
    company: 'Яндекс',
    position: 'Разработчик Full Stack',
    isNew: false,
    location: 'Соединенные Штаты',
    type: 'Полная занятость',
    salary: '50-52 тыс.',
    timeAgo: '1 день назад',
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/20ca315d00748f4c3d789edc1287602310bcb923?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf',
    isHighlighted: false
  },
  {
    id: 4,
    company: 'Raycast corp',
    position: 'Дизайнер продукта',
    isNew: false,
    location: 'Лондон',
    type: 'Полная занятость',
    salary: '40-42 тыс.',
    timeAgo: '2 дня назад',
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/aac02a05760d3a2841029f618f624e536a9813f7?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf',
    isHighlighted: false
  },
  {
    id: 5,
    company: 'Loom',
    position: 'Копирайтер (Рост)',
    isNew: false,
    location: 'Лондон',
    type: 'Полная занятость',
    salary: '38-40 тыс.',
    timeAgo: '3 дня назад',
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f9ef193a799fa8183243f50bbf0cc5f3655c5875?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf',
    isHighlighted: false
  },
  {
    id: 6,
    company: 'Trainline group',
    position: 'Старший UX/UI дизайнер',
    isNew: false,
    location: 'Париж',
    type: 'Полная занятость',
    salary: '38-40 тыс.',
    timeAgo: '20 часов в неделю',
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/88dd4600c73920de352235c9b500580f67f574d7?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf',
    isHighlighted: false
  }
];

const JobListings: React.FC = () => {
  return (
    <section className={styles.jobListings}>
      <div className={styles.jobListingsContainer}>
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

export default JobListings;
