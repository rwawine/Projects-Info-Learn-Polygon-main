import React from 'react';
import styles from './JobVacancy.module.css';
import { useLanguage } from '../../../context/LanguageContext';

interface JobData {
  id: number;
  company: string;
  position: string;
  isNew: boolean;
  location: string;
  type: string;
  salary: string;
  timeAgo: string;
  logo: string;
  isHighlighted: boolean;
}

interface JobCardProps {
  job: JobData;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const cardClass = job.isHighlighted ? styles.jobCardHighlighted : styles.jobCard;
  const { language, translations } = useLanguage();
  return (
    <article className={cardClass}>
      <img src={job.logo} className={styles.companyLogo} alt={`${job.company} logo`} />
      <div className={styles.jobContent}>
        <div className={styles.jobHeader}>
          <div className={styles.jobInfo}>
            <h3 className={styles.companyName}>{job.company}</h3>
            <div className={styles.positionRow}>
              <h4 className={styles.positionTitle}>{job.position}</h4>
              {job.isNew && (
                <span className={styles.newBadge}>{translations[language].jobCard.newJob}</span>
              )}
            </div>
          </div>
          <div className={styles.jobDetails}>
            <div className={styles.jobDetail}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c370e234ab7119b1829f967dc284f005757bec71?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.detailIcon} alt="" />
              <span className={styles.detailText}>{job.location}</span>
            </div>
            <div className={styles.jobDetail}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d38bca87e40bc217b5152e5c39b8532a96e14f4e?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.detailIcon} alt="" />
              <span className={styles.detailText}>{job.type}</span>
            </div>
            <div className={styles.jobDetail}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8249060218663101a26c00799b08f1f09cd4c3c5?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.detailIcon} alt="" />
              <span className={styles.detailText}>{job.salary}</span>
            </div>
            <div className={styles.jobDetail}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/02829ddc1c6a2d36295c27a1f4bf864640fd653f?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.detailIcon} alt="" />
              <span className={styles.detailText}>{job.timeAgo}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobCard;
