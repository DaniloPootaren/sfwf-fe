import axios, { AxiosInstance } from "axios";
import join from "url-join";
import { store } from "../App";
import { BASE_URL } from "../constants";

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

interface AxiosWithoutAuthHeader extends AxiosInstance {
  withoutAuthHeader(): AxiosInstance;
}

export const httpClient = (): AxiosWithoutAuthHeader => {
  let instance = axios.create();
  const token = (store.getState() as any).authentication.data.access_token;

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error) {
        if (error.response.data) {
          alert(
            error.response.data.message ||
              "An error has occured, Please contact your administrator"
          );
        }
      }
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use(
    function (config) {
      if (token) {
        config!.headers!.Authorization = `Bearer ${token}`;
      }

      if (!isAbsoluteURLRegex.test(config.url as string)) {
        config.url = join(BASE_URL, config.url as string);
      }

      return config;
    },
    function (error) {
      alert(JSON.stringify(error));
      return Promise.reject(error);
    }
  );

  (instance as AxiosWithoutAuthHeader).withoutAuthHeader = () => {
    const newInstance = axios.create({
      baseURL: BASE_URL,
    }) as AxiosInstance;

    instance.interceptors.request.use(
      function (config) {
        if (!isAbsoluteURLRegex.test(config.url as string)) {
          config.url = join(BASE_URL, config.url as string);
        }

        return config;
      },
      function (error) {
        alert(JSON.stringify(error));
        return Promise.reject(error);
      }
    );

    return newInstance;
  };

  return instance as AxiosWithoutAuthHeader;
};
