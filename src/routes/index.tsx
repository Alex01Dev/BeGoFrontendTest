import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrdersPage from "../pages/orders/ordersPage";
import OrderDetailsPage from "../pages/orderDetails/orderDetailsPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrderDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}