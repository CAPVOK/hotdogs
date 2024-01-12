import { FC } from "react";
import { useLocation } from "react-router-dom";
import { BreadCrumbs } from "../../components/BreadCrumbs";

export const ProductPage: FC = () => {
  const location = useLocation();
  console.log("ProductPage", location);

  return (
    <div>
      <BreadCrumbs
        crumbs={[
          { label: "Продукты", path: "/products" },
          { label: "Хотдог", path: "/products/1" },
        ]}
      />
      <h1>Продукт</h1>
    </div>
  );
};
