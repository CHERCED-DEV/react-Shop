import React from "react";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";
import { useProductContext } from "../hooks/useGetProducts";

const ProductList = () => {
  const products = useProductContext();
  
  return (
    <>
      {products ? (
        <section className="main-container">
          <div className="ProductList">
            {products.products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ProductList;
