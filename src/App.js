import { Container } from "@mui/material";
import { Route, Routes, useLocation } from "react-router";
import HeaderComponent from "./components/header";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  HOME_ROUTE,
  INFO_ROUTE,
  LOGIN_ROUTE,
  SIGNIN_ROUTE,
} from "./constant/routes";
import Admin from "./pages/admin";
import Basket from "./pages/basket";
import Home from "./pages/home";
import Login from "./pages/login";
import SignIn from "./pages/signIn";
import "./tailwind.css";
import Information from "./components/information";
import NotFound from "./pages/notFound";

function App() {
  const location = useLocation();
  const isLoginSignin =
    location.pathname.includes(LOGIN_ROUTE) ||
    location.pathname.includes(SIGNIN_ROUTE);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {!isLoginSignin && <HeaderComponent />}
      <div className="pt-7">
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={BASKET_ROUTE} element={<Basket />} />
          <Route path={LOGIN_ROUTE} element={<Login />}>
            <Route path={ADMIN_ROUTE} element={<Admin />} />
          </Route>
          <Route path={SIGNIN_ROUTE} element={<SignIn />} />
          <Route path={INFO_ROUTE} element={<Information />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
