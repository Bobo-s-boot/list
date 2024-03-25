import React, { useState } from 'react';
import styled from 'styled-components';
import { Spacing } from '../../theme';
import { clipboardCopy } from '../../lib/util/clipboard';
import { CardElem } from '../card';
import { TextElem } from '../text';
import { ReactComponent as CopyIcon } from '../../asset/svg/alert/copy.svg';
import { FlexElem } from '../flex';
import ReactDOM from 'react-dom';

export const Elem: React.FC<{ value: string; className?: string }> = ({
  children,
  value,
  className,
}) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    setCopy(true);
    clipboardCopy(value);
    setTimeout(() => setCopy(false), 3000);
  };

  return (
    <Container onClick={handleCopy} className={className}>
      {children}
      {copy &&
        ReactDOM.createPortal(
          <AlertContainer>
            <FlexElem>
              <CopyIcon />
              <TextElem tid="COMMON.ALERT.COPY" type="medium" color="white" />
            </FlexElem>
          </AlertContainer>,
          document.body,
        )}
    </Container>
  );
};

const Container = styled.div``;

const AlertContainer = styled(CardElem)`
  padding: ${Spacing(4)};
  position: absolute;
  bottom: 32px;
  right: 40px;
`;
