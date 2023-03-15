import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../redux/auth/auth.actions";

const Navbar = () => {
  const isLogin = useSelector((state) => state.auth.data.isAuthenticated);
  const dispatch = useDispatch();
  // const countCartItems=0;
  const countCartItems = useSelector((state) => state.cart.data.length);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLogin) {
      dispatch(logout());
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link data-cy="navbar-home-link" to="/">
          Logo
        </Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">
          Total Cart Items: {countCartItems && `(${countCartItems})`}
        </div>
        <button data-cy="navbar-login-logout-button" onClick={handleClick}>
          {isLogin ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;