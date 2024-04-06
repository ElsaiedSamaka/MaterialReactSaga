/* eslint-disable no-useless-catch */
import { axiosClient, axiosConfig } from './axios.client';

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const apiservice = {
  post: async (path: string, body: object, options: object) => {
    try {
      const response = await axiosClient.post(`${base_url}/${path}`, body, {
        ...options,
        ...axiosConfig,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  get: async (path: string) => {
    try {
      const response = await axiosClient.get(
        `${base_url}/${path}`,
        axiosConfig,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  put: async (path: string, body: object) => {
    try {
      const response = await axiosClient.put(
        `${base_url}/${path}`,
        body || {},
        axiosConfig,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  remove: async (path: string) => {
    try {
      const response = await axiosClient.delete(
        `${base_url}/${path}`,
        axiosConfig,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  patch: async (path: string, body: object) => {
    try {
      const response = await axiosClient.patch(
        `${base_url}/${path}`,
        body || {},
        axiosConfig,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiservice;
