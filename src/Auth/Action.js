import axios from "axios";
import { API_BASE_URL } from "../Config/ApiConfig";
import { 
  GET_USER_FAILURE, 
  GET_USER_REQUEST, 
  GET_USER_SUCCESS, 
  LOGIN_FAILURE, 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGOUT, 
  REGISTER_FAILURE, 
  REGISTER_REQUEST, 
  REGISTER_SUCCESS 
} from "./ActionType";

// Register
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest()); // Fixed: Invoke the function
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("registeruser", user);
    dispatch(registerSuccess(user.jwt));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

// Login
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest()); // Fixed: Invoke the function
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("loginuser", user);
    dispatch(loginSuccess(user.jwt));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

// Get User
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest()); // Fixed: Invoke the function
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    console.log("getuser", user);
    dispatch(getUserSuccess(user)); // Fixed: Pass the user data as the payload
  } catch (error) {
    dispatch(getUserFailure(error.message)); // Fixed: Pass the error message as the payload
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
  localStorage.clear()
}
