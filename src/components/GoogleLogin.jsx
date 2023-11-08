import { useGoogleLogin } from "@react-oauth/google";
import PropTypes from "prop-types";
import Google from "../assets/google.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLoginWithGoogleAction } from "../redux/actions/authActions";

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      dispatch(
        registerLoginWithGoogleAction(responseGoogle.access_token, navigate),
      ),
    onError: (errorResponse) => {
      alert(errorResponse.error_description);
    },
  });
  return (
    <button
      onClick={() => loginGoogle()}
      className="flex w-full justify-center"
    >
      <img src={Google} className="h-6" />
    </button>
  );
};

GoogleLogin.propTypes = {
  buttonText: PropTypes.string,
};

export default GoogleLogin;
