/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useLocation } from "react-router-dom";
import "./BreadsCrumb.css";
import { FC } from "react";
import { ROUTES } from "../../App";
import React from "react";

interface BreadCrumbsProps {
  name?: string;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = (props) => {
  const { name } = props;

  const { pathname } = useLocation(); 
  // pathname = "/home/products/1"
  const crumbs = pathname.split("/").slice(2, name ? -1 : undefined);
  // pathname.split("/") = ["", "home", "products", "1"]
  // crumbs = ["products"]

  const routeLabels = {
    home: "Главная",
    basket: "Корзина",
    products: "Продукты",
  };

  return (
    <ul className="breadcrumbs">
      <li>
        <Link to="/home">Главная</Link>
      </li>
      {!!crumbs.length &&
        crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <li className="slash">/</li>
            {index === crumbs.length - 1 && !name ? (
              <li>{routeLabels[crumb as keyof typeof routeLabels]}</li>
            ) : (
              <li>
                <Link to={ROUTES[crumb.toUpperCase() as keyof typeof ROUTES]}>
                  {routeLabels[crumb as keyof typeof routeLabels]}
                </Link>
              </li>
            )}
          </React.Fragment>
        ))}
      {name && (
        <>
          <li className="slash">/</li>
          <li>{name}</li>
        </>
      )}
    </ul>
  );
};
