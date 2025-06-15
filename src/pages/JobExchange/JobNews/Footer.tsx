import React from 'react';

const footerStyles = {
  footer: {
    width: '100%',
    fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
  },
  content: {
    width: '100%',
  },
  topSection: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'space-between',
    alignItems: 'start',
    gap: '40px 100px',
    width: '100%',
  },
  logo: {
    color: '#1e1e1e',
    width: '181px',
    fontSize: '28px',
    fontWeight: 600,
  },
  linksSection: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'start',
    alignItems: 'start',
    gap: '40px 162px',
    minWidth: '240px',
    fontSize: '18px',
    fontWeight: 400,
  },
  linkColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  columnTitle: {
    color: '#1e1e1e',
    fontWeight: 600,
  },
  linkList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    marginTop: '27px',
  },
  link: {
    color: '#1e1e1e',
    textDecoration: 'none',
  },
  backLink: {
    color: '#1e1e1e',
    marginTop: '68px',
    fontSize: '18px',
    fontWeight: 400,
  },
  divider: {
    backgroundColor: '#1e1e1e9e',
    width: '100%',
    minHeight: '1px',
    marginTop: '35px',
    display: 'flex',
  },
  bottomSection: {
    color: '#1e1e1e',
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '40px 100px',
    width: '100%',
    marginTop: '35px',
    fontSize: '18px',
    fontWeight: 400,
  },
  copyright: {
    alignSelf: 'stretch',
    width: '244px',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  legalLinks: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'start',
    alignSelf: 'stretch',
    alignItems: 'center',
    gap: '40px 42px',
    minWidth: '240px',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  legalLink: {
    borderColor: '#1e1e1e',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid' as const,
    alignSelf: 'stretch',
    minWidth: '240px',
    height: '20px',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#1e1e1e',
    textDecoration: 'none',
  },
};

export const Footer: React.FC = () => {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.content}>
        <div style={footerStyles.topSection}>
          <h2 style={footerStyles.logo}>
            Биржа труда
          </h2>
          <div style={footerStyles.linksSection}>
            <div style={{ ...footerStyles.linkColumn, width: '200px' }}>
              <h3 style={footerStyles.columnTitle}>
                Работодателям
              </h3>
              <div style={footerStyles.linkList}>
                <a href="#" style={footerStyles.link}>
                  Размещение вакансий
                </a>
                <a href="#" style={footerStyles.link}>
                  Страница компании
                </a>
              </div>
            </div>
            <div style={{ ...footerStyles.linkColumn, width: '147px' }}>
              <h3 style={footerStyles.columnTitle}>
                Соискателям
              </h3>
              <div style={footerStyles.linkList}>
                <a href="#" style={footerStyles.link}>
                  Вакансии
                </a>
                <a href="#" style={footerStyles.link}>
                  Создать резюме
                </a>
              </div>
            </div>
            <div style={{ ...footerStyles.linkColumn, width: '76px' }}>
              <h3 style={footerStyles.columnTitle}>
                О нас
              </h3>
              <a href="#" style={{ ...footerStyles.link, marginTop: '28px' }}>
                Новости
              </a>
            </div>
          </div>
        </div>
        <a href="/" style={footerStyles.backLink}>
          Вернуться в Контур системы
        </a>
      </div>
      <div style={footerStyles.divider} />
      <div style={footerStyles.bottomSection}>
        <p style={footerStyles.copyright}>
          2023, Все права защищены
        </p>
        <div style={footerStyles.legalLinks}>
          <a href="#" style={footerStyles.legalLink}>
            Пользовательское соглашение
          </a>
          <a href="#" style={footerStyles.legalLink}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};
