import "./OrderDetailPage.scss";

import { useState } from "react";
import { useParams } from "react-router-dom";

import { useOrderDetail } from "../../hooks/useOrderDetail";
import { mapOrderToDetail } from "../../mappers/orderDetailMapper";

import OrderTimeline from "../../components/orderDetail/orderTimeline";
import TrackOrderButton from "../../components/orderDetail/trackOrderButton";
import DestinationPanel from "../../components/orderDetail/destinationPanel";
import RouteSummaryCard from "../../components/orderDetail/routeSummaryCard";
import Header from "../../components/header/header";

export default function OrderDetailPage() {
  const { id } = useParams();

  const [activeDestination, setActiveDestination] =
    useState<"pickup" | "dropoff">(
      "pickup"
    );

  const {
    order,
    loading,
    error,
  } = useOrderDetail(id!);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!order) {
    return <h1>No order found</h1>;
  }

  const detail =
    mapOrderToDetail(order);

  const address =
    activeDestination === "pickup"
      ? detail.pickupAddress
      : detail.dropoffAddress;

  const date =
    activeDestination === "pickup"
      ? detail.pickupDate
      : detail.dropoffDate;

  return (
    <div className="order-detail-page">
      <Header />
      
      <RouteSummaryCard
        orderNumber={detail.orderNumber}
        pickupCity={detail.pickupCity}
        pickupAddress={detail.pickupAddress}
        dropoffCity={detail.dropoffCity}
        dropoffAddress={detail.dropoffAddress}
        activeDestination={
          activeDestination
        }
        onChange={
          setActiveDestination
        }
      />

      <OrderTimeline
        currentStatus={
          order.status
        }
      />

      <TrackOrderButton
        status={order.status}
      />

      <DestinationPanel
        title={
          activeDestination ===
            "pickup"
            ? "Pickup Data"
            : "Dropoff Data"
        }
        address={address}
        date={date}
        phone={
          detail.driverPhone
        }
        email={
          detail.driverEmail
        }
      />
    </div>
  );
}