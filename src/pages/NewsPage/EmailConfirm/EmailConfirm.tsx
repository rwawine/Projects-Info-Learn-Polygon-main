"use client";
import * as React from "react";
import styles from "./EmailConfirm.module.css";
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from "../../../translations";

interface EmailConfirmProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    termsText?: string;
    successText?: string;
}

export const EmailConfirm: React.FC<EmailConfirmProps> = (props) => {
    const { language, translations } = useLanguage();
    const {
        title = translations[language].emailConfirm.title,
        subtitle = translations[language].emailConfirm.subtitle,
        buttonText = translations[language].emailConfirm.buttonText,
        termsText = translations[language].emailConfirm.termsText,
        successText = translations[language].emailConfirm.successText
    } = props;
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("");
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [showForm, setShowForm] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true);

    // Debug log
    React.useEffect(() => {
        console.log("EmailConfirm component mounted");

        // Force the component to be visible after a short delay
        const timer = setTimeout(() => {
            const element = document.querySelector(`.${styles.container}`) as HTMLElement;
            console.log("EmailConfirm element:", element);

            if (element) {
                console.log("Element styles:", window.getComputedStyle(element));
                element.style.opacity = "1";
                element.style.visibility = "visible";
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Check sessionStorage on component mount
    React.useEffect(() => {
        const wasSubmitted = sessionStorage.getItem("emailSubscriptionSubmitted");
        console.log("Session storage check:", wasSubmitted);
        if (wasSubmitted === "true") {
            setIsSubmitted(true);
            // Reset after page refresh
            sessionStorage.removeItem("emailSubscriptionSubmitted");
        }
    }, []);

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setError(translations[language].emailConfirm.error);
            return;
        }

        if (!validateEmail(email)) {
            setError(translations[language].emailConfirm.error);
            return;
        }

        setError("");
        setIsSubmitted(true);

        // Store submission in sessionStorage
        sessionStorage.setItem("emailSubscriptionSubmitted", "true");

        // Hide component after 5 seconds
        setTimeout(() => {
            setIsVisible(false);
        }, 5000);
    };

    const handleInitialClick = () => {
        setShowForm(true);
    };

    const handleClose = () => {
        setIsVisible(false);
        // Don't store in localStorage when just closing
        // This way it will reappear after refresh
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className={styles.container}
            style={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 50,
                width: '600px !important',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#1e1e1e',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.25)',
                borderRadius: '8px',
                padding: '14px',
                textAlign: 'center',
                fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif'
            }}
        >
            {isSubmitted ? (
                <div className={styles.success}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17" fill="none">
  <path d="M25.8967 8.29927L18.1146 2.16691C15.2952 -0.0548459 10.7058 -0.0564272 7.88639 2.16691L0.106356 8.29927C0.0963223 8.30718 0.0882955 8.31667 0.0802686 8.32615C0.0742485 8.33248 0.0682283 8.33722 0.0622082 8.34355C0.0521746 8.35462 0.0461544 8.36569 0.0401343 8.37676C0.0361209 8.3815 0.0321074 8.38624 0.0301007 8.39257C0.0240806 8.40522 0.0200671 8.41787 0.0160537 8.43052C0.0160537 8.43527 0.0120403 8.44001 0.0100336 8.44633C0.00602015 8.46215 0.00401343 8.47954 0.00401343 8.49694C0.00401343 8.49852 0.00401343 8.5001 0.00401343 8.50168H0C0 8.52066 0.00200671 8.53805 0.00602014 8.55703C0.00602014 8.56335 0.0120403 8.56968 0.014047 8.576C0.0180604 8.58707 0.0220739 8.59814 0.0260873 8.60921C0.0301007 8.6187 0.0381276 8.6266 0.042141 8.63451C0.0481612 8.64242 0.0521746 8.65032 0.0581947 8.65823C0.0722417 8.67404 0.0862887 8.68828 0.104349 8.70251L7.88438 14.8333C9.2951 15.945 11.1473 16.5 12.9995 16.5C14.8517 16.5 16.7039 15.945 18.1146 14.8333L25.8946 8.70251C26.0351 8.59181 26.0351 8.41155 25.8946 8.30085L25.8967 8.29927ZM13.0015 10.4008L10.5894 8.50168L13.0015 6.60093L15.4116 8.50168L13.0015 10.4008ZM8.3981 2.57015C10.8503 0.636191 14.7895 0.571357 17.342 2.37406L10.0737 8.10161C9.98742 8.03993 9.90113 7.98143 9.81083 7.92292C8.52051 7.08482 6.91514 6.62782 5.21947 6.62782C4.39872 6.62782 3.60005 6.73534 2.84753 6.94092L8.3981 2.57015ZM17.6049 14.4301C15.1527 16.3624 11.2135 16.4288 8.65898 14.6261L15.9273 8.89859C15.9273 8.89859 15.9293 8.90017 15.9313 8.90175C16.0457 8.9824 16.1621 9.05989 16.2805 9.13421C16.3046 9.15002 16.3286 9.16425 16.3547 9.18007C16.4731 9.25281 16.5915 9.3208 16.7139 9.38722C17.9039 10.0277 19.3066 10.3724 20.7795 10.3724C21.6003 10.3724 22.399 10.2649 23.1515 10.0593L17.6029 14.4316L17.6049 14.4301Z" fill="white"/>
</svg>
                    <p className={styles.successText}>{successText}</p>
                    <button onClick={handleClose} className={styles.closeButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M17.6585 5.42888C18.049 5.03836 18.6822 5.03835 19.0727 5.42888C19.4632 5.8194 19.4632 6.45257 19.0727 6.84309L13.4158 12.5L19.0727 18.1568C19.4632 18.5473 19.4632 19.1805 19.0727 19.571C18.6822 19.9615 18.049 19.9615 17.6585 19.571L12.0016 13.9142L6.34481 19.571C6.3387 19.5771 6.33254 19.5831 6.32632 19.589C5.93455 19.9614 5.31501 19.9554 4.93059 19.571C4.6377 19.2781 4.56447 18.8487 4.71092 18.4876C4.75973 18.3672 4.83296 18.2544 4.93059 18.1568L10.5874 12.5L4.93059 6.84314C4.54006 6.45262 4.54006 5.81945 4.93059 5.42893C5.32111 5.0384 5.95428 5.0384 6.3448 5.42893L12.0016 11.0857L17.6585 5.42888Z" fill="white" />
                        </svg>
                    </button>
                </div>
            ) : !showForm ? (
                <>
                    <div className={styles.leftContainer}>                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17" fill="none">
  <path d="M25.8967 8.29927L18.1146 2.16691C15.2952 -0.0548459 10.7058 -0.0564272 7.88639 2.16691L0.106356 8.29927C0.0963223 8.30718 0.0882955 8.31667 0.0802686 8.32615C0.0742485 8.33248 0.0682283 8.33722 0.0622082 8.34355C0.0521746 8.35462 0.0461544 8.36569 0.0401343 8.37676C0.0361209 8.3815 0.0321074 8.38624 0.0301007 8.39257C0.0240806 8.40522 0.0200671 8.41787 0.0160537 8.43052C0.0160537 8.43527 0.0120403 8.44001 0.0100336 8.44633C0.00602015 8.46215 0.00401343 8.47954 0.00401343 8.49694C0.00401343 8.49852 0.00401343 8.5001 0.00401343 8.50168H0C0 8.52066 0.00200671 8.53805 0.00602014 8.55703C0.00602014 8.56335 0.0120403 8.56968 0.014047 8.576C0.0180604 8.58707 0.0220739 8.59814 0.0260873 8.60921C0.0301007 8.6187 0.0381276 8.6266 0.042141 8.63451C0.0481612 8.64242 0.0521746 8.65032 0.0581947 8.65823C0.0722417 8.67404 0.0862887 8.68828 0.104349 8.70251L7.88438 14.8333C9.2951 15.945 11.1473 16.5 12.9995 16.5C14.8517 16.5 16.7039 15.945 18.1146 14.8333L25.8946 8.70251C26.0351 8.59181 26.0351 8.41155 25.8946 8.30085L25.8967 8.29927ZM13.0015 10.4008L10.5894 8.50168L13.0015 6.60093L15.4116 8.50168L13.0015 10.4008ZM8.3981 2.57015C10.8503 0.636191 14.7895 0.571357 17.342 2.37406L10.0737 8.10161C9.98742 8.03993 9.90113 7.98143 9.81083 7.92292C8.52051 7.08482 6.91514 6.62782 5.21947 6.62782C4.39872 6.62782 3.60005 6.73534 2.84753 6.94092L8.3981 2.57015ZM17.6049 14.4301C15.1527 16.3624 11.2135 16.4288 8.65898 14.6261L15.9273 8.89859C15.9273 8.89859 15.9293 8.90017 15.9313 8.90175C16.0457 8.9824 16.1621 9.05989 16.2805 9.13421C16.3046 9.15002 16.3286 9.16425 16.3547 9.18007C16.4731 9.25281 16.5915 9.3208 16.7139 9.38722C17.9039 10.0277 19.3066 10.3724 20.7795 10.3724C21.6003 10.3724 22.399 10.2649 23.1515 10.0593L17.6029 14.4316L17.6049 14.4301Z" fill="white"/>
</svg> <h2 className={styles.title}>{title}</h2>
                        <button onClick={handleInitialClick} className={styles.button}>
                            {buttonText}
                        </button></div>
                    <button onClick={handleClose} className={styles.closeButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M17.6585 5.42888C18.049 5.03836 18.6822 5.03835 19.0727 5.42888C19.4632 5.8194 19.4632 6.45257 19.0727 6.84309L13.4158 12.5L19.0727 18.1568C19.4632 18.5473 19.4632 19.1805 19.0727 19.571C18.6822 19.9615 18.049 19.9615 17.6585 19.571L12.0016 13.9142L6.34481 19.571C6.3387 19.5771 6.33254 19.5831 6.32632 19.589C5.93455 19.9614 5.31501 19.9554 4.93059 19.571C4.6377 19.2781 4.56447 18.8487 4.71092 18.4876C4.75973 18.3672 4.83296 18.2544 4.93059 18.1568L10.5874 12.5L4.93059 6.84314C4.54006 6.45262 4.54006 5.81945 4.93059 5.42893C5.32111 5.0384 5.95428 5.0384 6.3448 5.42893L12.0016 11.0857L17.6585 5.42888Z" fill="white" />
                        </svg>
                    </button>
                </>
            ) : (
                <>
                    <div className={styles.confirmContainer}>
                        <p className={styles.subtitle}>{subtitle}</p>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Введите вашу почту"
                                    className={styles.input}
                                    autoFocus
                                />
                                {error && <p className={styles.error}>{error}</p>}
                            </div>
                            <button type="submit" className={styles.button}>
                                {buttonText}
                            </button>
                        </form>
                        <a href="#" className={styles.terms}>
                            {termsText}
                        </a>
                    </div>
                    <button onClick={handleClose} className={styles.closeButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M17.6585 5.42888C18.049 5.03836 18.6822 5.03835 19.0727 5.42888C19.4632 5.8194 19.4632 6.45257 19.0727 6.84309L13.4158 12.5L19.0727 18.1568C19.4632 18.5473 19.4632 19.1805 19.0727 19.571C18.6822 19.9615 18.049 19.9615 17.6585 19.571L12.0016 13.9142L6.34481 19.571C6.3387 19.5771 6.33254 19.5831 6.32632 19.589C5.93455 19.9614 5.31501 19.9554 4.93059 19.571C4.6377 19.2781 4.56447 18.8487 4.71092 18.4876C4.75973 18.3672 4.83296 18.2544 4.93059 18.1568L10.5874 12.5L4.93059 6.84314C4.54006 6.45262 4.54006 5.81945 4.93059 5.42893C5.32111 5.0384 5.95428 5.0384 6.3448 5.42893L12.0016 11.0857L17.6585 5.42888Z" fill="white" />
                        </svg>
                    </button>
                </>
            )}
        </div>
    );
};
