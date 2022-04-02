import { FC } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { SocialList } from 'components/SocialList';

export const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer my-32" id="contacts">
      <Container>
        <div className="space-y-20">
          <div className="footer-top flex flex-col items-center space-y-5">
            <p className="text-4xl font-secondary">{t('contacts-title')}</p>
            <p className="text-lg leading-6 text-center">
              <Trans i18nKey="contacts-action" components={{ break: <br /> }} />
            </p>
            <Button>{t('contacts-action-btn')}</Button>
          </div>
          <div className="footer-bottom footer-top flex flex-col items-center space-y-11">
            <SocialList />
            <small className="text-center text-tpl-grey-300 opacity-75 text-sm leading-4">
              <Trans
                i18nKey="contacts-action-to-like"
                components={{ break: <br /> }}
              />
            </small>
          </div>
        </div>
      </Container>
    </footer>
  );
};
