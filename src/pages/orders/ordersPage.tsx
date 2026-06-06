import { useOrders } from "../../hooks/useOrders";
import { useState } from "react";

import Header from "../../components/header/header";
import Tabs from "../../components/tabs/tabs";
import SearchBar from "../../components/searchBar/searchBar";
import OrderCard from "../../components/orderCard/orderCard";

import "./orderPage.scss";

export default function OrdersPage() {
  const { orders, loading } = useOrders();
  const [activeTab, setActiveTab] = useState("Upcoming");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  // 🔥 filtro más claro y mantenible
  const filteredOrders = orders.filter((order) => {
    const statusMap: Record<string, number[]> = {
      Upcoming: [1],
      Completed: [2],
      Cancelled: [3],
    };

    const allowedStatuses = statusMap[activeTab];

    if (!allowedStatuses) return true;

    return allowedStatuses.includes(order.status);
  });

  return (
    <main className="orders-page">
      <Header />

      <Tabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <SearchBar />

      <section className="orders-list">
        {filteredOrders.map((order) => (
          <OrderCard
            key={order._id}
            order={order}
          />
        ))}
      </section>
    </main>
  );
}