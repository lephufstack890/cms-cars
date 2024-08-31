import axios from 'axios';

import { axiosClient } from '@/api/axiosClient';
import { IAxiosNetworkError, newAppError } from '@/common/error';
import { AuthModel, FormLoginModel, INetworkResponse, UserModel } from '@/models';

const authAPI = {
  getUserByToken(): Promise<INetworkResponse<UserModel>> {
    const url = 'employee/account/profile';
    return axiosClient.get(url);
  },

  login(formData: FormLoginModel): Promise<INetworkResponse<AuthModel>> {
    const url = 'employee/account/login';
    return axiosClient.post(url, formData);
  },

  async refreshToken(refreshToken: string): Promise<INetworkResponse<AuthModel>> {
    // need to create new axios to avoid await promise pending endlessly because onResponseError calls itself
    const url = 'employee/token/refresh';
    const baseAPIUrl = import.meta.env.VITE_BASE_API_URL;
    const axiosClientRefreshToken = axios.create({ baseURL: baseAPIUrl });
    const config = { headers: { Authorization: `Bearer ${refreshToken}` } };

    try {
      const { data } = await axiosClientRefreshToken.get<INetworkResponse<AuthModel>>(url, config);
      return new Promise((resolve) => resolve(data));
    } catch (error) {
      const appError = newAppError(error as IAxiosNetworkError);
      return new Promise((resolve, reject) => reject(appError));
    }
  },
};

export { authAPI };
