import AppRouter from "./routes/AppRouter";
import { OrdersProvider } from "./context/OrdersProvider";

function App() {
  return (
    <OrdersProvider>
      <AppRouter />
    </OrdersProvider>
  );
}

export default App;