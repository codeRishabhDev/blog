import React from 'react';
import { HeaderWrapper, WebsiteTitle, MenueWrapper, NavigateLink } from './HeaderStyle';
import { useTranslation } from 'react-i18next';
import useI18n from '../../hooks/useI18n';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useI18n();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <HeaderWrapper>
      <WebsiteTitle to="/">
        Blog
      </WebsiteTitle>
      <MenueWrapper>
        <select onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">Français</option>
          {/* Add more language options as needed */}
        </select>
        <NavigateLink to="/signin">{t('signIn')}</NavigateLink>
        <NavigateLink to="/signup">{t('signUp')}</NavigateLink>
      </MenueWrapper>
    </HeaderWrapper>
  );
};

export default Header;
