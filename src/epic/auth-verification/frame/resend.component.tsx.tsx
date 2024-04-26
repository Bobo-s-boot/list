import React, { useState } from 'react';
import styled from 'styled-components';

import { GridElem } from '../../../common/grid';
import { AuthRecoveryResendContainer } from '../../auth-recovery-resend';
import { TimerElem } from '../../../common/timer';
import { TIMER_CONFIG } from '../constant';

export const ResendComponent: React.FC<{ email?: string }> = ({
  email = '',
}) => {
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
