import { useEffect, useState } from "react";
import { getOrders } from "../services/orderService";
import { useOrdersContext } from "../context/useOrdersContext";
export const useOrders = () => {
  const { orders, setOrders } = useOrdersContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await getOrders();

        setOrders(data);
      } catch (error) {
        console.error("Error loading orders:", error);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, [setOrders]);

  return {
    orders,
    loading,
  };
};