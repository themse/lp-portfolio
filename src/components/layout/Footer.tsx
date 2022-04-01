import { FC } from 'react';

import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { SocialList } from 'components/SocialList';

export const Footer: FC = () => {
  return (
    <footer className="footer my-32">
      <Container>
        <div className="space-y-20">
          <div className="footer-top flex flex-col items-center space-y-5">
            <p className="text-tpl-black-900 text-4xl font-secondary">
              Contacts
            </p>
            <p className="text-tpl-black-900 text-lg leading-6 text-center">
              Want to know more or just chat? <br /> You are welcome!
            </p>
            <Button>Send message</Button>
          </div>
          <div className="footer-bottom footer-top flex flex-col items-center space-y-11">
            <SocialList />
            <small className="text-center text-tpl-grey-300 opacity-75 text-sm leading-4">
              Like me on <br />
              LinkedIn, Instagram, Behance, Dribble
            </small>
          </div>
        </div>
      </Container>
    </footer>
  );
};
