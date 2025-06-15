"use client";
import * as React from "react";
import styles from "./PoliticalDirectory.module.css";
import { Header } from "./Header";
import { SearchSection } from "./SearchSection.tsx";
import { PersonCard } from "./PersonCard.tsx";
import { Footer } from "./Footer.tsx";

interface Person {
    id: string;
    name: string;
    party: string;
    imageUrl: string;
}

const mockPersons: Person[] = [
    {
        id: "1",
        name: "Абхай Аджит",
        party: "Представитель партии Роста",
        imageUrl: "https://placehold.co/227x213/293856/293856"
    },
    {
        id: "2",
        name: "Анушех Сартра",
        party: "Представитель партии Республиканцев",
        imageUrl: "https://placehold.co/213x213/293856/293856"
    },
    {
        id: "3",
        name: "Аргаван Сумати",
        party: "Представитель партии Стремлений к справедливости",
        imageUrl: "https://placehold.co/213x213/293856/293856"
    },
    {
        id: "4",
        name: "Самира Наргес",
        party: "Республиканская партия",
        imageUrl: "https://placehold.co/213x213/293856/293856"
    },
    {
        id: "5",
        name: "Абхай Аджит",
        party: "Представитель партии Роста",
        imageUrl: "https://placehold.co/227x213/293856/293856"
    },
    {
        id: "6",
        name: "Анушех Сартра",
        party: "Представитель партии Республиканцев",
        imageUrl: "https://placehold.co/213x213/293856/293856"
    },
    {
        id: "7",
        name: "Самира Наргес",
        party: "Республиканская партия",
        imageUrl: "https://placehold.co/213x213/293856/293856"
    },
    {
        id: "8",
        name: "Аргаван Сумати",
        party: "Представитель партии Стремлений к справедливости",
        imageUrl: "https://placehold.co/213x213/293856/293856"
    },
    {
        id: "9",
        name: "Абхай Аджит",
        party: "Представитель партии Роста",
        imageUrl: "https://placehold.co/227x213/293856/293856"
    }
];

export default function PoliticalDirectory() {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <main className={styles.mainContent}>
                <section className={styles.contentSection}>
                    <h1 className={styles.pageTitle}>
                        Перечень политических персон
                    </h1>
                    <SearchSection />
                    <div className={styles.personsGrid}>
                        {mockPersons.map((person) => (
                            <PersonCard key={person.id} person={person} />
                        ))}
                    </div>
                    <button className={styles.loadMoreButton}>
                        Загрузить еще
                    </button>
                </section>
            </main>
            <Footer />
        </div>
    );
}
