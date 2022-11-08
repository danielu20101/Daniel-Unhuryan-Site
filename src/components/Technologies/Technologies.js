import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import Azure from "./Personal_Website_Logos/azure.png";
import frontEnd from "./Personal_Website_Logos/jscsshtml.png";
import figma from "./Personal_Website_Logos/figma.png";
import python from "./Personal_Website_Logos/python.png";
import mySql from "./Personal_Website_Logos/mySql.png";
import java from "./Personal_Website_Logos/java.png";
import C from "./Personal_Website_Logos/C.png";
import R from "./Personal_Website_Logos/R.png";
import minitab from "./Personal_Website_Logos/minitab.png";

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <img src ='../images/Personal_Website_Logos/jscsshtml.png' width="200" height="100"/>
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML5, CSS3, Javascript <br />
            react.js, and next.js <br />
            1 year
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <picture>
          <img src ='../images/Personal_Website_Logos/mySql.png' width="200" height="100"/>
      </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node, Django, and Databases <br />
            like Oracle and MySQL <br />
            1 year
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <picture>
      <img src="../images/Personal_Website_Logos/azure.png" width="100" height="100" alt="NextJS on Netlify Banner" />

          {/* <img src ={Azure} width="100" height="100"/> */}
      </picture>
        <ListContainer>
          <ListTitle>Azure</ListTitle>
          <ListParagraph>
            Microsoft Azure Fundamentals <br />
            1 year
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <img src ='../images/Personal_Website_Logos/python.png' width="100" height="100"/>
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Python Programming <br />
            1.5 years
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <img src ='../images/Personal_Website_Logos/java.png' width="75" height="100"/>
        </picture>
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
            Java Programming <br />
            1.5 years
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <img src ='../images/Personal_Website_Logos/C.png' width="100" height="100"/>
        </picture>
        <ListContainer>
          <ListTitle>C</ListTitle>
          <ListParagraph>
            C Programming <br />
            1 year
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <img src ='../images/Personal_Website_Logos/R.png' width="100" height="100"/>
        </picture>
        <ListContainer>
          <ListTitle>R</ListTitle>
          <ListParagraph>
            R programming <br />
            for Data Science <br />
            0.5 years
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <img src ='../images/Personal_Website_Logos/minitab.png' width="100" height="100"/>
        </picture>
        <ListContainer>
          <ListTitle>Minitab</ListTitle>
          <ListParagraph>
            Minitab Statistical Software <br />
            for Data Science <br />
            0.5 years
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <img src ='../images/Personal_Website_Logos/figma.png' width="100" height="100"/>
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma <br />
            Design Software <br />
            0.5 years
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
