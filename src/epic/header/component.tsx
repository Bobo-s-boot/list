import React from 'react';
import { ButtonBackElem } from '../../common/button-back';
import { TextElem } from '../../common/text';
import styled, { css } from 'styled-components';
import { Spacing } from '../../theme';
import { ButtonElem } from '../../common/button';
import { RouterLinkElem } from '../../common/router-link';
import { THEME_ENUM } from '../../data/theme/constant';
import {
  SIZE_LAYOUT_DATA,
  SIZE_LAYOUT_ENUM,
  SIZE_LAYOUT_TYPE,
} from '../../theme/size';
import { COLOR_ENUM, COLOR_TYPE } from '../../theme/color';
import { DesktopHeaderContainer } from '../desktop-header';
import ReactDOM from 'react-dom';

export const Component: React.FC<{
  path?: string | boolean;
  title?: string;
  icon?: string;
  theme?: THEME_ENUM;
  iconLight?: string;
  iconDark?: string;
  button?: any;
  tvalue?: object | undefined;
  className?: string;
  light: boolean;
  background?: COLOR_TYPE;
  size: SIZE_LAYOUT_TYPE;
}> = ({
  path,
  title,
  icon,
  theme,
  iconLight,
  iconDark,
  button,
  tvalue,
  className,
  light = false,
  background = 'backgroundPrimary',
  size,
}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <DesktopHeaderContainer
          path={path}
          icon={icon}
          title={title}
          tvalue={tvalue}
          size={size}
        />,
        document.getElementById('layoutApp') || document.body,
      )}
      <Mobile>
        <Container background={background}>
          <HeaderContainer className={className} path={path}>
            <IconContainer>
              {path && <ButtonBackElem path={path} />}
            </IconContainer>

            <Content>
              {title && (
                <TextContainer>
                  <Text
                    type="medium"
                    size="main"
                    oneLine={true}
                    tid={title}
                    tvalue={tvalue}
                  />
                </TextContainer>
              )}

              {icon && (
                <RouterLinkElem href={icon} opaque>
                  <ButtonElem
                    iconLeft={theme === THEME_ENUM.LIGHT ? iconLight : iconDark}
                    iconSize="large"
                    fill="clear"
                  />
                </RouterLinkElem>
              )}
            </Content>
            <IconContainer>
              {button && <ButtonContainer>{button}</ButtonContainer>}
            </IconContainer>
          </HeaderContainer>
        </Container>
      </Mobile>
    </>
  );
};
const Mobile = styled.div`
  height: 68px;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const Container = styled.div<{ background: COLOR_TYPE }>`
  /* position: relative; */
  ${({ background }) => {
    return css`
      background: ${({ theme }) => theme[background]};
    `;
  }}
  width: 100%;
  position: fixed;
  z-index: 999;
`;

const Text = styled(TextElem)`
  white-space: normal !important;
  max-width: 260px !important;
  line-height: 1.3em;
`;

const IconContainer = styled.div`
  width: 24px;
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  justify-self: end;
`;

const HeaderContainer = styled.div<{ path: any }>`
  display: flex;
  gap: ${Spacing(6)};
  align-items: center;

  ${({ path }) => {
    if (path) {
      return css`
        left: -${Spacing(4)};
      `;
    }
  }}
  max-width:${SIZE_LAYOUT_DATA[SIZE_LAYOUT_ENUM.SMALL]}px;
  margin: auto;
  padding: ${Spacing(7)} ${Spacing(3)} ${Spacing(4)} ${Spacing(3)};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${Spacing(5)};
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
