import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import { en } from './i18n/en';
import { zh } from './i18n/zh';
import type { Translations, ExperienceItem, ProjectItem, BlogItem } from './i18n/types';

export type Lang = 'en' | 'zh';

const translations: Record<Lang, Translations> = { en, zh };

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  tExperience: () => ExperienceItem[];
  tProjects: () => ProjectItem[];
  tBlog: () => BlogItem[];
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  toggleLang: () => {},
  t: (key: string) => key,
  tArray: (key: string) => [key],
  tExperience: () => [],
  tProjects: () => [],
  tBlog: () => [],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored === 'en' || stored === 'zh') return stored;
    return navigator.language.startsWith('zh') ? 'zh' : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === 'en' ? 'zh' : 'en'));

  const t = useCallback(
    (key: string): string => {
      const val = translations[lang][key];
      return typeof val === 'string' ? val : key;
    },
    [lang],
  );

  const tArray = useCallback(
    (key: string): string[] => {
      const val = translations[lang][key];
      return Array.isArray(val) ? (val as string[]) : [key];
    },
    [lang],
  );

  const tExperience = useCallback(
    () => translations[lang]['experience.items'] as ExperienceItem[],
    [lang],
  );

  const tProjects = useCallback(
    () => translations[lang]['projects.items'] as ProjectItem[],
    [lang],
  );

  const tBlog = useCallback(
    () => translations[lang]['blog.items'] as BlogItem[],
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, tArray, tExperience, tProjects, tBlog }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
