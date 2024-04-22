import { IonIcon } from '@ionic/react';
import React, { useState } from 'react';

import { FieldTextElem } from '../field-text';
import copyIcon from '../../asset/svg/common/copy.svg';
import styled from 'styled-components';
import { Spacing } from '../../theme';
import { THEME_ENUM } from '../../data/theme/constant';
import { useSelector } from '../../lib/store';
import { THEME_MODULE_NAME } from '../../data/theme';
import { clipboardCopy } from '../../lib/util/clipboard';
import { AlertActionElem } from '../alert-action';

export const Elem: React.FC<{ value: string; title?: string }> = ({
  value,
  title,
}) => {
  const { state } = useSelector((s: any) => ({
    state: s[THEME_MODULE_NAME],
  }));

  const [copy, setCopy] = useState(false);

  const handleCopy = (value: any) => {
    setCopy(true);
    clipboardCopy(value);
    setTimeout(() => setCopy(false), 3000);
  };

  return (
    <>
      <FieldTextElem
        disabled
        title={title}
        value={value}
        icon={
          <IconContainer onClick={() => handleCopy(value)}>
            <Icon
              icon={state.type === THEME_ENUM.LIGHT ? copyIcon : copyIcon}
            />
          </IconContainer>
        }
      />
      {copy && (
        <AlertActionElem
          tid="COMMON.ALERT.COPY"
          type="success"
          tvalue={{ value }}
        />
      )}
    </>
  );
};

const Icon = styled(IonIcon)`
  height: 24px;
  width: 24px;
`;
const IconContainer = styled.div`
  height: 53px;
  display: flex;
  padding: 0 ${Spacing(4)};
  align-items: center;
  cursor: pointer;
`;
