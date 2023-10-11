import {configureStore, Store} from '@reduxjs/toolkit';
import Reactotron from '~/config/reactotronConfig';

export default (reducer: any, middleware: any): Store => {
  return configureStore({
    reducer,
    middleware,
    enhancers: [Reactotron.createEnhancer!()],
  });
};
