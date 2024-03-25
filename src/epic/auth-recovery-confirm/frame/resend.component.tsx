import React, { useState } from 'react';
import { GridElem } from '../../../common/grid';
import { AuthRecoveryResendContainer } from '../../auth-recovery-resend';
import { TimerElem } from '../../../common/timer';
import { TIMER_CONFIG } from '../constant';
import { TextElem } from '../../../common/text';
import styled from 'styled-components';

export const ResendComponent: React.FC<{ email: string }> = ({ email }) => {
  const [active, setActive] = useState<boolean | null>(null);

  const handleSetActive = (status: boolean) => () => {
    setActive(status);
  };

  return (
    <GridElem size="mod">
      <AuthRecoveryResendContainer
        actionCb={handleSetActive(false)}
        email={email}
        active={active}
      />
      <Message>
        <TextElem
          color="textThird"
          type="light"
          tid="AUTH.RECOVERY_CONFIRM.RESEND_TEXT"
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
  }
`;
