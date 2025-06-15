import React from 'react';
import styles from './MemberCard.module.css';

interface MemberCardProps {
  name: string;
  position: string;
  imageUrl: string;
}

export function MemberCard({ name, position, imageUrl }: MemberCardProps) {
  return (
    <article className={styles.memberCard}>
      <img
        src={imageUrl}
        className={styles.memberImage}
        alt={name}
      />
      <div className={styles.memberInfo}>
        <p className={styles.memberPosition}>
          {position}
        </p>
        <h3 className={styles.memberName}>
          {name}
        </h3>
      </div>
    </article>
  );
}
