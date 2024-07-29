// В Page.tsx или другом главном файле

import React from 'react';
import { CrudProjectListItem } from '../../epic/crud-projec-list';

export const Page: React.FC = () => {
  return (
    <div>
      <CrudProjectListItem />
    </div>
  );
};
