import { useEffect, useState } from "react";
import { getUpcomingOrder } from "../services/orderService";
import type { UpcomingOrder } from "../types/upcomingOrderTypes";

export const useUpcomingOrder = () => {
  const [orders, setOrders] = useState<UpcomingOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await getUpcomingOrder();

        console.log("ORDERS API:", data);

        setOrders(data);
      } catch (err) {
        console.error(err);
        setError("Error loading orders");
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  return {
    orders,
    loading,
    error,
  };
};