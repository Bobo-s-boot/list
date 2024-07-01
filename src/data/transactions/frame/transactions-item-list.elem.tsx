import React, { useState } from 'react';
import styled from 'styled-components';
import { Spacing } from '../../../theme';
import { TRANSACTIONS_ITEM_DATA_INTER } from '../constant';

import { CardElem } from '../../../common/card';

import { EllipsisContainerElem } from '../../../common/ellipsis-container';
import { TextElem } from '../../../common/text';
import { TransitionsItemContainer } from '../../../epic/transactions-item';
import { i18n } from '../../../lib/lang';
import { COLOR_ENUM } from '../../../theme/color';

const Elem: React.FC<TRANSACTIONS_ITEM_DATA_INTER> = ({
  id,
  createDate,
  paymentType,
  valuteBuyFormated,
  valuteSellFormated,
  sum,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalClose = (e: any) => {
    if (e) {
      e.stopPropagation();
    }
    setModalVisible(false);
  };
  const modalOpen = () => {
    setModalVisible(true);
  };

  return (
    <Card handleClick={modalOpen}>
      {modalVisible && (
        <TransitionsItemContainer
          transitionId={id}
          visible={modalVisible}
          onClose={modalClose}
        />
      )}
      <EllipsisContainerElem style={{ paddingRight: `${Spacing(5)}` }}>
        <TextElem type="semi-bold" size="main" oneLine>
          {id}
        </TextElem>
      </EllipsisContainerElem>
      <TextElem color="textSecondary" style={{ maxWidth: '200px' }} oneLine>
        {createDate}
      </TextElem>
      <img src={paymentType} width={`auto`} height={Spacing(6)} />
      <TextElem color="textSecondary" style={{ maxWidth: '200px' }} oneLine>
        {valuteBuyFormated}
      </TextElem>
      <TextElem color="textSecondary" style={{ maxWidth: '200px' }} oneLine>
        {valuteSellFormated}
      </TextElem>
      <TextElem color="textSecondary" style={{ maxWidth: '200px' }} oneLine>
        {sum}
      </TextElem>
    </Card>
  );
};

const Card = styled(CardElem) <{}>`
  display: grid;
  grid-column: span 6;
  grid-template-columns: subgrid;
  gap: 0;
  justify-content: space-between;
  position: relative;
  align-items: center;
  gap: ${Spacing(12)};
  text-align: center;
  background-color: ${({ theme }) => theme[COLOR_ENUM.INPUT]};
`;

export { Elem as TransactionsItemElem };
