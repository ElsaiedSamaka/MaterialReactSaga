/* eslint-disable no-useless-catch */
import apiservice from "./api.service";

const authServices = {
  signin: async (body: object) => {
    try {
      const response = await apiservice.post("auth/login", body, {});
      return response;
    } catch (error) {
      throw error;
    }
  },
  signup: async (body: object) => {
    try {
      const response = await apiservice.post("auth/register", body, {});
      return response;
    } catch (error) {
      throw error;
    }
  },
  signout: async (body: object) => {
    try {
      const response = await apiservice.post("auth/logout", body, {});
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default authServices;
