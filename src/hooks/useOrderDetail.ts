import { useEffect, useState } from "react";
import { getUpcomingOrder } from "../services/orderService";
import type { UpcomingOrder } from "../types/upcomingOrderTypes";

export const useOrderDetail = (id: string) => {
  const [order, setOrder] = useState<UpcomingOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const data = await getUpcomingOrder();

        const found = data.find((o: UpcomingOrder) => o._id === id);

        setOrder(found ?? null);
      } catch (err) {
        console.error(err);
        setError("Error loading order");
      } finally {
        setLoading(false);
      }
    };

    loadOrder();
  }, [id]);

  return { order, loading, error };
};