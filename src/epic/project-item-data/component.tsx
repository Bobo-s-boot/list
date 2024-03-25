import React from 'react';

import { SkeletonFormElem } from '../../common/skeleton-form';
import { PROJECT_ITEM_DATA_INTER } from '../../data/project/constant';
import { TextElem } from '../../common/text';
import { CardElem } from '../../common/card';
import { FlexElem } from '../../common/flex';

export const Component: React.FC<{
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
  data?: PROJECT_ITEM_DATA_INTER;
}> = ({ isLoading, isSuccess, isError, errorMessage, data }) => {
  return (
    <>
      {isLoading && <SkeletonFormElem />}

      {isSuccess && data && (
        <CardElem>
          <FlexElem>
            <TextElem tid="PROJECT.ITEM.NAME" tvalue={{ value: data.name }} />
          </FlexElem>
        </CardElem>
      )}
    </>
  );
};
