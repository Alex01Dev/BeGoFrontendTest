import { createContext } from "react";
import type { UpcomingOrder } from "../types/upcomingOrderTypes";

export interface OrdersContextType {
  orders: UpcomingOrder[];
  setOrders: React.Dispatch<React.SetStateAction<UpcomingOrder[]>>;
}

export const OrdersContext = createContext<OrdersContextType | null>(null);