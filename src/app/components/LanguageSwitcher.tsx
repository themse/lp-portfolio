import { FC } from 'react';

const languages = [
  {
    title: 'Eng',
    url: '/eng',
  },
  {
    title: 'Deu',
    url: '/deu',
  },
];

export const LanguageSwitcher: FC = () => {
  return (
    <ul className="flex">
      {languages.map(({ title, url }) => (
        <li
          key={url}
          className="after:content-['|'] after:px-2 last:after:content-[''] last:after:px-0"
        >
          <a href={url}>
            <span className="uppercase">{title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
