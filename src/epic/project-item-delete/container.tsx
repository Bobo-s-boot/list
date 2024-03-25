import React from 'react';
import { action as deleteMember } from './action';
import { useMutation, useQueryClient } from 'react-query';
import { PROJECT_LIST_MODULE_NAME } from '../project-list';
import { LoaderElem } from '../../common/loader';
import { ModalConfirmElem } from '../../common/modal-confirm';

export const Container: React.FC<{
  projectId: string;
  open: boolean;
  onClose: () => void;
}> = ({ projectId, onClose, open }) => {
  const queryClient = useQueryClient();

  const action = useMutation(() => deleteMember(projectId), {
    onSuccess: () => {
      return queryClient.invalidateQueries(PROJECT_LIST_MODULE_NAME);
    },
  });

  const isLoading = () => {
    if (action.isLoading) {
      return true;
    }
  };

  const onClick = () => {
    action.mutate();
  };

  return (
    <div style={{ display: 'none' }}>
      {isLoading() && <LoaderElem />}

      <ModalConfirmElem
        action={onClick}
        open={open}
        onClose={onClose}
        type="delete"
      ></ModalConfirmElem>
    </div>
  );
};
