import { FC } from 'react';

import { Container } from 'components/Container';

export const About: FC = () => {
  return (
    <section className="about bg-tpl-grey-100 py-32" id="about-me">
      <Container>
        <div className="text-center space-y-8">
          <h2 className="font-secondary text-3xl">About me</h2>
          <p className="text-lg">
            Hi, I'm John - UX/UI designer from Seattle. <br />
            I'm interested in design and everything connected with it.
          </p>
          <p className="text-lg">
            I'm studying at courses "Web and mobile design <br />
            interfaces" in IT-Academy.
          </p>
          <p className="text-lg">
            Ready to implement excellent projects <br /> with wonderful people.
          </p>
        </div>
      </Container>
    </section>
  );
};
