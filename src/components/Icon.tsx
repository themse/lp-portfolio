import React, { FC, ObjectHTMLAttributes, memo } from 'react';

type IconProps = ObjectHTMLAttributes<HTMLObjectElement> & {
  title: string;
  src: string;
};

export const Icon: FC<IconProps> = memo(({ title, src, ...props }) => (
  <object
    className="pointer-events-none"
    {...props}
    type="image/svg+xml"
    data={src}
    aria-label={title}
  />
));
