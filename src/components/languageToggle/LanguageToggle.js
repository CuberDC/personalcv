import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.scss';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="language-toggle" onClick={toggleLanguage}>
      <div className="toggle-button">
        {i18n.language === 'en' ? (
          <>
            <span className="lang-option active">EN</span>
            <span className="separator">|</span>
            <span className="lang-option">中文</span>
          </>
        ) : (
          <>
            <span className="lang-option">EN</span>
            <span className="separator">|</span>
            <span className="lang-option active">中文</span>
          </>
        )}
      </div>
    </div>
  );
};

export default LanguageToggle; 