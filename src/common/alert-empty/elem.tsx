import React from 'react';
import styled from 'styled-components';
import { TextElem } from '../text';
import { Spacing } from '../../theme';
import { IonImg } from '@ionic/react';
import emptyIcon from '../../asset/svg/common/empty.svg';

export const Elem: React.FC<{
  tid?: string;
  tvalue?: object;
}> = ({ tid = 'COMMON.EMPTY_LIST', tvalue }) => {
  return (
    <AlertAction>
      <IonImg
        style={{
          height: '90px',
        }}
        src={emptyIcon}
      />
      <TextBlock>
        <TextElem color="textThird" tid={tid} tvalue={tvalue} />
      </TextBlock>
    </AlertAction>
  );
};

const TextBlock = styled.div`
  margin-top: ${Spacing(4)};
  text-align: center;
`;

const AlertAction = styled.div`
  padding: ${Spacing(7)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
