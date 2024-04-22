import React from 'react';

import styled from 'styled-components';
import { COLOR_ENUM } from '../../theme/color';
import { VALUE_OPACITY_DATA, VALUE_OPACITY_ENUM } from '../../theme/value';

import { TextElem } from '../text';
import { PROPS_TYPE } from './constant';
import { Link } from 'react-router-dom';

export const Elem: React.FC<PROPS_TYPE> = ({
  prefix,
  prefixTid,
  prefixTvalue,
  sufix,
  sufixTid,
  sufixTvalue,
  link,
  type = 'medium',
  justifySelf = 'center',
  ...props
}) => {
  return (
    <Wrapper justifySelf={justifySelf}>
      {prefix && prefix}
      {prefixTid && (
        <TextElem {...props} tid={prefixTid} tvalue={prefixTvalue} />
      )}
      <LinkText to={link} className="ion-activatable">
        <TextElem {...props} type={type} />
      </LinkText>
      {sufix && sufix}
      {sufixTid && <TextElem {...props} tid={sufixTid} tvalue={sufixTvalue} />}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ justifySelf: 'center' | 'end' | 'start' }>`
  display: flex;
  gap: 0.3em;
  align-items: center;
  justify-self: ${({ justifySelf }) => justifySelf};
`;

const LinkText = styled(Link)`
  color: ${({ theme }) => theme[COLOR_ENUM.TEXT_LINK]};
  transition: all 0.2s;
  text-decoration: none !important;
  line-height: 0.8em;

  &:hover {
    opacity: ${VALUE_OPACITY_DATA[VALUE_OPACITY_ENUM.HOVER]};
  }
  @media (max-width: 1100px) {
    &:hover {
      opacity: 1;
    }
  }
`;
