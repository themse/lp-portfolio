import { FC } from 'react';

import { useLangSwitcher } from 'hooks/useLangSwitcher';

const languages = [
  {
    title: 'En',
    url: '/en',
  },
  {
    title: 'De',
    url: '/de',
  },
];

const correctLangUrls = languages.map((item) => item.url);
const defaultLang = languages[0].url;

export const LanguageSwitcher: FC = () => {
  const { currentLangUrl, switchLang } = useLangSwitcher(defaultLang);
  const langUrl = correctLangUrls.includes(currentLangUrl)
    ? currentLangUrl
    : defaultLang;

  return (
    <ul className="flex">
      {languages.map(({ title, url }) => {
        const isCurrentLangUrl = url === langUrl;

        return (
          <li
            key={url}
            className="after:content-['|'] after:px-2 last:after:content-[''] last:after:px-0"
          >
            <button
              className={isCurrentLangUrl ? 'pointer-events-none' : ''}
              disabled={isCurrentLangUrl}
              type="button"
              onClick={(): void => switchLang(url)}
            >
              <span
                className={`${
                  isCurrentLangUrl ? 'text-black' : 'text-tpl-grey-300'
                } uppercase`}
              >
                {title}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
