import React from 'react';
import styles from './Filter.module.css';

interface FilterSectionProps {
    title: string;
    children: React.ReactNode;
}

export const FilterSection: React.FC<FilterSectionProps> = ({ title, children }) => {
    return (
        <fieldset className={styles.section}>
            <legend className={styles.sectionTitle}>{title}</legend>
            <div className={styles.optionsContainer}>
                {children}
            </div>
        </fieldset>
    );
};
