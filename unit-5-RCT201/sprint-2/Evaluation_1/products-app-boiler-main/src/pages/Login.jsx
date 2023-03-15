import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { login } from "../redux/auth/auth.actions";

const Login = () => {
  const [data, setData] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const dispatch = useDispatch();
  const token = useSelector((store) => store.auth.token);
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      dispatch(login(data));
      // dispatch(login(data));
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={data.email}
          data-cy="login-email"
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          value={data.password}
          placeholder="********"
          data-cy="login-password"
          onChange={onChange}
        />
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;