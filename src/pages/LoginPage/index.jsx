import { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin";
import IconShow from "../../assets/show.svg";
import Facebook from "../../assets/facebook.svg";
import SpinnerLoading from "../../components/SpinnerLoading";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions";
import HideShow from "../../assets/hidden.svg";
import Human from "../../assets/human1.svg";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(login(email, password, setIsLoading, navigate));
  };

  return (
    <>
      <Navbar />
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-8 pt-10 md:px-12 ">
        <div className="flex max-h-[400px] max-w-4xl flex-row rounded-md bg-slate-300">
          <div className="flex justify-center">
            <img src={Human} className="hidden md:block" />
          </div>
          <div className="m-auto w-full rounded-md bg-white px-10 py-4 shadow-xl sm:max-w-sm lg:max-w-md lg:rounded-l-3xl">
            <h1 className="text-center text-xl font-bold  ">LOGIN</h1>
            <div className="mt-6">
              <div className="mb-2">
                <h2 className="block text-sm font-semibold text-gray-800">
                  Email
                </h2>
                <input
                  className=" block w-full rounded-md border bg-white px-4 py-1 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="mb-2">
                <h2 className="block text-sm font-semibold text-gray-800">
                  Password
                </h2>
                <div className="relative flex flex-row items-center">
                  <input
                    className=" block w-full rounded-md border bg-white px-4 py-1 focus:outline-none focus:ring  focus:ring-opacity-40"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="absolute bottom-1/2 right-2  translate-y-1/2 "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <img src={IconShow} />
                    ) : (
                      <img src={HideShow} />
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <button
                  className="flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-1 font-semibold text-white  drop-shadow-lg   "
                  onClick={handleLogin}
                >
                  {isLoading ? <SpinnerLoading /> : <span>LOGIN</span>}
                </button>
              </div>
            </div>
            <div className="relative mt-6 flex w-full items-center justify-center border border-t">
              <div className="absolute bg-white px-5">or</div>
            </div>
            <div className="mt-4 flex flex-row justify-center gap-2 ">
              <div className="flex w-[50%] rounded-md border bg-slate-200 py-1 drop-shadow-lg">
                <GoogleLogin />
              </div>
              <div className="flex w-[50%] justify-center rounded-md border-2 bg-blue-700 py-1 drop-shadow-lg">
                <img src={Facebook} className="h-6" />
              </div>
            </div>

            <div className="mt-8 flex w-full flex-row justify-center gap-1 text-center text-xs font-light text-gray-700">
              <p>Don't have an account?</p>
              <Link
                as={Link}
                to="/register"
                className="font-medium hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
