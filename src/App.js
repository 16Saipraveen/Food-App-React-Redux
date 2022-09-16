import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Header, NotFound } from "./Layout";
import { store, persister } from "./store/store";
import { Cart } from "./Cart/Cart";
import { Meals } from "./Meals";
import { Loader } from "./UI";
import "./App.scss";

const MealView = lazy(() => import("./Layout/MealView"));
const OrderSummary = lazy(() => import("./Layout/OrderSummary"));

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persister}>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <Routes>
            <Route path="/" element={<Meals />} />
            <Route
              path="/mealItem/:id"
              element={
                <Suspense fallback={<Loader />}>
                  <MealView />
                </Suspense>
              }
            />
            <Route
              path="/orders"
              element={
                <Suspense fallback={<Loader />}>
                  <OrderSummary />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
