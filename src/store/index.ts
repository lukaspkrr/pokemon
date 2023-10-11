import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-native';
import {Store} from '@reduxjs/toolkit';
import configureStore from './configureStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';
import persistReducers from './persistReducers';

export interface ApplicationState {}

const sagaMonitor = Reactotron.createSagaMonitor!();

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middlewares = [sagaMiddleware];

const store: Store<ApplicationState> = configureStore(
  persistReducers(rootReducer),
  middlewares,
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
