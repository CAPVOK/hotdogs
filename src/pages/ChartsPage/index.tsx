import "./ChartsPage.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { ROUTES, ROUTE_LABELS } from "../../Routes";

export const ChartsPage: FC = () => {
  return (
    <div>
      <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.CHARTS }]} />
      <h1>Чарты</h1>
      <div className="songs">
        <Link to={`${ROUTES.CHARTS}/1`}>Норм песня</Link>
        <Link to={`${ROUTES.CHARTS}/1`}>Крутая песня</Link>
        <Link to={`${ROUTES.CHARTS}/1`}>Божественная песня</Link>
        <Link to={`${ROUTES.CHARTS}/1`}>Never Gonna Give You Up</Link>
      </div>
    </div>
  );
};
