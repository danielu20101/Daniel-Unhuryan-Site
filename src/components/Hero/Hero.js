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
        I'm a junior majoring in Computer Science & Engineering at Lehigh University. I'm most passionate about Python Development and using the MERN stack to create web applications. I will be graduating with a minor in Data Science, and I'm excited to apply my skills to real-world problems.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;