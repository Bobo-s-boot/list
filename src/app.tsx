import React, { useEffect } from 'react';

import { IndexPage } from './page/index';
import { useDispatch, useSelector } from './lib/store';
import { APP_MODULE_NAME, appPreloadAllLocalStateData } from './data/app';
import { isRequestSuccess } from './lib/store/service';
import styled, { css } from 'styled-components';
import { COLOR_ENUM } from './theme/color';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const { state } = useSelector((s: any) => ({
    state: s[APP_MODULE_NAME],
  }));

  React.useEffect(() => {
    dispatch(appPreloadAllLocalStateData());
  }, []);

  const isSuccess = () => {
    return isRequestSuccess(state.request);
  };

  const success = isSuccess();

  return (
    <React.Fragment>
      {success && <IndexPage />}
      <Loader success={success} />
    </React.Fragment>
  );
};

const Loader = styled.div<{ success: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_PRIMARY]};
  transition: 0.3s;
  pointer-events: none;

  ${({ success }) =>
    success &&
    css`
      opacity: 0;
    `}
`;

export default App;
