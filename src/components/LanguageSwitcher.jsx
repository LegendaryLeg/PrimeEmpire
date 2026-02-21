import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (event) => {
    const { value } = event.target;
    setLanguage(value);
  };

  return (
    <div className="relative">
      <label htmlFor="language-select" className="sr-only">
        Select language
      </label>
      <select
        id="language-select"
        value={language}
        onChange={handleChange}
        className="rounded-md border border-border-divider bg-white px-2 py-1 text-xs font-semibold text-text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-green"
      >
        <option value="ru">RU</option>
        <option value="en">EN</option>
        <option value="kz">KZ</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
