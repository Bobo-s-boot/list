import React, { FormEvent, FormEventHandler, ReactNode } from 'react';

import styled from 'styled-components';
import { TextElem } from '../text';
import { GridElem } from '../grid';
import { FlexElem } from '../flex';
import { COLOR_ENUM } from '../../theme/color';
import { Spacing } from '../../theme';

export interface STEPPER_ITEM {
  topic: string;
  count?: string;
}

export const Elem: React.FC<{
  stepArray: STEPPER_ITEM[];
  activeStep?: number;
  className?: string;
  style?: object;
  numeretic?: boolean;
}> = ({ className, style, activeStep = 3, numeretic = true, stepArray }) => {
  console.log(stepArray);
  return (
    <Container className={className} style={style}>
      {stepArray.map((item: STEPPER_ITEM, index: number) => (
        <FlexElem spacing={3} style={{ alignItems: 'start', height: '100%' }}>
          <div style={{ paddingTop: '2px', height: '100%' }}>
            <Circle active={activeStep > index} />
            {index !== stepArray.length - 1 && (
              <Line active={activeStep - 1 > index} />
            )}
          </div>

          <TextElem
            type="medium"
            size="small"
            color={activeStep > index ? 'textSecondary' : 'textPrimary'}
          >
            {numeretic && !item?.count
              ? `${index + 1}.${item.topic}`
              : `${item.topic}`}
            {item.count && `${item.count} ${item.topic}`}
          </TextElem>
        </FlexElem>
      ))}
    </Container>
  );
};

const Line = styled.div<{ active: boolean }>`
  height: calc(100% + 8px);
  position: relative;
  left: 4px;
  width: 2px;
  background: ${({ active, theme }) =>
    theme[active ? COLOR_ENUM.BORDER_ACTIVE : COLOR_ENUM.BORDER]};
`;

const Circle = styled.div<{ active: boolean }>`
  border-radius: 100%;
  height: 10px;
  width: 10px;
  background: ${({ active, theme }) =>
    theme[active ? COLOR_ENUM.WHITE : COLOR_ENUM.TEXT_THIRD]};
`;

const Container = styled(GridElem)`
  width: 100%;
  padding: 0 ${Spacing(2)};
`;
