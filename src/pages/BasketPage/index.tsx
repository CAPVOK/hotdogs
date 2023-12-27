import "./BasketPage.css";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { BreadCrumbs } from "../../components/BreadCrumbs";

export const BasketPage: FC = () => {
  const location = useLocation();
  console.log("BasketPage", location);

  return (
    <div>
      <BreadCrumbs crumbs={["Корзина"]} />
      <h1>Корзина</h1>
      <div className="products">
        <Link
          to="/products/1"
          state={{ from: (location.state?.from || "") + location.pathname }}
        >
          Хотдог
        </Link>
        <Link to="/products/2">Арбуз</Link>
        <Link to="/products/3">Дыня</Link>
        <Link to="/products/4">Тыква</Link>
      </div>
    </div>
  );
};
