/* eslint-disable @typescript-eslint/no-explicit-any */

import { getToken } from "./token";

const baseURL = "http://localhost:9876";
const timeout = 1000;

const request = async (url: string, options: any = {}) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  options.signal = controller.signal;

  options = requestInterceptor(options);

  try {
    const response = await fetch(baseURL + url, options);
    clearTimeout(id);

    // Response interceptor
    return responseInterceptor(response);
  } catch (error) {
    clearTimeout(id);
    return Promise.reject(error);
  }
};

const requestInterceptor = (config: any) => {
  const token = getToken();
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
};

const responseInterceptor = async (response: Response) => {
  return response;
};

export { request };
