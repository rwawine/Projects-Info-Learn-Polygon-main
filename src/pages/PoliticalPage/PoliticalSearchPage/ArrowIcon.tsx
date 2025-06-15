import React from 'react';

interface ArrowIconProps {
  className?: string;
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({ className }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '16px', height: '16px', aspectRatio: '1/1' }}
    >
      <path
        d="M8.69538 4.13953L12.3892 7.83333H1.9987C1.6305 7.83333 1.33203 8.13187 1.33203 8.5C1.33203 8.8682 1.6305 9.16667 1.9987 9.16667H12.3892L8.69538 12.8605C8.43504 13.1209 8.43504 13.543 8.69538 13.8033C8.95578 14.0637 9.37784 14.0637 9.63818 13.8033L14.4701 8.97147C14.7304 8.71107 14.7304 8.289 14.4701 8.0286L9.63818 3.19673C9.50758 3.0661 9.33624 3.00101 9.16504 3.00147C9.12298 3.00158 9.08091 3.00565 9.03944 3.01367C8.91338 3.03807 8.79305 3.09909 8.69538 3.19673C8.43504 3.45707 8.43504 3.87919 8.69538 4.13953Z"
        fill="black"
      />
    </svg>
  );
};
