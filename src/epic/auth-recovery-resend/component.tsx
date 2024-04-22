import React from 'react';
import { TextElem } from '../../common/text';
import styled from 'styled-components';

export const Component: React.FC<{
  onButtonAction: () => void;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  active?: boolean;
  errorContainer?: boolean;
}> = ({
  onButtonAction = () => {},
  isLoading,
  isError,
  errorMessage,
  active,
  errorContainer = true,
}) => {
  return (
    <Container>
      <div>
        <TextElem
          size="small"
          color="textDefault"
          tid="AUTH.RECOVERY_CONFIRM.RESEND_TEXT"
        />{' '}
        {'  '}
        <Button disabled={!active || isLoading} onClick={onButtonAction}>
          <TextElem
            color={active ? 'buttonActive' : 'buttonDisabled'}
            size="small"
            type="bold"
            tid="AUTH.RECOVERY_CONFIRM.RESEND_CODE_BUTTON"
          />
        </Button>
      </div>
      {errorContainer && (
        <>
          {(isError || errorMessage) && (
            <ErrorContainer className="errorContainer">
              <TextElem size="small" color="error">
                {errorMessage}
              </TextElem>
            </ErrorContainer>
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const ErrorContainer = styled.div`
  height: 13.19px;
`;

const Button = styled.button`
  background-color: unset;
`;
