"use client";
import React from 'react';
import styles from './Filter.module.css';

interface CheckboxOptionProps {
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
}

const CheckIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0303 3.97358C14.3232 4.26647 14.3232 4.74134 14.0303 5.03424L7.03033 12.0342C6.73744 12.3271 6.26256 12.3271 5.96967 12.0342L2.46967 8.53424C2.17678 8.24134 2.17678 7.76647 2.46967 7.47358C2.76256 7.18068 3.23744 7.18068 3.53033 7.47358L6.5 10.4432L12.9697 3.97358C13.2626 3.68068 13.7374 3.68068 14.0303 3.97358Z"
      fill="white"
    />
  </svg>
);

export const CheckboxOption: React.FC<CheckboxOptionProps> = ({
  name,
  checked,
  onChange,
  children
}) => {
  return (
    <label className={styles.option}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{ display: 'none' }}
      />
      <div className={styles.checkboxContainer}>
        {checked ? (
          <>
            <div className={styles.checkedBox} />
            <div style={{ position: 'absolute', left: 0, top: 0 }}>
              <CheckIcon />
            </div>
          </>
        ) : (
          <div className={styles.uncheckedBox} />
        )}
      </div>
      <span className={styles.optionText}>{children}</span>
    </label>
  );
};
