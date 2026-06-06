import api from "../api/axios";

export const getOrders = async () => {
  const response = await api.get("/orders");

  const result = response.data.result;

  return Array.isArray(result)
    ? result
    : [result];
};