import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm Daniel! <br />
          Welcome to My Portfolio 
        </SectionTitle>
        <SectionText>
        I'm a rising junior, majoring in Computer Science Engineering at Lehigh University. I'm most passionate about Python Development, EDM, and learning new technologies on a daily basis.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;