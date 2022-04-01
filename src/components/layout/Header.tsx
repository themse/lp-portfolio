import { FC } from 'react';

import { Nav } from 'components/Nav';
import { Container } from 'components/Container';

export const Header: FC = () => {
  return (
    <header className="header">
      <Container>
        <Nav />
      </Container>
    </header>
  );
};
