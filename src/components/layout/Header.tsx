import { FC } from 'react';

import { Nav } from 'components/Nav';
import { Container } from 'components/Container';

export const Header: FC = () => {
  return (
    <header className="header md:sticky top-0 md:backdrop-blur-2xl">
      <Container>
        <Nav />
      </Container>
    </header>
  );
};
