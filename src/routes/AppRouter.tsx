import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import OrdersPage from "../pages/orders/ordersPage";
import OrderDetailPage from "../pages/orderDetails/orderDetailsPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<OrdersPage />}
        />

        <Route
          path="/orders/:id"
          element={<OrderDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}