import React, { useState } from 'react';
import styled from 'styled-components';
import { GridElem } from '../../../common/grid';
import { COLOR_DATA, COLOR_ENUM } from '../../../theme/color';
import { TimerElem } from '../../../common/timer';
import { TIMER_CONFIG } from '../constant';
import { AuthVerificationResendContainer } from '../../auth-verification-resend';
import { TextElem } from '../../../common/text';

export const ResendComponent: React.FC = ({}) => {
  const [active, setActive] = useState<boolean | null>(false);
  const handleSetActive = (status: boolean) => () => {
    setActive(status);
  };
  return (
    <GridElem size="mod">
      <AuthVerificationResendContainer
        actionCb={handleSetActive(false)}
        active={active}
      />
      <Message>
        <TextElem
          tid="AUTH.VERIFICATION.RESEND_TEXT"
          color="textThird"
          type="light"
        />
        <TimerElem
          setVisible={handleSetActive(true)}
          visible={active}
          minutes={TIMER_CONFIG.minutes}
          seconds={TIMER_CONFIG.seconds}
        />
      </Message>
    </GridElem>
  );
};

const Message = styled.div`
  text-align: center;
  & > * {
    display: inline;
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]};
  }
`;
