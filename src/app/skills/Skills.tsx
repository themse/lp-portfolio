import { FC } from 'react';

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
  return (
    <section className="skills py-32" id="skills">
      <Container>
        <div className="space-y-14">
          <h2 className="font-secondary text-3xl text-center">Skills</h2>
          <p className="text-lg text-center">I work in such programs as</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {skillList.map((item) => (
              <SkillItem key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
