"use client";
import * as React from "react";
import styles from "./CompanyListing.module.css";
import { Header } from "./Header.tsx";
import SearchSection from "../JobVacancy/SearchSection";
import { CompanyCard } from "./CompanyCard.tsx";
import { Pagination } from "./Pagination.tsx";
import Footer from "./Footer.tsx";
import { useLanguage } from '../../../context/LanguageContext';

interface CompanyListingProps {}

export const CompanyListing: React.FC<CompanyListingProps> = () => {
  const { language, translations } = useLanguage();

  const companiesData = [
    {
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5584473a0283ec675fe6938314e4eb11ed296376?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
      companyName: translations[language].companyListing.companyName1,
      location: translations[language].companyListing.location1,
      description: translations[language].companyListing.description1,
      jobCount: translations[language].companyListing.jobCount1
    },
    {
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b06be28e2c8737375d4407c1f5f5129ecb30b173?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
      companyName: translations[language].companyListing.companyName2,
      location: translations[language].companyListing.location2,
      description: translations[language].companyListing.description2,
      jobCount: translations[language].companyListing.jobCount2
    },
    {
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9ee6001f82830a255d4662cee08498c0709951f?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
      companyName: translations[language].companyListing.companyName3,
      location: translations[language].companyListing.location3,
      description: translations[language].companyListing.description3,
      jobCount: translations[language].companyListing.jobCount3
    },
    {
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/802609bf3bdf83de5881ae4cabe741fe354ddafc?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
      companyName: translations[language].companyListing.companyName4,
      location: translations[language].companyListing.location4,
      description: translations[language].companyListing.description4,
      jobCount: translations[language].companyListing.jobCount4
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.mainContent}>
          <h1 className={styles.pageTitle}>
            {translations[language].companyListing.titlesMain}
          </h1>
          <SearchSection />
          <section className={styles.companiesGrid}>
            <div className={styles.companiesContainer}>
              {companiesData.map((company, index) => (
                <CompanyCard
                  key={index}
                  logoSrc={company.logoSrc}
                  companyName={company.companyName}
                  location={company.location}
                  description={company.description}
                  jobCount={company.jobCount}
                />
              ))}
            </div>
            <Pagination />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CompanyListing;
