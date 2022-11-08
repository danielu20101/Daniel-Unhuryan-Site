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
        I'm a rising junior, majoring in CSE at Lehigh University. I'm most passionate about Python Development and using the MERN stack for front end developement. I'm currently looking for a summer internship for 2023 in Software Engineering.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;