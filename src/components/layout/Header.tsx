import { FC } from 'react';

import { Nav } from 'components/Nav';
import { Container } from 'components/Container';

export const Header: FC = () => {
  return (
    <header className="header sticky top-0 backdrop-blur-2xl">
      <Container>
        <Nav />
      </Container>
    </header>
  );
};
