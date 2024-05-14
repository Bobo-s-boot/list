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
  textColor?: COLOR_TYPE;
  active?: boolean;
}> = ({
  tid,
  tvalue,
  color = 'backgroundSecondary',
  textColor = 'textActive',
  active,
}) => {
  return (
    <Container color={active ? 'chip' : color || 'chipInactive'}>
      <TextElem
        color={active ? 'textSecondary' : textColor || 'textActive'}
        size="chip"
        type="regular"
        tid={tid}
        tvalue={tvalue}
      />
    </Container>
  );
};

const Container = styled.div<{
  color: COLOR_TYPE;
}>`
  background: ${({ theme, color }) => theme[color]};
  padding: ${Spacing(2)} ${Spacing(5)};
  margin: auto 0;

  display: flex;
  align-items: center;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CHIP]}px;
`;
