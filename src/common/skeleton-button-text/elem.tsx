import React from 'react';
import { IonSkeletonText } from '@ionic/react';

import styled from 'styled-components';
import { VALUE_OPACITY_ENUM } from '../../theme/value';

export const Elem: React.FC = ({ }) => {
  return <SkeletonItem animated={true} />;
};

const SkeletonItem = styled(IonSkeletonText)`
  height: 20px;
  width: 75px;
  opacity: ${({ theme }) => theme.value[VALUE_OPACITY_ENUM.SKELETON]}; 
`;
