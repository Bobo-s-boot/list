import { IonToggle } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import { COLOR_ENUM } from '../../theme/color';
import { Spacing } from '../../theme';
import { TextElem } from '../text';

export const Elem: React.FC<{
  checked?: boolean;
  tid?: string;
  handleClick?: any;
  className?: string;
  name?: string;
  gap?: number;
}> = ({ checked = false, tid, className, name, handleClick, gap = 0 }) => {
  const handleChange = (e: any) => {
    if (handleClick) {
      handleClick({ target: { name: name, value: !checked } });
    }
  };

  return (
    <Container gap={gap} onClick={handleChange}>
      <Toggle
        checked={checked}
        className={className}
        name={name}
        onChange={handleChange}
      />
      <div style={{ height: '20px' }}>
        {tid && <TextElem color="textDefault" tid={tid} type="medium" />}
      </div>
    </Container>
  );
};

const Container = styled.div<{ gap?: number }>`
  display: flex;
  align-items: end;
  gap: ${({ gap = 0 }) => Spacing(gap)};
`;

const Toggle = styled(IonToggle)`
  height: 25px;
  width: 41px;
  padding: 0;
  --background: ${({ theme }) => theme[COLOR_ENUM.TOGGLE_BACKGROUND]};
  --background-checked: ${({ theme }) =>
    theme[COLOR_ENUM.TOGGLE_BACKGROUND_ACTIVE]};
  --handle-background: ${({ theme }) => theme[COLOR_ENUM.TOGGLE_HANDLE]};
  --handle-background-checked: ${({ theme }) =>
    theme[COLOR_ENUM.TOGGLE_HANDLE_ACTIVE]};
  --handle-width: 18px;
  --handle-height: 18px;
  --handle-max-height: auto;
  --handle-spacing: 3.5px;
  --handle-box-shadow: none;
`;
