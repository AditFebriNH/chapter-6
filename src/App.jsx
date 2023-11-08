import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Protected from "./components/Protected";
import ProtecdToken from "./components/ProtecdToken";
import ProfilePage from "./pages/ProfilePage";
import SearchMovie from "./pages/SearchPage";

const App = () => {
  const routes = [
    {
      path: "/",
      element: (
        <Protected>
          <HomePage />
        </Protected>
      ),
    },
    {
      path: "/details/:id",
      element: (
        <Protected>
          <DetailsPage />
        </Protected>
      ),
    },
    {
      path: "/login",
      element: (
        <ProtecdToken>
          <LoginPage />
        </ProtecdToken>
      ),
    },
    {
      path: "/register",
      element: (
        <ProtecdToken>
          <RegisterPage />
        </ProtecdToken>
      ),
    },
    {
      path: "/profile",
      element: (
        <Protected>
          <ProfilePage />
        </Protected>
      ),
    },
    {
      path: "/search",
      element: (
        <Protected>
          <SearchMovie />
        </Protected>
      ),
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};

export default App;
