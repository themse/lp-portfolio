import { FC } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { Container } from 'components/Container';

export const About: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about bg-tpl-grey-100 py-32" id="about-me">
      <Container>
        <div className="text-center space-y-8 text-lg">
          <h2 className="font-secondary text-3xl">{t('about-title')}</h2>
          <p>
            <Trans i18nKey="about-bio" components={{ break: <br /> }} />
          </p>
          <p>
            <Trans i18nKey="about-edu" components={{ break: <br /> }} />
          </p>
          <p>
            <Trans i18nKey="about-ability" components={{ break: <br /> }} />
          </p>
        </div>
      </Container>
    </section>
  );
};
