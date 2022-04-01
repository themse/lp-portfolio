import { FC } from 'react';

import { Icon } from './Icon';

export const Loader: FC = () => {
  return (
    <div className="absolute top-2 left-2 flex items-center space-x-2">
      <div
        className="spinner-border animate-spin inline-block w-14 h-14 border-4 rounded-full"
        role="status"
      >
        <Icon title="Spinner" src="/icons/spinner.svg" />
      </div>
      <p className="font-text-300">Loading...</p>
    </div>
  );
};
