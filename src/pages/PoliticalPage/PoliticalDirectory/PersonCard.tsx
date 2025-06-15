"use client";
import * as React from "react";
import styles from "./PersonCard.module.css";
import { ArrowIcon } from "./icons/ArrowIcon.tsx";

interface Person {
  id: string;
  name: string;
  party: string;
  imageUrl: string;
}

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <article className={styles.personCard}>
      <div className={styles.imageContainer}>
        <img
          src={person.imageUrl}
          alt={person.name}
          className={styles.personImage}
        />
      </div>
      <div className={styles.personInfo}>
        <div className={styles.personDetails}>
          <h2 className={styles.personName}>
            {person.name}
          </h2>
          <p className={styles.personParty}>
            {person.party}
          </p>
        </div>
        <button className={styles.infoButton}>
          <span className={styles.infoButtonText}>
            Полная информация
          </span>
          <ArrowIcon />
        </button>
      </div>
    </article>
  );
}
