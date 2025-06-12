"use client";
import * as React from "react";
import styles from "./EmailConfirm.module.css";

interface EmailConfirmProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  termsText?: string;
  successText?: string;
}

export const EmailConfirm: React.FC<EmailConfirmProps> = ({
  title = "Новостной ресурс",
  subtitle = "Подпишитесь, чтобы получать актуальные новости сразу на почту",
  buttonText = "Подписаться",
  termsText = "Условия подписки",
  successText = "Спасибо за подписку!"
}) => {
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
      setError("Пожалуйста, введите email");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Пожалуйста, введите корректный email");
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
        zIndex: 9999,
        backgroundColor: '#ffffff',
        border: '2px solid #E63946',
        boxShadow: '0 6px 24px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        padding: '30px',
        maxWidth: '500px',
        textAlign: 'center',
        fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif'
      }}
    >
      <button onClick={handleClose} className={styles.closeButton}>
        &times;
      </button>
      
      {isSubmitted ? (
        <div className={styles.success}>
          <p className={styles.successText}>{successText}</p>
        </div>
      ) : !showForm ? (
        <>
          <h2 className={styles.title}>{title}</h2>
          <button onClick={handleInitialClick} className={styles.button}>
            {buttonText}
          </button>
        </>
      ) : (
        <>
          <h2 className={styles.title}>{title}</h2>
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
        </>
      )}
    </div>
  );
};
