"use client";
import * as React from "react";
import styles from "../HomePage.module.css";
import { CaptchaOverlay } from "../Captcha/CaptchaOverlay";
import captchaStyles from "../Captcha/CaptchaComponent.module.css";

interface ArticleContentProps {
    title: string;
    content: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({
    title,
    content,
}) => {
    const storageKey = `article_captcha_verified_${title}`;
    const [isVerified, setIsVerified] = React.useState(false);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const verified = sessionStorage.getItem(storageKey);
            if (verified === 'true') {
                setIsVerified(true);
            }
        }
    }, [storageKey]);

    const handleVerify = () => {
        setIsVerified(true);
        if (typeof window !== 'undefined') {
            sessionStorage.setItem(storageKey, 'true');
        }
    };

    return (
        <article className={styles.contentSection}>
            <h1 className={styles.articleTitle}>{title}</h1>
            <div className={`${styles.articleText} ${!isVerified ? styles.blurContent : ''}`}>
                {content.split('\n').map((paragraph, index) => (
                    <React.Fragment key={index}>
                        {paragraph}
                        {index < content.split('\n').length - 1 && <br />}
                    </React.Fragment>
                ))}
            </div>
            {!isVerified && (
                <div className={captchaStyles.inlineAbsolute}>
                    <CaptchaOverlay onVerify={handleVerify} mode="inline" />
                </div>
            )}
        </article>
    );
};
