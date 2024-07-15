import React from 'react';
import styled from 'styled-components';

import { Spacing } from '../../theme';
import { TabType } from './frame/type-tab';
import { Search } from './frame/search';
import { ButtonElem } from '../../common/button';
// import { WEBINAR_CREATE_PAGE_PATH } from '../../page/webinar-item-create';
import { ProjectSelect } from './frame/project-select';
import { GridElem } from '../../common/grid';
import { COLOR_ENUM } from '../../theme/color';
import plusIconDark from '../../asset/svg/button/plus.svg';
import { OFFICE_CREATE_PAGE_PATH } from '../../page/office-create';
import { OFFICE_FILTER_TYPE } from './constant';

export const Component: React.FC<{
  project: string;
  setProject: Function;
  setType: Function;
  search: string;
  setSearch: Function;
  type: any;
}> = ({ project, setProject, setType, search, setSearch, type }) => {
  return (
    <Container>
      <TabType
        disabledTypes={[OFFICE_FILTER_TYPE.CRYPTO]}
        type={type}
        setType={(newType: OFFICE_FILTER_TYPE) => setType(newType)}
      />
      <Flex spacing={3}>
        {/* <ProjectSelect setProject={setProject} project={project} /> */}
        <Search search={search} setSearch={setSearch} />
        <ButtonFixedContainer>
          <Link href={OFFICE_CREATE_PAGE_PATH}>
            <ButtonElem
              iconSize="very_small"
              type="add"
              color="textSecondary"
              iconRight={plusIconDark}
              tid="OFFICE.LIST.FILTER.CREATE"
            />
          </Link>
        </ButtonFixedContainer>
      </Flex>
    </Container>
  );
};

const ButtonFixedContainer = styled.div`
  @media screen and (width<=600px) {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: ${Spacing(4)};
    background: ${({ theme }) => theme[COLOR_ENUM.TAB]};
    width: 100%;
  }
`;

const Flex = styled(GridElem)`
  @media screen and (width>400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (width>600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Link = styled.a`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: ${Spacing(3)};
  justify-content: space-between;
  align-items: center;

  @media screen and (width<1360px) {
    display: grid;
  }
`;
