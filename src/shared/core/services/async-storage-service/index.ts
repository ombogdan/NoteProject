import AsyncStorage from '@react-native-async-storage/async-storage';

const enum StorageValues {
  accessToken = 'accessToken',
}

class AsyncStorageService {
  // eslint-disable-next-line class-methods-use-this
  async setAccessToken(token: string) {
    await AsyncStorage.setItem(StorageValues.accessToken, `${token}`);
  }

  // eslint-disable-next-line class-methods-use-this
  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(StorageValues.accessToken);
    return accessToken;
  }

  // eslint-disable-next-line class-methods-use-this
  async removeAccessToken() {
    await AsyncStorage.removeItem(StorageValues.accessToken);
  }
}

export const asyncStorageService = new AsyncStorageService();
