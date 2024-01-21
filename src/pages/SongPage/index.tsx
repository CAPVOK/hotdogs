import { FC } from "react";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { ROUTES, ROUTE_LABELS } from "../../Routes";

export const SongPage: FC = () => {
  // запрос

  return (
    <div>
      <BreadCrumbs
        crumbs={[
          { label: ROUTE_LABELS.CHARTS, path: ROUTES.CHARTS },
          { label: "Never Gonna Give You Up" },
        ]}
      />
      <h1>Never Gonna Give You Up</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum
        qui nihil in blanditiis laudantium a eveniet, sit delectus quia
        recusandae, porro nostrum. Unde facilis omnis necessitatibus provident
        tempora eos!
      </p>
    </div>
  );
};
