import { useOrders } from "../../hooks/useOrders";
import { useState } from "react";

import Header from "../../components/header/header";
import Tabs from "../../components/tabs/tabs";
import SearchBar from "../../components/searchBar/searchBar";
import OrderCard from "../../components/orderCard/orderCard";

import "./orderPage.scss";



export default function OrdersPage() {
  const { orders, loading } = useOrders();
  const [activeTab, setActiveTab] =
  useState("Upcoming");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="orders-page">
      <Header />

      <Tabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
    />

      <SearchBar />

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