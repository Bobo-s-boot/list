import React from 'react';
import { PROPS_TYPE } from './constant';
import { ModalElem } from '../modal';
import styled from 'styled-components';
import { GridElem } from '../grid';

export const Elem: React.FC<PROPS_TYPE> = ({
  titleTid,
  titleValue,
  infoTid,
  infoValue,
  cancelTid,
  cancelTvalue,
  children,
  divider,
  open,
  onClose,
  onOpen,
  buttons,
  minHeight,
  calendar,
}) => {
  return (
    <>
      <Container onClick={onOpen}>{children}</Container>
      <ModalElem
        open={open}
        onClose={onClose}
        titleTid={titleTid}
        titleValue={titleValue}
        infoTid={infoTid}
        infoValue={infoValue}
        cancelTid={cancelTid}
        cancelTvalue={cancelTvalue}
        divider={divider}
        minHeight={minHeight}
        calendar={calendar}
      >
        <GridElem spacing={2}>{buttons}</GridElem>
      </ModalElem>
    </>
  );
};
const Container = styled.div`
  display: flex;
`;
