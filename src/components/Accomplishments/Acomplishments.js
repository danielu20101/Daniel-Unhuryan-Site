import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import {PDFViewer} from '../Resume/pdf-viewer';

const data = [
  { number: 10, text: 'Open Source Projects'}
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Resume</SectionTitle>
    <Box>
      PDFViewer();
    </Box>
    <SectionDivider/>
  </Section>
);

export default Accomplishments;