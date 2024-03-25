import React, { useState } from 'react';
import { IonSelect, IonSelectOption } from '@ionic/react';
import { OPTION_ITEM_DATA } from './constant';

export const Elem: React.FC<{
  onChange: any;
  options: OPTION_ITEM_DATA[];
  defaultValue: any;
}> = ({ onChange, options, defaultValue }) => {
  return (
    <IonSelect onIonChange={onChange} value={defaultValue}>
      {options.map((item: OPTION_ITEM_DATA) => (
        <IonSelectOption key={item.value} value={item.value}>
          {item.label}
        </IonSelectOption>
      ))}
    </IonSelect>
  );
};
