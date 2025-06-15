"use client";
import * as React from "react";
import styles from "./CaptchaComponent.module.css";

interface CaptchaOverlayProps {
    onVerify: () => void;
    mode?: 'fullscreen' | 'inline';
}

export const CaptchaOverlay: React.FC<CaptchaOverlayProps> = ({ onVerify, mode = 'fullscreen' }) => {
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
        setSelectedSquares([]);
        setError(null);
    };

    const handleSquareClick = (index: number, color: string) => {
        if (color === '#845bff') {
            if (selectedSquares.includes(index)) {
                setSelectedSquares(selectedSquares.filter(i => i !== index));
            } else {
                setSelectedSquares([...selectedSquares, index]);
            }
            setError(null);
        } else {
            setError("Выберите только фиолетовые квадраты");
        }
    };

    const handleVerify = () => {
        if (selectedSquares.length === 2 &&
            selectedSquares.every(index => colors[index] === '#845bff')) {
            onVerify();
        } else if (selectedSquares.length !== 2) {
            setError("Выберите ровно 2 фиолетовых квадрата");
        } else {
            setError("Выбраны неверные квадраты");
        }
    };

    const containerClassName = mode === 'fullscreen' 
        ? styles.container 
        : styles.inlineContainer;

    const captchaIcons = [
        new URL('../../../assets/captha/Captcha/Active/Captcha/1.svg', import.meta.url).href,
        new URL('../../../assets/captha/Captcha/Active/Captcha/2.svg', import.meta.url).href,
        new URL('../../../assets/captha/Captcha/Active/Captcha/3.svg', import.meta.url).href,
        new URL('../../../assets/captha/Captcha/Active/Captcha/4.svg', import.meta.url).href
    ];

    return (
        <>
            {mode === 'fullscreen' && <div className={styles.overlay}></div>}
            <div className={containerClassName}>
                <div className={styles.headerContainer}>
                    <div className={styles.title}>Выберите космонавта с табличкой в руках</div>

                    <div className={styles.randomizeContainer}>
                        <button
                            className={styles.randomizeButton}
                            onClick={handleRandomizeColors}
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                                <path d="M4.89941 0.882812C5.14673 0.918913 5.36295 1.07687 5.4707 1.30762L6.03516 2.51758C9.71485 1.55002 13.4887 3.73697 14.4746 7.41602L14.5576 7.7627C15.2998 11.2253 13.2947 14.6987 9.9248 15.7871L9.58301 15.8877C6.00849 16.8452 2.33753 14.8201 1.21289 11.3379L1.1123 10.9971C0.797955 9.8239 0.804678 8.63761 1.08008 7.53516L1.10254 7.46191C1.23146 7.10425 1.61344 6.89513 1.99023 6.98926L2.06348 7.01172C2.39705 7.13207 2.60134 7.47227 2.55078 7.82324L2.53613 7.89941C2.32096 8.761 2.31479 9.68759 2.56152 10.6084L2.64062 10.876C3.52156 13.6028 6.3961 15.1885 9.19531 14.4385L9.46289 14.3594C12.1015 13.5069 13.6717 10.7875 13.0908 8.07617L13.0254 7.80469C12.2772 5.01235 9.47864 3.31848 6.68359 3.90625L7.2334 5.08398L7.27148 5.18457C7.34367 5.42385 7.29218 5.68639 7.12891 5.88184C6.96569 6.07704 6.71685 6.17482 6.46875 6.14648L6.3623 6.12598L3.21582 5.2959C3.02748 5.24621 2.86687 5.12546 2.7666 4.96094L2.72754 4.8877C2.63348 4.68613 2.63306 4.45331 2.72754 4.25195L4.1123 1.30566L4.16504 1.21191C4.30266 1.00334 4.53737 0.874686 4.79199 0.875L4.89941 0.882812Z" fill="#CED2E0" stroke="#CED2E0" stroke-width="0.25" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
               
                <div className={styles.gridContainer}>
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className={`${styles.gridItem} ${selectedSquares.includes(index) ? styles.selected : ''}`}
                            style={{ backgroundColor: color }}
                            onClick={() => handleSquareClick(index, color)}
                        >
                            <img
                                src={captchaIcons[index % captchaIcons.length]}
                                alt="Captcha icon"
                                width="24"
                                height="24"
                            />
                        </div>
                    ))}
                </div>

                {error && <div className={styles.error}>{error}</div>}

                <button
                    className={styles.button}
                    onClick={handleVerify}
                >
                    Я не робот
                </button>
            </div>
        </>
    );
}; 