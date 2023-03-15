import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  updateCartItem,
} from "../../../redux/cart/cart.actions";

const Product = ({ id, name, description }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => {
    return (
      state.cart.data.find((item) => item.productId === id) || { count: 0 }
    );
  });
  const addCart = () => {
    dispatch(
      addItemToCart({
        productId: id,
        count: 1,
      })
    );
  };
  const handleUpdate = (newCount) => {
    if (newCount === 0) {
      dispatch(removeItemFromCart(cartItems.id));
    } else {
      dispatch(updateCartItem(cartItems.id, { count: newCount }));
    }
  };
  return (
    <div data-cy={`product-${id}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={addCart}>
        Add To Cart
      </button>
      <div>
        <button
          data-cy="product-increment-cart-item-count-button"
          onClick={() => handleUpdate(cartItems.count + 1)}
        >
          {" "}
          +{" "}
        </button>
        <span data-cy="product-count">{cartItems.count}</span>
        <button
          data-cy="product-decrement-cart-item-count-button"
          onClick={() => handleUpdate(cartItems.count - 1)}
        >
          -
        </button>
        <button
          data-cy="product-remove-cart-item-button"
          onClick={() => handleUpdate(0)}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default Product;