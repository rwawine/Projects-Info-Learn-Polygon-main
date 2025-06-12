"use client";
import * as React from "react";
import styles from "./CaptchaComponent.module.css";

interface CaptchaOverlayProps {
    onVerify: () => void;
}

export const CaptchaOverlay: React.FC<CaptchaOverlayProps> = ({ onVerify }) => {
    // Generate random colors function
    const generateRandomColors = () => {
        return Array(9).fill(0).map(() => 
            Math.random() > 0.5 ? '#845bff' : '#ffc700'
        );
    };
    
    const [colors, setColors] = React.useState(generateRandomColors());
    const [selectedSquares, setSelectedSquares] = React.useState<number[]>([]);
    const [error, setError] = React.useState<string | null>(null);

    const handleRandomizeColors = () => {
        const newColors = generateRandomColors();
        setColors(newColors);
        
        // Clear selections when colors change
        setSelectedSquares([]);
        setError(null);
    };

    const handleSquareClick = (index: number, color: string) => {
        if (color === '#845bff') { // Only allow selecting purple squares
            if (selectedSquares.includes(index)) {
                // Deselect the square
                setSelectedSquares(selectedSquares.filter(i => i !== index));
            } else {
                // Select the square
                setSelectedSquares([...selectedSquares, index]);
            }
            setError(null);
        } else {
            setError("Выберите только фиолетовые квадраты");
        }
    };

    const handleVerify = () => {
        // Check if exactly 2 purple squares are selected
        if (selectedSquares.length === 2 && 
            selectedSquares.every(index => colors[index] === '#845bff')) {
            onVerify();
        } else if (selectedSquares.length !== 2) {
            setError("Выберите ровно 2 фиолетовых квадрата");
        } else {
            setError("Выбраны неверные квадраты");
        }
    };

    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <div className={styles.iconWrapper}>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c94465548e3134e93fb7a651ccc571442d9b5840?placeholderIfAbsent=true"
                            alt="Captcha icon"
                            className={styles.icon}
                        />
                    </div>
                    <div className={styles.title}>Выберите 2 фиолетовых квадрата</div>
                </div>

                <div className={styles.randomizeContainer}>
                    <button 
                        className={styles.randomizeButton}
                        onClick={handleRandomizeColors}
                        type="button"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.65 2.35C13.19 1.9 12.54 1.64 11.83 1.64C11.12 1.64 10.47 1.9 10.01 2.35L2.35 10.01C1.9 10.47 1.64 11.12 1.64 11.83C1.64 12.54 1.9 13.19 2.35 13.65C2.81 14.1 3.46 14.36 4.17 14.36C4.88 14.36 5.53 14.1 5.99 13.65L13.65 5.99C14.1 5.53 14.36 4.88 14.36 4.17C14.36 3.46 14.1 2.81 13.65 2.35Z" fill="white"/>
                            <path d="M4 4C5.1 4 6 3.1 6 2C6 0.9 5.1 0 4 0C2.9 0 2 0.9 2 2C2 3.1 2.9 4 4 4Z" fill="white"/>
                            <path d="M12 16C13.1 16 14 15.1 14 14C14 12.9 13.1 12 12 12C10.9 12 10 12.9 10 14C10 15.1 10.9 16 12 16Z" fill="white"/>
                        </svg>
                        Перемешать цвета
                    </button>
                </div>

                <div className={styles.gridContainer}>
                    {colors.map((color, index) => (
                        <div 
                            key={index} 
                            className={`${styles.gridItem} ${selectedSquares.includes(index) ? styles.selected : ''}`}
                            style={{ backgroundColor: color }}
                            onClick={() => handleSquareClick(index, color)}
                        >
                        </div>
                    ))}
                </div>

                {error && <div className={styles.error}>{error}</div>}

                <button
                    className={styles.button}
                    onClick={handleVerify}
                >
                    Подтвердить
                </button>
            </div>
        </>
    );
}; 