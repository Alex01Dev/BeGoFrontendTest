import "./orderDetailPage.scss";

import { useState } from "react";
import { useParams } from "react-router-dom";

import { useOrderDetail } from "../../hooks/useOrderDetail";
import { mapOrderToDetail } from "../../mappers/orderDetailMapper";

import DestinationPanel from "../../components/orderDetail/destinationPanel";
import RouteSummaryCard from "../../components/orderDetail/routeSummaryCard";
import Header from "../../components/header/header";
import TrackingCard from "../../components/orderDetail/trackingCard";

export default function OrderDetailPage() {
  const { id } = useParams();

  const [activeDestination, setActiveDestination] =
    useState<"pickup" | "dropoff">("pickup");

  const { order, loading, error } = useOrderDetail(id!);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (!order) return <h1>No order found</h1>;

  const forceCanTrack =
    import.meta.env.VITE_FORCE_CAN_TRACK === "true";
const forceStatus = import.meta.env.VITE_FORCE_STATUS
  ? Number(import.meta.env.VITE_FORCE_STATUS)
  : null;

const detail = mapOrderToDetail(
  forceStatus !== null
    ? { ...order, status: forceStatus }
    : order
);  const isPickup = activeDestination === "pickup";

  const address = isPickup ? detail.pickupAddress : detail.dropoffAddress;
  const date = isPickup ? detail.pickupDate : detail.dropoffDate;
  const time = isPickup ? detail.pickupTime : detail.dropoffTime;

  return (
    <div className="order-detail-page">
      <Header />

      <RouteSummaryCard
        orderNumber={detail.orderNumber}
        referenceNumber={detail.referenceNumber}
        pickupAddress={detail.pickupAddress}
        dropoffAddress={detail.dropoffAddress}
        activeDestination={activeDestination}
        onChange={setActiveDestination}
      />

      <TrackingCard
        steps={detail.statusSteps}
        canTrack={forceCanTrack || detail.canTrack}
        time="10:30 PM"
      />

      <DestinationPanel
        title={isPickup ? "Pickup Data" : "Dropoff Data"}
        address={address}
        date={date}
        time={time}
        phone={detail.driverPhone}
        email={detail.driverEmail}
      />
    </div>
  );
}