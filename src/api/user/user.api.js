import { ENDPOINTS } from "../endpoints";
import { api } from "../api";

export const apiUserGetList = (data) => {
  return api.get(ENDPOINTS.users, data);
};
