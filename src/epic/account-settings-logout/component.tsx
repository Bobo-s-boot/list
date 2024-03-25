import React from 'react';

import { GridElem } from '../../common/grid';
import { TextElem } from '../../common/text';
import icon from '../../asset/svg/menu-app/logout.svg';
import styled from 'styled-components';
import { COLOR_ENUM } from '../../theme/color';
import { Spacing } from '../../theme';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';

export const Component: React.FC<{
  onSubmitForm: any;
}> = ({ onSubmitForm }) => {
  return (
    <div onClick={onSubmitForm}>
      <Container spacing={3}>
        <img src={icon} />
        <TextElem tid="SETTINGS.LOGOUT.BUTTON" color="error" />
      </Container>
    </div>
  );
};

const Container = styled(GridElem)<{}>`
  padding: ${Spacing(3)} ${Spacing(4)};
  width: 100%;
  display: flex;
  gap: ${Spacing(3)};
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  align-items: center;
  position: relative;

  span {
    height: 15px;
  }

  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme[COLOR_ENUM.BUTTON_HOVER]};
  }
`;
