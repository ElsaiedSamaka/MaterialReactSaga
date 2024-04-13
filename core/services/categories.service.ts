/* eslint-disable no-useless-catch */
import apiservice from "./api.service";

const categoriesService = {
  post: async (body: object) => {
    try {
      const response = await apiservice.post("category", body, {});
      return response;
    } catch (error) {
      throw error;
    }
  },

  postMultiPartFormData: async (body: object) => {
    try {
      const response = await apiservice.post("category", body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  get: async () => {
    try {
      const response = await apiservice.get("category");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getById: async (id: string) => {
    try {
      const response = await apiservice.get(`category/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  put: async (id: string, body: object) => {
    try {
      const response = await apiservice.put(`category/${id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  remove: async (id: string) => {
    try {
      const response = await apiservice.remove(`category/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  removeAll: async (ids: []) => {
    try {
      const response = await apiservice.post("category/remove-all", ids, {});
      return response;
    } catch (error) {
      throw error;
    }
  },

  patch: async (id: string, body: object) => {
    try {
      const response = await apiservice.put(`category/${id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  search: async (query: string) => {
    try {
      const response = await apiservice.get(`category/search/${query}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default categoriesService;
