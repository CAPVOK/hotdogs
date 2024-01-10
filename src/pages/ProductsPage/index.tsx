import "./ProductsPage.css";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { ROUTES } from "../../Routes";

export const ProductsPage: FC = () => {
  const location = useLocation();
  console.log("ProductsPage", location);

  return (
    <div>
      <BreadCrumbs crumbs={[{label: "Продукты", path: "/hotdogs/products"}]}/>
      <h1>Продукты</h1>
      <div className="products">
        <Link
          to={ROUTES.PRODUCTS + "/1"}
          state={{ from: (location.state?.from || "") + location.pathname }}
        >
          Хотдог
        </Link>
        <Link to={ROUTES.PRODUCTS + "/2"}>Арбуз</Link>
        <Link to={ROUTES.PRODUCTS + "/3"}>Дыня</Link>
        <Link to={ROUTES.PRODUCTS + "/4"}>Тыква</Link>
      </div>
    </div>
  );
};
