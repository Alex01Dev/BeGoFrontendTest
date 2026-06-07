import { useEffect, useState } from "react";

import { getOrders } from "../services/orderService";

import type { UpcomingOrder } from "../types/upcomingOrderTypes";

export const useOrderDetail = (
  id: string
) => {
  const [order, setOrder] =
    useState<UpcomingOrder | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    const loadOrder = async () => {
      try {
        setLoading(true);

        const orders =
          await getOrders();

        const foundOrder =
          orders.find(
            (item) => item._id === id
          ) ?? null;

        setOrder(foundOrder);
      } catch {
        setError(
          "Error loading order detail"
        );
      } finally {
        setLoading(false);
      }
    };

    loadOrder();
  }, [id]);

  return {
    order,
    loading,
    error,
  };
};