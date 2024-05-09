import React from 'react';
import styled, { css } from 'styled-components';

import { OFFICE_FILTER_MODULE_NAME } from '..';
import { SelectPreloadContainer } from '../../select-preload';
import { getProjectList } from '../../../data/project/action';
import { convertProjectListToSelect } from '../../../data/project/convert';
import { COLOR_ENUM } from '../../../theme/color';

let prevValue: string;

export const ProjectSelect: React.FC<{
  setProject: Function;
  project: any;
}> = ({ setProject, project }) => {
  const onChange = (name: string, values: any) => {
    setProject(values);
  };

  const multiValueContainer = ({ selectProps, data }: any) => {
    const label = data.label;
    const allSelected = selectProps.value;
    const index = allSelected.findIndex(
      (selected: any) => selected.label === label,
    );
    const isLastSelected = index === allSelected.length - 1;
    const labelSuffix = isLastSelected ? '' : ', ';
    const val = `${label}${labelSuffix}`;
    return val;
  };

  return (
    <Container>
      <SelectCustom
        name={OFFICE_FILTER_MODULE_NAME}
        action={getProjectList}
        convert={convertProjectListToSelect}
        onChange={onChange}
        noAlertContainer
        hideSelectedOptions={false}
        placeholder="OFFICE.LIST.FILTER.SELECT.PLACEHOLDER"
        value={project}
        isMulti
        closeMenuOnSelect={false}
        customComponents={{ MultiValueContainer: multiValueContainer }}
        maxWidth="170px"
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const SelectCustom = styled(SelectPreloadContainer)`
  .Select__value-container--is-multi {
    display: flex;
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]};

    width: 119px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .Select__value-container--has-value {
    display: block;
  }

  .Select__menu {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
  .Select__control {
    margin: auto;
    background: ${({ theme }) =>
      theme[COLOR_ENUM.DEFAULT] === '#1B1924'
        ? theme[COLOR_ENUM.BACKGROUND_SECONDARY]
        : theme[COLOR_ENUM.INPUT]};
  }
`;
