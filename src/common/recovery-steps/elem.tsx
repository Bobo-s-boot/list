import React from 'react';

import styled from 'styled-components';
import { GridElem } from '../grid';
import { TextElem } from '../text';
import {Spacing} from "../../theme";

export const Elem: React.FC<{
  step: number;
  title: string;
  text: string;
}> = ({ step, title, text }) => {
  return (
    <Container>
      <Img src={`../../assets/img/recovery/step_${step}.svg`} />
      <GridElem spacing={1}>
        <TextElem tid={title} type="bold" size="heading" />
        <TextElem tid={text} size="default" />
      </GridElem>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: ${Spacing(4)};
`;
const Img = styled.img``;
