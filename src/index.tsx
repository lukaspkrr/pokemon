import React, {useCallback, useMemo} from 'react';

import {Provider} from 'react-redux';
import {persistor, store} from '~/store';

import {PersistGate} from 'redux-persist/integration/react';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

import {DefaultTheme, ThemeProvider} from 'styled-components/native';
import {ThemeToggleContext, dark, light, usePersistState} from './styles';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistState<DefaultTheme>('theme', dark);

  const toggle = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme]);

  const preferences = useMemo(
    () => ({
      toggleTheme: toggle,
    }),
    [toggle],
  );

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeToggleContext.Provider value={preferences}>
          <ThemeProvider theme={theme}>
            <StatusBar
              barStyle={
                theme.title === 'light' ? 'dark-content' : 'light-content'
              }
            />
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </ThemeProvider>
        </ThemeToggleContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
