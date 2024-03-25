import React, { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  ThemeDetection,
  ThemeDetectionResponse,
} from '@ionic-native/theme-detection';
import { DARK_COLOR_DATA, LIGHT_COLOR_DATA } from '../../theme/color';
import { THEME_ENUM } from './constant';
import { THEME_MODULE_NAME } from '.';
import { useDispatch, useSelector } from '../../lib/store';
import { initSystemThemeType, initThemeData } from './action';
import {
  VALUE_OPACITY_DATA_DARK,
  VALUE_OPACITY_DATA_LIGHT,
} from '../../theme/value';
import { APP_MODULE_NAME } from '../app';
import { isRequestSuccess } from '../../lib/store/service';

export const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();

  const [isDark, setIsDark] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    ThemeDetection.isAvailable()
      .then((res: ThemeDetectionResponse) => {
        if (res.value) {
          ThemeDetection.isDarkModeEnabled()
            .then((res: ThemeDetectionResponse) => {
              setIsDark(res.value);
            })
            .catch((error: any) => console.error(error));
        }
      })
      .catch((error: any) => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        prefersDark.addListener((mediaQuery) => {
          setIsDark(mediaQuery.matches);
        });
      });
    dispatch(initSystemThemeType(isDark));
  }, []);

  const { state, app } = useSelector((s: any) => ({
    app: s[APP_MODULE_NAME],
    state: s[THEME_MODULE_NAME],
  }));

  useEffect(() => {
    if (isRequestSuccess(app.request) && state.isSystem) {
      dispatch(initThemeData(isDark));
    }
  }, [isDark, state.isSystem, isRequestSuccess(app.request)]);

  const [theme, setTheme] = useState<any>({
    LIGHT_COLOR_DATA,
    value: VALUE_OPACITY_DATA_LIGHT,
  });

  useEffect(() => {
    if (state?.type === THEME_ENUM.LIGHT) {
      setTheme({ ...LIGHT_COLOR_DATA, value: VALUE_OPACITY_DATA_LIGHT });
    } else {
      setTheme({ ...DARK_COLOR_DATA, value: VALUE_OPACITY_DATA_DARK });
    }
  }, [state?.type]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
