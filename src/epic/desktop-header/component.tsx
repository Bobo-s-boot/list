import React from 'react';

import styled, { css } from 'styled-components';
import { TextElem } from '../../common/text';

import { Spacing } from '../../theme';
import { SIZE_LAYOUT_DATA, SIZE_LAYOUT_TYPE } from '../../theme/size';
import { ButtonBackElem } from '../../common/button-back';

export const Component: React.FC<{
  path?: string | boolean;
  title?: string;
  tvalue?: object | undefined;
  icon?: string;
  size: SIZE_LAYOUT_TYPE;
}> = ({ path, title, tvalue, icon, size }) => {
  return (
    <Container size={size}>
      <div>{path && <ButtonBackElem path={path} />}</div>
      {icon && <Icon src={icon} />}

      <TextElem
        type="semi-bold"
        size="heading"
        // oneLine={true}
        tid={title}
        tvalue={tvalue}
      />
    </Container>
  );
};

const Container = styled.div<{
  size: SIZE_LAYOUT_TYPE;
}>`
  padding: ${Spacing(12)} ${Spacing(10)} ${Spacing(6)};
  display: flex;
  gap: ${Spacing(3)};
  align-items: center;
  width: 100%;
  @media screen and (max-width: 900px) {
    display: none;
  }
  margin: auto;
  ${({ size }) => css`
    max-width: calc(${SIZE_LAYOUT_DATA[size]}px + ${Spacing(10 * 2)});
  `};
  span {
    height: 23px;
  }
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
`;
