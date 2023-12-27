import { Link } from "react-router-dom";
import "./BreadsCrumb.css";
import { FC } from "react";

interface ICrumb {
  name: string;
  path: string;
}

type BreadCrumbType = string | ICrumb;

interface BreadCrumbsProps {
  crumbs: BreadCrumbType[];
}

export const BreadCrumbs: FC<BreadCrumbsProps> = (props) => {
  const { crumbs } = props;

  return (
    <ul className="breadcrumbs">
      <li>
        <Link to="/home">Главная</Link>
      </li>
      {crumbs.length &&
        crumbs.map((crumb) => (
          <>
            <li className="slash">/</li>
            {typeof crumb === "string" ? (
              <li>{crumb}</li>
            ) : (
              <li>
                <Link to={crumb.path}>{crumb.name}</Link>
              </li>
            )}
          </>
        ))}
    </ul>
  );
};
