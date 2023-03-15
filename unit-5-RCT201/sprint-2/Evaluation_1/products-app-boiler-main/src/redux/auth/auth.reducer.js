import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./auth.types";

// Note: Do not update/change the initial state
let token = localStorage.getItem("token") || "";
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};
export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_SIGN_IN_SUCCESS: {
      if (payload.token) {
        localStorage.setItem("token", payload.token);
      }
      return {
        ...state,
        loading: false,
        data: {
          token: payload.token,
          isAuthenticated: true,
        },
        error: false,
      };
    }
    case AUTH_SIGN_OUT: {
      return {
        ...state,
        loading: false,
        data: {
          token: "",
          isAuthenticated: false,
        },
        error: false,
      };
    }
    default: {
      return state;
    }
    }
  };