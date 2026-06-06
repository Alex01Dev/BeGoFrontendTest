import { useOrders } from "../../hooks/useOrders";
import OrderCard from "../../components/orderCard/orderCard";

export default function OrdersPage() {
  const { orders, loading } = useOrders();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="orders-page">
      <section className="orders-list">
        {orders.map((order) => (
          <OrderCard
            key={order._id}
            order={order}
          />
        ))}
      </section>
    </main>
  );
}