import {useState, useEffect, Dispatch, SetStateAction} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistState<T>(key: string, initialState: any): Response<T> {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    async function getMode() {
      const storage = await AsyncStorage.getItem(key);
      const parseStorage = JSON.parse(storage || '{}');
      if (parseStorage.title) {
        setState(parseStorage);
      }
    }
    getMode();
  }, [key]);

  useEffect(() => {
    async function addStorage() {
      await AsyncStorage.setItem(key, JSON.stringify(state));
    }
    addStorage();
  }, [key, state]);

  return [state, setState];
}

export default usePersistState;
