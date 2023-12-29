import "./HomePage.css";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../App";

export const HomePage: FC = () => {
  const location = useLocation();
  console.log("HomePage", location);

  return (
    <div>
      <h1>Главная</h1>
      <div className="links">
        <Link
          to={ROUTES.BASKET}
          state={{ from: location.state?.from || "" + location.pathname }}
        >
          Корзина
        </Link>
        <Link
          to={ROUTES.PRODUCTS}
          state={{ from: location.state?.from || "" + location.pathname }}
        >
          Продукты
        </Link>
      </div>
    </div>
  );
};
