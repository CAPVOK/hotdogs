/* import { Link } from "react-router-dom";
import "./BreadsCrumb.css"
import { FC } from "react";
import { ROUTES, ROUTE_LABELS, RouteKeyType } from "../../Routes";
import React from "react";

type ICrumb = RouteKeyType | string;

interface BreadCrumbsProps {
  crumbs: ICrumb[];
}

export const BreadCrumbs: FC<BreadCrumbsProps> = (props) => {
  const { crumbs } = props;

  return (
    <ul className="breadcrumbs">
      <li>
        <Link to={ROUTES.HOME}>Главная</Link>
      </li>
      {!!crumbs.length &&
        crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <li className="slash">/</li>
            {index === crumbs.length - 1 ? (
              <li>{ROUTE_LABELS[crumb]}</li>
            ) : (
              <li>
                <Link to={ROUTES[crumb]}>{ROUTE_LABELS[crumb]}</Link>
              </li>
            )}
          </React.Fragment>
        ))}
        {!!crumbName && <>
          <li className="slash">/</li>
          <li>{crumbName}</li>
        </>}
    </ul>
  );
}; */
import React from "react";
import "./BreadCrumbs.css";
import { Link } from "react-router-dom";
import { FC } from "react";
import { ROUTES } from "../../Routes";

interface ICrumb {
  label: string;
  path?: string;
}

interface BreadCrumbsProps {
  crumbs: ICrumb[];
}

export const BreadCrumbs: FC<BreadCrumbsProps> = (props) => {
  const { crumbs } = props;

  return (
    <ul className="breadcrumbs">
      <li>
        <Link to={ROUTES.HOME}>Главная</Link>
      </li>
      {!!crumbs.length &&
        crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <li className="slash">/</li>
            {index === crumbs.length - 1 ? (
              <li>{crumb.label}</li>
            ) : (
              <li>
                <Link to={crumb.path || ""}>{crumb.label}</Link>
              </li>
            )}
          </React.Fragment>
        ))}
    </ul>
  );
};
