import React, { useRef } from 'react';

import styled from 'styled-components';
import { AlertActionElem } from '../../common/alert-action';

import { GridElem } from '../../common/grid';

import { TextElem } from '../../common/text';

import ReactDOM from 'react-dom';
import { Spacing } from '../../theme';
import { COLOR_ENUM } from '../../theme/color';
import { Skeleton } from './skeleton';

import { useOnClickOutside } from 'usehooks-ts';
import { ReactComponent as CloseIcon } from '../../asset/svg/common/close.svg';
import { TRANSACTIONS_ITEM_DATA_INTER } from '../../data/transactions/constant';

export const Component: React.FC<{
  data?: TRANSACTIONS_ITEM_DATA_INTER;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
  visible: boolean;
  onClose: any;
}> = ({
  data,
  isLoading,
  visible,
  onClose,
  isSuccess,
  isError,
  errorMessage,
}) => {
    const ref = useRef(null);

    const handleClickOutside = () => {
      onClose();
    };

    useOnClickOutside(ref, handleClickOutside);
    return (
      <>
        {visible && (
          <>
            {ReactDOM.createPortal(
              <Wrapper>
                <CustomModal ref={ref}>
                  <GridElem spacing={5} style={{ overflow: 'hidden' }}>
                    <GridElem style={{ gridTemplateColumns: 'auto 16px' }}>
                      <TextElem
                        tid="TRANSACTIONS.LIST.ITEM.TITLE"
                        size="main"
                        type="semi-bold"
                      />
                      <CloseIconStyled onClick={onClose} />
                    </GridElem>

                    {isLoading && <Skeleton />}
                    {isError && <AlertActionElem text={errorMessage} />}
                    {isSuccess && data && (
                      <>
                        <Container>
                          <FirstContainer spacing={2}>
                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.LASTNAME_AND_FIRSTNAME"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.firstname && !!data.lastname ? (
                                <TextElem type="semi-bold">
                                  {data.lastname} {data.firstname}
                                </TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>
                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.ID"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.id ? (
                                <TextElem type="semi-bold">{data.id}</TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>
                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.PHONE"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.phone ? (
                                <TextElem type="semi-bold">{data.phone}</TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>
                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.EMAIL"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.email ? (
                                <TextElem type="semi-bold">{data.email}</TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>
                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.PASSPORT"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.passport ? (
                                <TextElem type="semi-bold">
                                  {data.passport}
                                </TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>
                          </FirstContainer>

                          <FirstContainer spacing={2}>
                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.USER_NAME"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.userName ? (
                                <TextElem type="semi-bold">
                                  {data.userName}
                                </TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>
                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.OFFICE_NAME"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.officeName ? (
                                <TextElem type="semi-bold">
                                  {data.officeName}
                                </TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>
                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.DATE"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.createDate ? (
                                <TextElem type="semi-bold">
                                  {data.createDate}
                                </TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>
                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.LOCATION"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.officeLocation ? (
                                <TextElem type="semi-bold">
                                  {data.officeLocation}
                                </TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>
                          </FirstContainer>

                          <LastContainer spacing={2}>
                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.PAYMENT_TYPE"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.paymentTypeString ? (
                                <TextElem type="semi-bold">
                                  {data.paymentTypeString}
                                </TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>
                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.VALUTE_BUY"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.valuteBuy ? (
                                <TextElem type="semi-bold">
                                  {data.valuteBuyFormated}
                                </TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>

                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.HEAD.SUM"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.sum ? (
                                <TextElem type="semi-bold">{data.sum}</TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>

                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.CURRENCY"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.currency ? (
                                <TextElem type="semi-bold">
                                  {data.currency}
                                </TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>

                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.COMMISION"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.commission ? (
                                <TextElem type="semi-bold">
                                  {data.commission}
                                </TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>

                            <GridElem spacing={2}>
                              <TextElem
                                tid="TRANSACTIONS.LIST.ITEM.VALUTE_SELL"
                                size="small"
                                color="textPrimary"
                              />
                              {!!data.valuteSell ? (
                                <TextElem type="semi-bold">
                                  {data.valuteSellFormated}
                                </TextElem>
                              ) : (
                                <TextElem
                                  type="semi-bold"
                                  tid={`TRANSACTIONS.LIST.ITEM.EMPTY`}
                                />
                              )}
                            </GridElem>
                          </LastContainer>
                        </Container>
                      </>
                    )}
                  </GridElem>
                </CustomModal>
              </Wrapper>,
              document.body,
            )}
          </>
        )}
      </>
    );
  };
const ContentContainer = styled.div`
  padding: ${Spacing(5)};
  border-radius: 12px;
  background: ${({ theme }) => theme[COLOR_ENUM.INPUT]};
  height: 100%;
`;

const FirstContainer = styled(GridElem)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  height: 100%;
  @media screen and (width<620px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

const LastContainer = styled(GridElem)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  height: 100%;
  @media screen and (width<620px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

const CloseIconStyled = styled(CloseIcon)`
  cursor: pointer;
  path {
    transition: all 0.2s;
  }
  :hover {
    path {
      stroke: ${({ theme }) => theme[COLOR_ENUM.TEXT_FOURTH]};
    }
  }
`;

const Container = styled(GridElem)`
  grid-template-columns: 1fr 1fr;
  max-height: calc(80vh - 100px);
  scrollbar-color: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_THIRD]}
    transparent;
  scrollbar-width: thin;
  overflow-y: auto;
  padding: ${Spacing(0)} ${Spacing(1)};
  &::-webkit-scrollbar {
    width: '8px';
  }
  &::-webkit-scrollbar-track {
    box-shadow: nset 0 0 6px grey;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: darkBlue;
    border-radius: 15px;
    height: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: lightBlue;
    max-height: 10px;
  }
  @media screen and (width<620px) {
    grid-template-columns: 1fr;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(20, 18, 26, 0.8);

  @media screen and (width<620px) {
    align-items: end;
    border-radius-bottom: 0;
  }
`;

const CustomModal = styled.div`
  display: block;
  max-height: 80vh;
  height: auto;
  padding: ${Spacing(6)} ${Spacing(4)};
  width: 620px;
  @media screen and (width<620px) {
    align-items: end;
    border-radius: 16px 16px 0 0;
  }
  overflow-y: auto;

  border-radius: 16px;
  background-color: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_SECONDARY]};
`;
