import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({products=[]}) => {
  return <div data-testid="products-container">
    {
    products.map((ele,i) => {

      return <ProductItem key={i} title={ele.title} image = {ele.image} price={ele.price} category = {ele.category}/>

    })}
    </div>;
};

// export
export default ProductList;