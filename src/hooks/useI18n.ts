import i18n from '../i18n/i18n'; // Import your i18n instance from the correct path

function useI18n() {
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return { changeLanguage };
}

export default useI18n;
