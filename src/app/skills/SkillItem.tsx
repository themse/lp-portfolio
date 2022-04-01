import { Icon } from 'components/Icon';
import { FC } from 'react';

type SkillItemProps = {
  title: string;
  slug: string;
  stars: number;
};

export const SkillItem: FC<SkillItemProps> = ({ title, slug, stars }) => {
  return (
    <article className="space-y-6 flex flex-col items-center p-4">
      <Icon width={88} height={88} title="title" src={`/icons/${slug}.svg`} />
      <p className="text-tpl-grey-300 text-sm">{title}</p>
      <span>{stars}</span>
    </article>
  );
};
