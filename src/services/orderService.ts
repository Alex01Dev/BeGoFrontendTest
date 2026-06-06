import api from "../api/axios";
import type { UpcomingOrder } from "../types/upcomingOrderTypes";


export const getOrders = async (): Promise<UpcomingOrder[]> => {
  const response = await api.get("/orders");

  const result = response.data.result;

  return Array.isArray(result) ? result : result ? [result] : [];
};


export const getUpcomingOrder = async (): Promise<UpcomingOrder[]> => {
  const response = await api.get("/orders/upcoming");

  const data = response.data.result ?? response.data;

  return Array.isArray(data) ? data : [];
};


export const getOrderById = async (id: string): Promise<UpcomingOrder> => {
  const response = await api.get(`/orders/${id}`);

  return response.data.result;
};