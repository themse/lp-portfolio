import { FC } from 'react';

import { Icon } from './Icon';

type RatingProps = {
  starAmount: number;
};

const totalStarAmount = 5;

export const Rating: FC<RatingProps> = ({ starAmount }) => {
  return (
    <div className="flex gap-1">
      {new Array(totalStarAmount).fill(1).map((_, idx) => (
        <Icon
          key={idx}
          width={26}
          height={26}
          title="star-full"
          src={
            idx + 1 <= starAmount ? '/icons/star-full.svg' : '/icons/star.svg'
          }
        />
      ))}
    </div>
  );
};
