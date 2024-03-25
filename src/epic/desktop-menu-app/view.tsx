import styled, { css } from 'styled-components';
import { GridElem } from '../../common/grid';
import { RouterLinkElem } from '../../common/router-link';
import { TextElem } from '../../common/text';
import { Spacing } from '../../theme';
import { COLOR_ENUM } from '../../theme/color';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_FONT_WEIGHT_DATA,
  SIZE_FONT_WEIGHT_ENUM,
} from '../../theme/size';

export const View: React.FC<{
  title: string;
  icon: any;
  iconActive: any;
  href: string;
  isActive: boolean;
}> = ({ title, icon, href, isActive, iconActive }) => {
  return (
    <RouterLinkElem href={href}>
      <Container spacing={3} isActive={isActive}>
        <Icon
          className="icon"
          isActive={isActive}
          icon={isActive ? iconActive : icon}
        />
        <TextElem tid={title} type="medium" />
      </Container>
    </RouterLinkElem>
  );
};

const Container = styled(GridElem)<{ isActive: boolean }>`
  padding: ${Spacing(4)};
  width: 100%;
  display: flex;
  gap: ${Spacing(3)};
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  align-items: center;
  position: relative;

  & > * > * {
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_FOURTH]};
  }

  span {
    height: 15px;
  }

  :hover {
    & > * > * {
      color: ${({ theme }) => theme[COLOR_ENUM.DEFAULT]};
    }

    .icon {
      background-color: ${({ theme }) => theme[COLOR_ENUM.DEFAULT]};
    }
  }

  ${({ isActive }) => {
    if (isActive) {
      return css`
        background: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_PRIMARY]};
        & > * > * {
          font-weight: ${SIZE_FONT_WEIGHT_DATA[
            SIZE_FONT_WEIGHT_ENUM.SEMI_BOLD
          ]};
          color: ${({ theme }) => theme[COLOR_ENUM.DEFAULT]};
        }
      `;
    }
  }};
`;

const Icon = styled.div<{ icon: string; isActive?: boolean }>`
  height: 18px;
  width: 18px;
  ${({ icon }) => css`
    -webkit-mask: url(${icon}) no-repeat center;
    mask: url(${icon}) no-repeat center;
    z-index: 1;
    background-color: ${({ theme }) => theme[COLOR_ENUM.TEXT_THIRD]};
  `}

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${({ theme }) => theme[COLOR_ENUM.DEFAULT]};
        `
      : ''};
`;
