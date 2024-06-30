import React, { useState } from 'react';
import styled from 'styled-components';
import { Spacing } from '../../../theme';
import { TRANSACTIONS_ITEM_DATA_INTER } from '../constant';

import { CardElem } from '../../../common/card';

import { EllipsisContainerElem } from '../../../common/ellipsis-container';
import { TextElem } from '../../../common/text';
import { TRANSACTIONSItemContainer } from '../../../epic/transactions-item';

const Elem: React.FC<TRANSACTIONS_ITEM_DATA_INTER> = ({
  id,
  phone,
  status,
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
        <TRANSACTIONSItemContainer
          TRANSACTIONSId={id}
          visible={modalVisible}
          onClose={modalClose}
        />
      )}
      <EllipsisContainerElem style={{ paddingRight: `${Spacing(5)}` }}>
        <TextElem type="semi-bold" size="main" oneLine>
          {name}
        </TextElem>
      </EllipsisContainerElem>
      <TextElem color="textSecondary" style={{ maxWidth: '200px' }} oneLine>
        {phone}
      </TextElem>

      {/* <TextElem */}
      {/* //   tid="TRANSACTIONS.LIST.WATCH_TIME"
        //   tvalue={{ value: watchTime }}
        //   color="textSecondary"
        //   oneLine
        //   style={{ justifySelf: 'center' }}
        // /> */}
      {/* <TextElem
        tid={`TRANSACTIONS.BAN.${ban}`}
        color="textSecondary"
        oneLine
        style={{ justifySelf: 'center' }}
      /> */}
      //   {/* <TextElem
      //   tid={needRecord ? `TRANSACTIONS.LIST.REQUEST_YES` : `TRANSACTIONS.LIST.REQUEST_NO`}
      //   color="textSecondary"
      //   oneLine
      //   style={{ justifySelf: 'center' }}
      // /> */}
      <TextElem
        tid={`TRANSACTIONS.LIST.${status}`}
        color="textSecondary"
        oneLine
        style={{ justifySelf: 'center' }}
      />
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

export { Elem as TRANSACTIONSItemElem };
