import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from 'components/Container';
import { SkillItem } from './SkillItem';

const skillList = [
  {
    title: 'Adobe Photoshop',
    slug: 'adobephotoshop',
    stars: 4,
  },
  {
    title: 'Adobe Illustrator',
    slug: 'adobeillustrator',
    stars: 3,
  },
  {
    title: 'Adobe After Effect',
    slug: 'adobeaftereffects',
    stars: 4,
  },
  {
    title: 'Figma',
    slug: 'figma',
    stars: 5,
  },
];

export const Skills: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="skills py-32" id="skills">
      <Container>
        <div className="space-y-14 text-center">
          <h2 className="font-secondary text-3xl">{t('skills-title')}</h2>
          <p className="text-lg">{t('skills-description')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            {skillList.map((item) => (
              <SkillItem key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
