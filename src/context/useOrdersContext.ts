import { useContext } from "react";
import { OrdersContext } from "./ordersContext";

export function useOrdersContext() {
  const context = useContext(OrdersContext);

  if (!context) {
    throw new Error("useOrdersContext debe usarse dentro de OrdersProvider");
  }

  return context;
}