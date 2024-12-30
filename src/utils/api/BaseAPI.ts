import axiosInstance from "./Axios";

export interface IBaseAPIParams {
  url: string;
  method?: string;
  params?: object | null;
  data?: object | null;
  needToken?: boolean;
}

export class BaseAPI {
  static callAPI = async ({
    url,
    method = "get",
    params = null,
    data = null,
  }: IBaseAPIParams) => {
    let res = null;
    try {
      res = await axiosInstance({
        url: url,
        method: method,
        data: data,
        params: params,
      });
    } catch (err: any) {
      console.log("Something went wrong while calling API.");
      let error = "Something went wrong";
      if (err?.response?.data) error = err?.response?.data?.error ?? error;

      if (
        err.response &&
        (err.response.status === 401 || err.response.status === 403)
      )
        location.href = location.origin + "/disconnect";

      return {
        data: null,
        error: error,
      };
    }

    if (res.status !== 200) {
      console.log("Unexpected api response status code", res.status);
      return {
        data: null,
        error: "Something went wrong",
      };
    }

    return {
      data: res.data,
      error: null,
    };
  };
}
