import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { LoaderElem } from '../loader';
import { SelectMoreElem } from '../select-more';
import { PROPS_TYPE } from './constant';

export const Elem: React.FC<PROPS_TYPE> = ({ ...props }) => {
  const queryClient = useQueryClient();

  const onSuccess = () => {
    props.moduleName.forEach((item: string) =>
      queryClient.invalidateQueries(item),
    );
  };
  const action = useMutation((action: any) => action(), {
    onSuccess,
  });

  const onChange = (name: any, e: any) => {
    if (props.payload) {
      action.mutate(() => e.action(props.payload));
    } else {
      action.mutate(e.action);
    }
  };

  return (
    <div>
      {action.isLoading && <LoaderElem />}

      <SelectMoreElem
        {...props}
        onChange={onChange}
        // noAlertContainer
        isLoading={action.isLoading}
      />
    </div>
  );
};
