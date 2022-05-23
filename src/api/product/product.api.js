import { ENDPOINTS } from "../endpoints";
import { api } from "../api";

export const apiProductGetList = (data) => {
  return api.get(ENDPOINTS.products, data);
};
