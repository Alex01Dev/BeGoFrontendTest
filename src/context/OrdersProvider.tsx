import { useState, type ReactNode } from "react";
import { OrdersContext } from "./ordersContext";
import type { UpcomingOrder } from "../types/upcomingOrderTypes";

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<UpcomingOrder[]>([]);

  return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrdersContext.Provider>
  );
}