import React from "react";
import { Product } from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/product/product.actions";
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.product);

  useEffect(() => {
    // dispatch(getProducts());
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    <div>Loading...</div>;
  } else if (error) {
    <div>Error...</div>;
  }

  console.log(data);

  return (
    <div>
      {/* here */}
      <div>Products</div>
      <div>
        {data.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Products;