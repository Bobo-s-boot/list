import React from 'react';

import styled from 'styled-components';

import { DividerElem } from '../divider';
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { TextElem } from '../text';
import { Spacing } from '../../theme';
import arrowIcon from '../../asset/svg/common/downArrow.svg';
import { COLOR_ENUM } from '../../theme/color';

export const Elem: React.FC<{
  data: { label: string; content: string }[];
}> = ({ data }) => {
  return (
    <>
      <AccordionGroup>
        {data.map(({ label, content }) => (
          <>
            <Accordion value={label} toggleIcon={arrowIcon}>
              <Item slot="header" color="light">
                <Label>
                  <TextElem tid={label} type="medium" size="label" />
                </Label>
              </Item>
              <Content slot="content" color="light">
                <TextElem tid={content} />
              </Content>
            </Accordion>
            <DividerElem />
          </>
        ))}
      </AccordionGroup>
    </>
  );
};

const Accordion = styled(IonAccordion)`
  margin: ${Spacing(4)} 0 ${Spacing(4)} 0;
  border: none;
`;

const AccordionGroup = styled(IonAccordionGroup)``;

const Content = styled.div`
  background: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_SECONDARY]};
`;

const Label = styled(IonLabel)`
  --padding-start: 0;
  --inner-padding-end: 0;
  margin: 0;
`;

const Item = styled(IonItem)`
  --background-hover-opacity: 0;
  --ripple-color: transparent;

  .ion-accordion-toggle-icon {
    margin: 0;
    width: 8px;
  }

  --min-height: 0;
  ::part(native) {
    --background-hover: transparent;

    padding: 0;
    border-width: 0;
  }
`;
