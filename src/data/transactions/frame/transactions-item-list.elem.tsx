import React, { useState } from 'react';
import styled from 'styled-components';
import { Spacing } from '../../../theme';
import { TRANSACTIONS_ITEM_DATA_INTER } from '../constant';

import { CardElem } from '../../../common/card';

import { EllipsisContainerElem } from '../../../common/ellipsis-container';
import { TextElem } from '../../../common/text';
import { TransitionsItemContainer } from '../../../epic/transactions-item';
import { i18n } from '../../../lib/lang';

const Elem: React.FC<TRANSACTIONS_ITEM_DATA_INTER> = ({
  id,
  createDate,
  type,
  valuteBuy,
  valuteSell,
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
      <img
        src={`../assets/svg/payment-type-icons/type-${type}.svg`}
        width={`auto`}
        height={Spacing(6)}
      />
      <TextElem color="textSecondary" style={{ maxWidth: '200px' }} oneLine>
        {`${i18n.t(`TRANSACTIONS.LIST.CURRENCY_TYPE.${valuteBuy}`)}`}
      </TextElem>
      <TextElem color="textSecondary" style={{ maxWidth: '200px' }} oneLine>
        {`${i18n.t(`TRANSACTIONS.LIST.CURRENCY_TYPE.${valuteSell}`)}`}
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
`;

export { Elem as TransactionsItemElem };
