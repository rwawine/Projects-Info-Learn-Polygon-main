"use client";
import * as React from "react";
import styles from "./CompanyListing.module.css";
import { Header } from "./Header.tsx";
import SearchSection from "../JobVacancy/SearchSection";
import { CompanyCard } from "./CompanyCard.tsx";
import { Pagination } from "./Pagination.tsx";
import { Footer } from "./Footer.tsx";

interface CompanyListingProps {}

const companiesData = [
  {
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5584473a0283ec675fe6938314e4eb11ed296376?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
    companyName: "Dribbble",
    location: "Соединенные Штаты",
    description: "Яндекс — одна из крупнейших IT-компаний в России. Мы развиваем самую популярную в стране поисковую систему и создаём сервисы, которые делают жизнь людей более комфортной и яркой.",
    jobCount: "16 открытых вакансий"
  },
  {
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b06be28e2c8737375d4407c1f5f5129ecb30b173?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
    companyName: "Behance",
    location: "Канада",
    description: "Тинькофф — финансовая экосистема для 15 млн клиентов. Наша команда создает и развивает удобные продукты и сервисы: суперприложение, голосовых роботов, инвестиции, кредитные и дебетовые карты.",
    jobCount: "12 открытых вакансий"
  },
  {
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9ee6001f82830a255d4662cee08498c0709951f?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
    companyName: "Adobe",
    location: "Австралия",
    description: "VK Team — это 10 тысяч профессионалов, которые создают удобные сервисы для миллионов людей. Мы стремимся улучшить все сферы жизни наших пользователей.",
    jobCount: "8 открытых вакансий"
  },
  {
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/802609bf3bdf83de5881ae4cabe741fe354ddafc?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf",
    companyName: "Adobe",
    location: "Австралия",
    description: "Capco - это глобальная консалтинговая компания в области технологий и бизнеса, специализирующаяся на секторе финансовых услуг. Мы стремимся помочь нашим клиентам добиться успеха в постоянно меняющейся отрасли.",
    jobCount: "8 открытых вакансий"
  }
];

export const CompanyListing: React.FC<CompanyListingProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.mainContent}>
          <h1 className={styles.pageTitle}>
            Компании
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
