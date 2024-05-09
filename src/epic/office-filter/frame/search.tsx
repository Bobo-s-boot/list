import React, { useState } from 'react';
import styled from 'styled-components';

import { FieldTextElem } from '../../../common/field-text';
import { Spacing } from '../../../theme';
import CloseIcon from '../../../asset/svg/common/close.svg';
import SearchIcon from '../../../asset/svg/common/search.svg';

import { ButtonElem } from '../../../common/button';
import { COLOR_ENUM } from '../../../theme/color';

export const Search: React.FC<{ search: string; setSearch: Function }> = ({
  search,
  setSearch,
}) => {
  const handleClose = () => {
    setLocalSearch('');
    setSearch('');
  };
  const [localSearch, setLocalSearch] = useState(search);
  let changeTimeout: any;

  const handleChange = (e: any) => {
    clearTimeout(changeTimeout);
    // if (!e.target.value) return search;
    setLocalSearch(e.target.value);
    changeTimeout = setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
  };

  return (
    <Container>
      <FieldText
        value={localSearch}
        onChange={handleChange}
        errorContainer={false}
        placeholder="OFFICE.LIST.FILTER.SEARCH"
      />
      {localSearch && (
        <Button
          color="white"
          iconLeft={CloseIcon}
          fill="clear"
          onClick={handleClose}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Button = styled(ButtonElem)`
  position: absolute;
  width: max-content;
  background-color: unset !important;

  :hover {
    border: none;
  }

  top: 18.5px;
  right: 16px;
  padding: 0;
`;

const FieldText = styled(FieldTextElem)`
  input {
    padding-left: ${Spacing(9)};
  }
  #content {
    width: 30px;
    height: 46px;
    position: absolute;
    top: 2px;
    left: 0;
    background: url(${SearchIcon}) no-repeat;
    background-position: top 50% left 12px;
    background-size: 16px;
  }
  width: 100%;
`;
