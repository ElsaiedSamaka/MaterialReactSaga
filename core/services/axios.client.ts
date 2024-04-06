import axios, { AxiosRequestConfig } from 'axios';
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
export const axiosClient = axios.create({ baseURL: base_url });
export const axiosConfig: AxiosRequestConfig = {
  withCredentials: true,
};
