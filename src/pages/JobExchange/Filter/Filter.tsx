"use client";
import React, { useState } from 'react';
import styles from './Filter.module.css';
import { FilterSection } from './FilterSection.tsx';
import { RadioOption } from './RadioOption.tsx';
import { CheckboxOption } from './CheckboxOption.tsx';
import { SalaryToggle } from './SalaryToggle.tsx';
import { FilterActions } from './FilterActions.tsx';
import { useLanguage } from '../../../context/LanguageContext';


interface FilterState {
  location: string;
  salaryPeriod: 'monthly' | 'yearly';
  salaryRange: string;
  publicationDate: string;
  experience: string;
  employmentType: {
    fullTime: boolean;
    temporary: boolean;
    partTime: boolean;
  };
}

interface FilterProps {
  onClose?: () => void;
}

export const Filter: React.FC<FilterProps> = ({ onClose }) => {
  const { language, translations } = useLanguage();
  const [filters, setFilters] = useState<FilterState>({
    location: 'remote',
    salaryPeriod: 'yearly',
    salaryRange: 'any',
    publicationDate: 'all',
    experience: 'any',
    employmentType: {
      fullTime: true,
      temporary: false,
      partTime: false
    }
  });

  const handleLocationChange = (value: string) => {
    setFilters(prev => ({ ...prev, location: value }));
  };

  const handleSalaryPeriodChange = (period: 'monthly' | 'yearly') => {
    setFilters(prev => ({ ...prev, salaryPeriod: period }));
  };

  const handleSalaryRangeChange = (value: string) => {
    setFilters(prev => ({ ...prev, salaryRange: value }));
  };

  const handlePublicationDateChange = (value: string) => {
    setFilters(prev => ({ ...prev, publicationDate: value }));
  };

  const handleExperienceChange = (value: string) => {
    setFilters(prev => ({ ...prev, experience: value }));
  };

  const handleEmploymentTypeChange = (type: keyof FilterState['employmentType'], checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      employmentType: {
        ...prev.employmentType,
        [type]: checked
      }
    }));
  };

  const handleApply = () => {
    console.log('Applying filters:', filters);
    onClose?.();
  };

  return (
    <aside className={styles.filter}>
      <div className={styles.container}>
        <h2 className={styles.title}>{translations[language].filterComponent.title}</h2>

        <div className={styles.sectionsContainer}>
          <FilterSection title={translations[language].filterComponent.location}>
            <RadioOption
              name="location"
              value="nearby"
              checked={filters.location === 'nearby'}
              onChange={handleLocationChange}
            >
              {translations[language].filterComponent.nearby}
            </RadioOption>
            <RadioOption
              name="location"
              value="remote"
              checked={filters.location === 'remote'}
              onChange={handleLocationChange}
            >
              {translations[language].filterComponent.remote}
            </RadioOption>
            <RadioOption
              name="location"
              value="exact"
              checked={filters.location === 'exact'}
              onChange={handleLocationChange}
            >
              {translations[language].filterComponent.exact}
            </RadioOption>
          </FilterSection>

          <FilterSection title={translations[language].filterComponent.salary}>
            <SalaryToggle
              selectedPeriod={filters.salaryPeriod}
              onChange={handleSalaryPeriodChange}
            />
            <RadioOption
              name="salary"
              value="any"
              checked={filters.salaryRange === 'any'}
              onChange={handleSalaryRangeChange}
            >
              {translations[language].filterComponent.any}
            </RadioOption>
            <RadioOption
              name="salary"
              value="30000"
              checked={filters.salaryRange === '30000'}
              onChange={handleSalaryRangeChange}
            >
              &gt; 30000
            </RadioOption>
            <RadioOption
              name="salary"
              value="50000"
              checked={filters.salaryRange === '50000'}
              onChange={handleSalaryRangeChange}
            >
              &gt; 50000
            </RadioOption>
            <RadioOption
              name="salary"
              value="80000"
              checked={filters.salaryRange === '80000'}
              onChange={handleSalaryRangeChange}
            >
              &gt; 80000
            </RadioOption>
            <RadioOption
              name="salary"
              value="100000"
              checked={filters.salaryRange === '100000'}
              onChange={handleSalaryRangeChange}
            >
              &gt; 100000
            </RadioOption>
          </FilterSection>

          <FilterSection title={translations[language].filterComponent.publicationDate}>
            <RadioOption
              name="date"
              value="all"
              checked={filters.publicationDate === 'all'}
              onChange={handlePublicationDateChange}
            >
              {translations[language].filterComponent.allTime}
            </RadioOption>
            <RadioOption
              name="date"
              value="24h"
              checked={filters.publicationDate === '24h'}
              onChange={handlePublicationDateChange}
            >
              {translations[language].filterComponent.last24Hours}
            </RadioOption>
            <RadioOption
              name="date"
              value="3d"
              checked={filters.publicationDate === '3d'}
              onChange={handlePublicationDateChange}
            >
              {translations[language].filterComponent.last3Days}
            </RadioOption>
            <RadioOption
              name="date"
              value="7d"
              checked={filters.publicationDate === '7d'}
              onChange={handlePublicationDateChange}
            >
              {translations[language].filterComponent.last7Days}
            </RadioOption>
          </FilterSection>

          <FilterSection title={translations[language].filterComponent.experience}>
            <RadioOption
              name="experience"
              value="any"
              checked={filters.experience === 'any'}
              onChange={handleExperienceChange}
            >
              {translations[language].filterComponent.anyExperience}
            </RadioOption>
            <RadioOption
              name="experience"
              value="internship"
              checked={filters.experience === 'internship'}
              onChange={handleExperienceChange}
            >
              {translations[language].filterComponent.internship}
            </RadioOption>
            <RadioOption
              name="experience"
              value="remote"
              checked={filters.experience === 'remote'}
              onChange={handleExperienceChange}
            >
              {translations[language].filterComponent.remoteWork}
            </RadioOption>
          </FilterSection>

          <FilterSection title={translations[language].filterComponent.employmentType}>
            <CheckboxOption
              name="fullTime"
              checked={filters.employmentType.fullTime}
              onChange={(checked) => handleEmploymentTypeChange('fullTime', checked)}
            >
              {translations[language].filterComponent.fullTime}
            </CheckboxOption>
            <CheckboxOption
              name="temporary"
              checked={filters.employmentType.temporary}
              onChange={(checked) => handleEmploymentTypeChange('temporary', checked)}
            >
              {translations[language].filterComponent.temporary}
            </CheckboxOption>
            <CheckboxOption
              name="partTime"
              checked={filters.employmentType.partTime}
              onChange={(checked) => handleEmploymentTypeChange('partTime', checked)}
            >
              {translations[language].filterComponent.partTime}
            </CheckboxOption>
          </FilterSection>
        </div>

        <FilterActions
          resultsCount={28}
          onApply={handleApply}
        />
      </div>
    </aside>
  );
};

export default Filter;
