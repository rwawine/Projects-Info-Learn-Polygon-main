"use client";
import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./CompanyListing.module.css";

interface CompanyCardProps {
  logoSrc: string;
  companyName: string;
  location: string;
  description: string;
  jobCount: string;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({
  logoSrc,
  companyName,
  location,
  description,
  jobCount,
}) => {
  return (
    <article className={styles.companyCard}>
      <header className={styles.companyHeader}>
        <img
          src={logoSrc}
          alt={`${companyName} logo`}
          className={styles.companyLogo}
        />
        <div className={styles.companyInfo}>
          <h3 className={styles.companyName}>
            {companyName}
          </h3>
          <div className={styles.companyLocation}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/47de60ea22c6e6c0ec1c67e061c87e2d04538e1a?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              alt="Location"
              className={styles.locationIcon}
            />
            <span className={styles.locationText}>
              {location}
            </span>
          </div>
        </div>
      </header>
      <p className={styles.companyDescription}>
        {description}
      </p>
      <footer className={styles.companyFooter}>
        <span className={styles.jobCount}>
          {jobCount}
        </span>
        <Link to={`/job-companies/profile`}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8675a5e792e8b47823971e353e190316ac786133?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
            alt="View company"
            className={styles.searchIcon}
          />
        </Link>
      </footer>
    </article>
  );
};
