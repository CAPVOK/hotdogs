import "./BasketPage.css";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { ROUTES } from "../../Routes";

export const BasketPage: FC = () => {
  const location = useLocation();
  console.log("BasketPage", location);

  return (
    <div>
      <BreadCrumbs crumbs={[{ label: "Корзина", path: "/basket" }]} />
      <h1>Корзина</h1>
      <div className="products">
        <Link to={ROUTES.PRODUCTS + "/1"}>Хотдог</Link>
        <Link to={ROUTES.PRODUCTS + "/2"}>Арбуз</Link>
        <Link to={ROUTES.PRODUCTS + "/3"}>Дыня</Link>
        <Link to={ROUTES.PRODUCTS + "/4"}>Тыква</Link>
      </div>
    </div>
  );
};
