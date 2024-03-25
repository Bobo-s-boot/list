import React from 'react';
import styled from 'styled-components';
import { TextElem } from '../text';
import { Spacing } from '../../theme';
import { COLOR_ENUM } from '../../theme/color';
import { IonImg } from '@ionic/react';

export const Elem: React.FC<{
  label?: string;
  iconUrl?: string;
  onClick?: () => void;
}> = ({ onClick, iconUrl, label }) => {
  return (
    <Container>
      <ButtonWrapper onClick={onClick}>
        <ImgStyled src={iconUrl} />
      </ButtonWrapper>
      <TextElem color="default" tid={label} />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: 2px;
  justify-items: center;
`;

const ButtonWrapper = styled.div`
  padding: ${Spacing(2)};
  border-radius: 50%;
  background-color: #5b94e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 10px solid ${({ theme }) => theme[COLOR_ENUM.WHITE]};
  cursor: pointer;
  height: 72px;
  width: 72px;
`;

const ImgStyled = styled(IonImg)`
  width: 28px;
  height: 28px;
`;
