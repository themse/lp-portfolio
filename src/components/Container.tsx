import { FC } from 'react';

export const Container: FC = ({ children }) => {
  return (
    <div className="xl:container px-4 xl:px-8">
      <div className="xl:-mx-4">{children}</div>
    </div>
  );
};
