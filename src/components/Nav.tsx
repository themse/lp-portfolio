import { FC, useState, useEffect } from 'react';

import { useHistory } from 'tools/history';

const navigation = [
  {
    title: 'Home',
    url: '#home',
  },
  {
    title: 'About me',
    url: '#about-me',
  },
  {
    title: 'Skills',
    url: '#skills',
  },
  {
    title: 'Portfolio',
    url: '#portfolio',
  },
  {
    title: 'Contacts',
    url: '#contracts',
  },
];

export const Nav: FC = () => {
  const [currentHash, setCurrentHash] = useState<string>(navigation[0].url);
  const history = useHistory();

  useEffect(() => {
    const clearListen = history.listen(({ location }) => {
      setCurrentHash(location.hash);
    });

    return () => {
      clearListen();
    };
  }, []);

  return (
    <nav className="pt-4 pb-6 mb-9 border-b border-tpl-grey-300">
      <ul className="flex flex-wrap justify-evenly md:justify-between">
        {navigation.map(({ title, url }) => (
          <li key={url} className="mb-1">
            <a href={url}>
              <span
                className={`${
                  currentHash === url ? 'text-black' : 'text-tpl-grey-300'
                } text-lg font-secondary px-6 py-4`}
              >
                {title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
