import { Link, useLocation } from "react-router-dom";
import "./BreadsCrumb.css";
import { FC } from "react";
import { ROUTES, ROUTE_LABELS } from "../../Routes";
import React from "react";

interface BreadCrumbsProps {
  name?: string;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = (props) => {
  const { name } = props;

  const { pathname } = useLocation();
  // pathname = "/products/1"
  const crumbs = pathname.split("/").slice(1, name ? -1 : undefined);
  // pathname.split("/") = ["","products", "1"]
  // crumbs = ["products"]

  return (
    <ul className="breadcrumbs">
      <li>
        <Link to={ROUTES.HOME}>Главная</Link>
      </li>
      {!!crumbs.length &&
        crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <li className="slash">/</li>
            {index === crumbs.length - 1 && !name ? (
              <li>{ROUTE_LABELS[crumb as keyof typeof ROUTE_LABELS]}</li>
            ) : (
              <li>
                <Link to={ROUTES[crumb.toUpperCase() as keyof typeof ROUTES]}>
                  {ROUTE_LABELS[crumb as keyof typeof ROUTE_LABELS]}
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
