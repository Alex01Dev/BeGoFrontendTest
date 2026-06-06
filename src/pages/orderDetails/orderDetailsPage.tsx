import "./OrderDetailPage.scss";
import { useParams } from "react-router-dom";
import { useOrderDetail } from "../../hooks/useOrderDetail";
import { mapOrderToDetail } from "../../mappers/orderDetailMapper";

export default function OrderDetailPage() {
  const { id } = useParams();

  const { order, loading, error } = useOrderDetail(id!);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (!order) return <h1>No order found</h1>;

  const detail = mapOrderToDetail(order);

  return (
    <div>
      <h1>{detail.orderNumber}</h1>

      <p>Route: {detail.route}</p>

      <p>Driver: {detail.driver}</p>

      <p>Manager: {detail.manager}</p>

      <p>Total: ${detail.total.toFixed(2)}</p>
    </div>
  );
}