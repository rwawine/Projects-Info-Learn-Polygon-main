"use client";
import * as React from "react";
import styles from "./RepresentativeCard.module.css";

interface RepresentativeCardProps {
  imageUrl: string;
  title: string;
  name: string;
}

function RepresentativeCard({ imageUrl, title, name }: RepresentativeCardProps) {
  return (
    <article className={styles.representativeCard}>
      <img
        src={imageUrl}
        className={styles.representativeImage}
        alt={`${name} - ${title}`}
      />
      <div className={styles.representativeInfo}>
        <p className={styles.representativeTitle}>
          {title}
        </p>
        <h3 className={styles.representativeName}>
          {name}
        </h3>
      </div>
    </article>
  );
}

export default RepresentativeCard;
