import React, { useState } from 'react';
import styled from 'styled-components';
import { PROJECT_ITEM_DATA_INTER } from '../constant';
import { Spacing } from '../../../theme';

import { CardElem } from '../../../common/card';
import { TextElem } from '../../../common/text';
import { ProjectItemDeleteContainer } from '../../../epic/project-item-delete';
import { ProjectItemUpdateContainer } from '../../../epic/project-item-update';
import { ReactComponent as EditIcon } from '../../../asset/svg/common/edit.svg';
import { ReactComponent as MoreIcon } from '../../../asset/svg/common/more.svg';
import { ContentContainerElem } from '../../../common/content-container';
import { COLOR_ENUM } from '../../../theme/color';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../../theme/size';
import { DividerElem } from '../../../common/divider';
import { useRef } from 'react';

import { useOnClickOutside } from 'usehooks-ts';
import { hexToFilter } from '../../../theme/service';
import { ReactComponent as DeleteIcon } from '../../../asset/svg/delete/delete.svg';

const Elem: React.FC<PROJECT_ITEM_DATA_INTER> = ({ id, name }) => {
  const [updateVisible, setUpdateVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const ref = useRef(null);

  const handleClickOutside = () => {
    // Your custom logic here
    setModalVisible(false);
  };

  const deleteModalOpen = () => {
    setDeleteModalVisible(true);
    setModalVisible(false);
  };

  const deleteModalClose = () => {
    setDeleteModalVisible(false);
  };

  const handleUpdateVisible = () => {
    setModalVisible(false);
    setUpdateVisible(true);
  };

  const handleCloseModal = () => {
    setUpdateVisible(false);
    setModalVisible(false);
  };

  useOnClickOutside(ref, handleClickOutside);
  return (
    <>
      {updateVisible ? (
        <ContentContainerElem>
          <ProjectItemUpdateContainer
            id={id}
            name={name}
            close={handleCloseModal}
          />
        </ContentContainerElem>
      ) : (
        <CardElem backgoundColor={COLOR_ENUM.WHITE}>
          <Container>
            <TextElem
              tid="PROJECT.ITEM.NAME"
              tvalue={{ value: name }}
              type="semi-bold"
              size="main"
            />
            <RightContainer>
              <ModalContainer>
                <MoreIconStyled onClick={() => setModalVisible(true)} />

                {modalVisible && (
                  <ModalElem ref={ref}>
                    <ModalItem onClick={handleUpdateVisible}>
                      <EditIcon />
                      <TextElem
                        type="bold"
                        size="main"
                        color="textSecondary"
                        tid="PROJECT.UPDATE.MODAL.EDIT"
                      />
                    </ModalItem>
                    <DividerElem />
                    <ModalItem onClick={deleteModalOpen}>
                      <DeleteIcon />
                      <TextElem
                        tid="COMMON.MODAL.BUTTON.DELETE"
                        color="error"
                      />
                    </ModalItem>
                  </ModalElem>
                )}
              </ModalContainer>

              <ProjectItemDeleteContainer
                projectId={id}
                open={deleteModalVisible}
                onClose={deleteModalClose}
              />
            </RightContainer>
          </Container>
        </CardElem>
      )}
    </>
  );
};

const MoreIconStyled = styled(MoreIcon)`
  position: relative;
  top: 1px;
  width: auto;
  height: 22.4px;
`;

const ModalContainer = styled.div`
  position: relative;
  display: flex;

  &:hover {
    opacity: 1 !important;
  }
`;

const ModalItem = styled.div`
  display: flex;
  gap: ${Spacing(2)};
  padding: ${Spacing(4)};
  align-items: center;
  span {
    height: 16px;
  }
  :first-child {
    border-radius: 9px 9px 0 0;
  }

  :last-child {
    border-radius: 0 0 9px 9px;
    svg {
      filter: ${({ theme }) => hexToFilter(theme[COLOR_ENUM.ERROR])};
    }
  }

  :hover {
    background: ${({ theme }) => theme[COLOR_ENUM.BORDER]};
    :last-child {
      svg {
        filter: ${({ theme }) => hexToFilter(theme[COLOR_ENUM.ERROR])};
      }
    }
    svg {
      filter: ${({ theme }) => hexToFilter(theme[COLOR_ENUM.TEXT_FOURTH])};
    }
  }
  /* border-bottom: 1px; */
`;
const ModalElem = styled.div`
  z-index: 999;
  background-color: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_PRIMARY]};
  top: 30px;
  right: 0;
  width: 180px;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER]};

  position: absolute;

  border-bottom: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER]};

  width: 180px;
  --height: auto;
  --box-shadow: none !important;
  --backdrop-opacity: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${Spacing(4)};
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  gap: ${Spacing(4)};
  align-items: center;
  /* height: 19.2px; */
`;

export { Elem as ProjectItemElem };
