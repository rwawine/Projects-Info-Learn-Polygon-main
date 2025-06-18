import React from 'react';
import { MemberCard } from './MemberCard';
import styles from './PartyMembers.module.css';
import { useLanguage } from '../../../context/LanguageContext';

export function PartyMembers() {
  const { language, translations } = useLanguage();

  const partyMembers = [
    {
      id: 1,
      name: translations[language].partyMembers.name,
      position: translations[language].partyMembers.position,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/771d5128286adb43f519c39a0b825dddd7b43d98?placeholderIfAbsent=true&apiKey=7e6da1720f6048238d49aadd8c584765'
    },
    {
      id: 2,
      name: translations[language].partyMembers.name1,
      position: translations[language].partyMembers.position,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b75e3ccf9254f1b314cad2f7fe42cef055cfd35e?placeholderIfAbsent=true&apiKey=7e6da1720f6048238d49aadd8c584765'
    },
    {
      id: 3,
      name: translations[language].partyMembers.name2,
      position: translations[language].partyMembers.position,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/98be95cfc1d93228dee9d8b0fc487fc95c840104?placeholderIfAbsent=true&apiKey=7e6da1720f6048238d49aadd8c584765'
    },
    {
      id: 4,
      name: translations[language].partyMembers.name3,
      position: translations[language].partyMembers.position,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b003a1e139350b569f60d419eb75c760c6810247?placeholderIfAbsent=true&apiKey=7e6da1720f6048238d49aadd8c584765'
    },
    {
      id: 5,
      name: translations[language].partyMembers.name4,
      position: translations[language].partyMembers.position,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/792d96de60178ae95531e226ae3eae86d481e259?placeholderIfAbsent=true&apiKey=7e6da1720f6048238d49aadd8c584765'
    },
    {
      id: 6,
      name: translations[language].partyMembers.name5,
      position: translations[language].partyMembers.position,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f464cee150e00a795e5cf47b443618412b52e91?placeholderIfAbsent=true&apiKey=7e6da1720f6048238d49aadd8c584765'
    }
  ];
  return (
    <section className={styles.partyMembersSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          {translations[language].partyMembers.sectionTitle}
        </h2>
        <p className={styles.sectionDescription}>
          {translations[language].partyMembers.sectionDescription}
        </p>
      </div>
      <div className={styles.membersGrid}>
        {partyMembers.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            position={member.position}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
