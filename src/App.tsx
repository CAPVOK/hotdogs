import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BasketPage, HomePage, ProductPage, ProductsPage } from "./pages";

export const ROUTES = {
  HOME: "/home",
  PRODUCTS: "/home/products",
  BASKET: "/home/basket",
}

function App() {  
  return (
    <Routes>
      <Route path={ROUTES.HOME} index element={<HomePage />} />
      <Route path={ROUTES.BASKET} element={<BasketPage />} />
      <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
      <Route path={ROUTES.PRODUCTS + "/:id"} element={<ProductPage />} />
    </Routes>
  );
}

export default App;
