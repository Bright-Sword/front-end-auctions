import { STAGE_ESPA_BACKEND_URL, USERNAME_ERROR } from '@constants/global.constants';
import { get, post, put } from '@utils/api';
import axios from 'axios';

class EspaApiService {
  constructor() {
    this.url = STAGE_ESPA_BACKEND_URL;
  }

  setUrl(url) {
    this.url = url;
  }

  async handleSignUp(account, userName, email, ip) {
    try {
      const message = await post('/register', {
        wallet: account,
        username: userName,
        email,
        ipAddrs: ip,
      });
      return message;
    } catch (e) {
      return null;
    }
  }

  async fetchAuthToken(account) {
    try {
      const data = await post('/account-exists', {
        wallet: account,
      });
      if (data === 0) {
        return '';
      }
      return data;
    } catch (e) {
      return '';
    }
  }

  async handleAuthentication(account, signMsg, signature) {
    try {
      const data = await post('/authenticate', {
        wallet: account,
        randomString: signMsg,
        signature,
      });
      return data;
    } catch (e) {
      return null;
    }
  }

  async checkUserName(username) {
    try {
      const isExist = await get('/username-available', {
        username,
      });
      return isExist | 0;
    } catch (e) {
      return USERNAME_ERROR;
    }
  }

  async fetchNfts(account) {
    try {
      const ntfs = await get('/get-nfts', {
        wallet: account,
      });
      return ntfs;
    } catch (e) {
      return [];
    }
  }

  async getProfile() {
    try {
      const user = await get('/profile');
      return user;
    } catch (e) {
      return null;
    }
  }

  async updateProfile(user) {
    try {
      const data = await put('/profile', user);
      return data;
    } catch (e) {
      return null;
    }
  }

  async getPresignedUrl() {
    try {
      const data = await get('/presigned-url');
      return data;
    } catch (e) {
      return null;
    }
  }

  async uploadImageToS3(url, file) {
    try {
      await axios.put(url, file, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  async getMyIP() {
    try {
      const url = 'https://api.ipify.org/?format=json';
      const { data } = await axios.get(url);
      return data.ip;
    } catch (e) {
      return '';
    }
  }

  async checkProfanity(username) {
    try {
      const url = `https://www.purgomalum.com/service/containsprofanity?text=${username}`;
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      return true;
    }
  }
}

export default new EspaApiService();
