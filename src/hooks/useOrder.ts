import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useOrdersContext } from "../context/useOrdersContext";
import type { UpcomingOrder } from "../types/upcomingOrderTypes";

export const useOrder = (): UpcomingOrder | null => {
  const { id } = useParams();

  const { orders } = useOrdersContext();

  const order = useMemo(() => {
    if (!id) return null;

    return orders.find(
      (order: UpcomingOrder) => order._id === id
    ) ?? null;
  }, [orders, id]);

  return order;
};