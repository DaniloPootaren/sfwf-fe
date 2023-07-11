import { store } from "../App";
import { httpClient } from "../utils/network";

export const createApplication = (obj: any, schemeID: any): Promise<any> => {
    const user = (store.getState() as any).authentication.data.user;

  const data = {
    status: "PENDING",
    form_data: obj,
    scheme: schemeID,
    users_permissions_user: user
  };
  return httpClient().post(`/applications`, {data});
};
