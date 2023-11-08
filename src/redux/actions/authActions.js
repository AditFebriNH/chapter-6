import axios from "axios";
import { setToken, setUser } from "../reducers/authReducer";
import { VITE_API_URL } from "../../constants/config";
import { toastify } from "../../utils/toastify";

export const getMe =
  (navigate, navigatePathSuccess, navigatePathError) =>
  async (dispatch, getState) => {
    try {
      let { token } = getState().auth;
      const response = await axios.get(`${VITE_API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response.data;

      dispatch(setUser(data));

      if (navigatePathSuccess) navigate(navigatePathSuccess);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // If token is not valid
        if (error.response.status === 401) {
          dispatch(logout());

          if (navigatePathError) navigate(navigatePathError);
          return;
        }
        toastify({
          message: error?.response?.data?.message,
          type: "Error",
        });
      }
      toastify({
        message: error?.response?.data?.message,
        type: "Error",
      });
      alert(error?.message);
    }
  };

export const registerLoginWithGoogleAction =
  (accessToken, navigate) => async (dispatch) => {
    try {
      const data = JSON.stringify({
        access_token: accessToken,
      });

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${VITE_API_URL}/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      dispatch(setToken(token));

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response.data.message);
        return;
      }
      alert(error.message);
    }
  };

export const logout = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
};

export const login =
  (email, password, setIsLoading, navigate) => async (dispatch) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${VITE_API_URL}/auth/login`, {
        email,
        password,
      });
      const { data } = response.data;
      const { token } = data;

      //direct ke homepage
      dispatch(setToken(token));
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastify({
          message: error.response.data.message,
          type: "error",
        });
        setIsLoading(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

export const register =
  (name, email, password, setIsLoading, navigate) => async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${VITE_API_URL}/auth/register`, {
        email,
        name,
        password,
      });
      toastify({
        message: "Register berhasil",
        type: "success",
      });
      const result = response.data;
      localStorage.setItem("token", result.data.token);
      navigate("/login");
    } catch (error) {
      toastify({
        message: error.response.data.message,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };
