import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import { TextElem } from '../text';
import { COLOR_ENUM, COLOR_TYPE } from '../../theme/color';
import { Spacing } from '../../theme';

export const Elem: React.FC<{
  tid?: string;
  tvalue?: object;
  text?: string;
  children?: ReactNode;
  color?: COLOR_TYPE;
}> = ({
  tid,
  tvalue,

  color = 'backgroundSecondary',
}) => {
  return (
    <Container color={color}>
      <TextElem
        color="active"
        size="chip"
        type="semi-bold"
        tid={tid}
        tvalue={tvalue}
        style={{ height: '13px' }}
      />
    </Container>
  );
};

const Container = styled.div<{
  color: COLOR_TYPE;
}>`
  background: ${({ theme }) => theme[COLOR_ENUM.ACTIVE_BACKGROUND]};
  padding: ${Spacing(0.5)} ${Spacing(3)};
  margin: auto 0;

  display: flex;
  align-items: center;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CHIP]}px;
  height: 24px;
`;
