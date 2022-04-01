import { FC } from 'react';

import { Icon } from './Icon';

const socialList = [
  {
    title: 'Linkedin',
    src: '/icons/linkedin.svg',
    href: 'https://www.linkedin.com/',
  },
  {
    title: 'Instagram',
    src: '/icons/instagram.svg',
    href: 'https://www.instagram.com/',
  },
  {
    title: 'Behance',
    src: '/icons/behance.svg',
    href: 'https://www.behance.net/',
  },
  {
    title: 'Dribbble',
    src: '/icons/dribbble.svg',
    href: 'https://dribbble.com/',
  },
];

export const SocialList: FC = () => {
  return (
    <div className="flex space-x-6 sm:space-x-14">
      {socialList.map(({ title, src, href }) => (
        <a key={href} href={href} target="_blank" rel="noreferrer">
          <span className="block w-10 h-10">
            {<Icon src={src} title={title} />}
          </span>
        </a>
      ))}
    </div>
  );
};
