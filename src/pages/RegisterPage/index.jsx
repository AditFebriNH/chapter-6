import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpinnerLoading from "../../components/SpinnerLoading";
import { toastify } from "../../utils/toastify";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import IconShow from "../../assets/show.svg";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authActions";
import HideShow from "../../assets/hidden.svg";
import RegisIcon from "../../assets/regist4.png";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toastify({
        message: "Password tidak sama",
        type: "error",
      });
      return;
    }

    const fullName = form.firstName + " " + form.lastName;

    dispatch(
      register(fullName, form.email, form.password, setIsLoading, navigate),
    );
  };

  return (
    <>
      <Navbar />
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-8 pt-10 sm:px-20  md:px-20">
        <div className="flex max-h-[450px] w-full max-w-4xl  rounded-md  bg-slate-300 ">
          <div className="md:bg flex justify-center">
            <img
              src={RegisIcon}
              className="hidden sm:max-w-sm lg:block  lg:max-w-lg "
            />
          </div>
          <div className=" m-auto w-full rounded-md bg-white px-10 py-3 shadow-xl lg:max-w-lg   lg:rounded-l-3xl">
            <h1 className="text-center text-xl font-bold  ">SIGN UP</h1>

            <div className=" mt-7 ">
              <div className="mb-2 flex flex-row  gap-2">
                <div className="w-full">
                  <h2 className="block text-sm font-semibold text-gray-800">
                    First Name
                  </h2>
                  <input
                    className=" block w-full rounded-md border bg-white px-4 py-1 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                    value={form.firstName}
                    onChange={(e) => {
                      setForm({ ...form, firstName: e.target.value });
                    }}
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full">
                  <h2 className="block pl-1 text-sm font-semibold text-gray-800">
                    Last Name
                  </h2>
                  <input
                    className=" block w-full rounded-md border bg-white px-4 py-1 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                    value={form.lastName}
                    onChange={(e) => {
                      setForm({ ...form, lastName: e.target.value });
                    }}
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="mb-2">
                <h2 className="block text-sm font-semibold text-gray-800">
                  Email
                </h2>
                <input
                  className=" block w-full rounded-md border bg-white px-4 py-1 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
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
                    value={form.password}
                    onChange={(e) => {
                      setForm({ ...form, password: e.target.value });
                    }}
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
              <div className="mb-2">
                <h2 className="block text-sm font-semibold text-gray-800">
                  Password
                </h2>
                <div className="relative flex flex-row items-center">
                  <input
                    className=" block w-full rounded-md border bg-white px-4 py-1 focus:outline-none focus:ring  focus:ring-opacity-40"
                    type={showConfirmPassword ? "text" : "password"}
                    value={form.confirmPassword}
                    onChange={(e) => {
                      setForm({ ...form, confirmPassword: e.target.value });
                    }}
                  />
                  <button
                    className="absolute bottom-1/2 right-2  translate-y-1/2 "
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <img src={IconShow} />
                    ) : (
                      <img src={HideShow} />
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-7">
                <button
                  className="flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-1 font-semibold text-white  drop-shadow-lg   "
                  onClick={handleSubmit}
                >
                  {isLoading ? <SpinnerLoading /> : <span>REGISTER</span>}
                </button>
              </div>
            </div>
            <div className="relative mt-6 flex w-full items-center justify-center border border-t">
              <div className="absolute bg-white px-5">or</div>
            </div>

            <div className="mt-[30px] flex w-full flex-row justify-center gap-1 text-center text-xs font-light ">
              <p>Already an account?</p>
              <Link
                as={Link}
                to="/login"
                className="font-medium hover:underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
