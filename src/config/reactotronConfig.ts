import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.configure().setAsyncStorageHandler!(AsyncStorage)
  .configure()
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/,
    },
  })
  .use(reactotronRedux())
  .use(sagaPlugin({except: ['']}))
  .connect();
reactotron.clear!();
if (__DEV__) {
  console.tron = reactotron;
} else {
  console.tron = console;
}

export default reactotron;
