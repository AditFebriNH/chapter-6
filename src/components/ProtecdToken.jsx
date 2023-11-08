import { useNavigate } from "react-router-dom";
import { getMe } from "../redux/actions/authActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ProtecdToken = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe(navigate, "/", null));
  }, [dispatch, navigate]);

  return children;
};

export default ProtecdToken;
