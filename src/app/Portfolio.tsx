import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from 'components/Container';

const workList = [
  {
    title: 'Online fashion store - Homepage',
    imgSrc: '/images/portfolio/work-1.jpg',
    url: '#',
  },
  {
    title: 'Reebok Store - Concept',
    imgSrc: '/images/portfolio/work-2.jpg',
    url: '#',
  },
  {
    title: 'Braun Landing Page - Concept',
    imgSrc: '/images/portfolio/work-3.jpg',
    url: '#',
  },
];

export const Portfolio: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="portfolio bg-tpl-grey-100 py-32" id="portfolio">
      <Container>
        <div className="text-center space-y-12">
          <h2 className="font-secondary text-3xl">{t('portfolio-title')}</h2>
          <div className="space-y-24">
            {workList.map(({ title, imgSrc, url }) => (
              <div key={title} className="space-y-11 my-4">
                <img className="mx-auto" src={imgSrc} alt={title} />
                <p className="text-lg underline underline-offset-2 tracking-wide">
                  <a href={url}>{title}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
