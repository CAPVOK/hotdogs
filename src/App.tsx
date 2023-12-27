import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BasketPage, HomePage, ProductPage, ProductsPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/home" index element={<HomePage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
