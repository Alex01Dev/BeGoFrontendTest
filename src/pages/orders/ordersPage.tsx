import { useUpcomingOrder } from "../../hooks/useUpcomingOrder";
import { useState, useMemo } from "react";

import Header from "../../components/header/header";
import Tabs from "../../components/tabs/tabs";
import SearchBar from "../../components/searchBar/searchBar";
import OrderCard from "../../components/orderCard/orderCard";

import "./orderPage.scss";

export default function OrdersPage() {
  const { orders, loading } = useUpcomingOrder();

  const [search, setSearch] = useState("");

  const filteredOrders = useMemo(() => {
    return (orders ?? []).filter((order) =>
      order.order_number.toLowerCase().includes(search.toLowerCase())
    );
  }, [orders, search]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="orders-page">
      <Header />

      <Tabs activeTab="Upcoming" onTabChange={() => {}} />

      <SearchBar value={search} onChange={setSearch} />

      <section className="orders-list">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))
        ) : (
          <p>No orders found</p>
        )}
      </section>
    </main>
  );
}