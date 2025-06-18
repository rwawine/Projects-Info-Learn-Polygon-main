"use client";
import React from 'react';
import styles from './Filter.module.css';
import { useLanguage } from '../../../context/LanguageContext';

interface SalaryToggleProps {
    selectedPeriod: 'monthly' | 'yearly';
    onChange: (period: 'monthly' | 'yearly') => void;
}

export const SalaryToggle: React.FC<SalaryToggleProps> = ({ selectedPeriod, onChange }) => {
    const { language, translations } = useLanguage();
    return (
        <div className={styles.salaryToggle}>
            <button
                type="button"
                className={styles.monthlyOption}
                onClick={() => onChange('monthly')}
                style={{
                    backgroundColor: selectedPeriod === 'monthly' ? '#ef6c000d' : '#fff',
                    color: selectedPeriod === 'monthly' ? '#ef6c00' : '#393f47',
                    border: selectedPeriod === 'monthly' ? '1px solid #ef6c00' : '1px solid #1414141a',
                    opacity: selectedPeriod === 'monthly' ? 0.8 : 1
                }}
            >
                {translations[language].filterComponent.monthly}
            </button>
            <button
                type="button"
                className={styles.yearlyOption}
                onClick={() => onChange('yearly')}
                style={{
                    backgroundColor: selectedPeriod === 'yearly' ? '#ef6c000d' : '#fff',
                    color: selectedPeriod === 'yearly' ? '#ef6c00' : '#393f47',
                    border: selectedPeriod === 'yearly' ? '1px solid #ef6c00' : '1px solid #1414141a',
                    opacity: selectedPeriod === 'yearly' ? 0.8 : 1
                }}
            >
                {translations[language].filterComponent.yearly}
            </button>
        </div>
    );
};
