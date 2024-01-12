import "./HomePage.css";
import { FC, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../Routes";

export const HomePage: FC = () => {
  const location = useLocation();
  console.log("HomePage", location);

  useEffect(() => {
    fetch("/api/planet/1").then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Главная</h1>
      <div className="links">
        <Link to={ROUTES.BASKET}>Корзина</Link>
        <Link to={ROUTES.PRODUCTS}>Продукты</Link>
      </div>
    </div>
  );
};
