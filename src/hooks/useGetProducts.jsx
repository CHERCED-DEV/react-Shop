import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const productContext = createContext({});

export const ProductContextProvider = ({ children }) => {
    const [id, setId] = useState(0);
    const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
        console.log(id)
      if (id === 0) {
        const response = await axios(
          "https://api.escuelajs.co/api/v1/products"
        );
        setProducts(response.data);
      } else {
        const response = await axios(
          `https://api.escuelajs.co/api/v1/categories/${id}/products`
        );
        setProducts(response.data);
      }
    }

    fetchProducts();
  }, [id]);

  return (
    <productContext.Provider
      value={{
        products,
        id,
        setId,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(productContext);
  return context;
};
