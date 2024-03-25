import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';
import { SIZE_ICON_DATA, SIZE_ICON_ENUM } from '../../theme/size';
import { Spacing } from '../../theme';

import { SelectElem, SELECT_PROPS_TYPE } from '../select';

export const Elem: React.FC<SELECT_PROPS_TYPE> = ({ ...props }) => {
  const Option = (props: any) => (
    <components.Option {...props}>
      <OptionContainer>
        <img
          src={props.data.img}
          style={{
            width: SIZE_ICON_DATA[SIZE_ICON_ENUM.LARGE],
            height: SIZE_ICON_DATA[SIZE_ICON_ENUM.LARGE],
          }}
          alt={props.data.label}
        />
        {props.data.label}
      </OptionContainer>
    </components.Option>
  );
  const SingleValue = (props: any) => (
    <components.SingleValue {...props}>
      <OptionContainer>
        <img
          src={props.data.img}
          style={{
            width: SIZE_ICON_DATA[SIZE_ICON_ENUM.LARGE],
            height: SIZE_ICON_DATA[SIZE_ICON_ENUM.LARGE],
          }}
          alt={props.data.label}
        />
        {props.data.label}
      </OptionContainer>
    </components.SingleValue>
  );
  return <SelectElem {...props} customComponents={{ Option, SingleValue }} />;
};

const OptionContainer = styled.div`
  display: flex;
  gap: ${Spacing(2)};
  align-items: center;
`;
