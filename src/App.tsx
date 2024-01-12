import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BasketPage, HomePage, ProductPage, ProductsPage } from "./pages";

function App() {
  return (
    <BrowserRouter basename="/hotdogs"> {/* hotdogs - название репо */}
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
