"use client";
import React from 'react';
import styles from './Filter.module.css';

interface RadioOptionProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  children: React.ReactNode;
}

const RadioIcon: React.FC<{ checked: boolean }> = ({ checked }) => {
  if (checked) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <circle cx="9" cy="9" r="8" fill="#EF6C00"/>
          <circle cx="9" cy="9" r="4" fill="white"/>
        </g>
        <defs>
          <filter id="filter0_d" x="0" y="1" width="18" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
        </defs>
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="8" fill="white"/>
      <circle cx="8" cy="8" r="7.5" stroke="#141414" strokeOpacity="0.3"/>
    </svg>
  );
};

export const RadioOption: React.FC<RadioOptionProps> = ({
  name,
  value,
  checked,
  onChange,
  children
}) => {
  return (
    <label className={styles.option}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        style={{ display: 'none' }}
      />
      <RadioIcon checked={checked} />
      <span className={styles.optionText}>{children}</span>
    </label>
  );
};
