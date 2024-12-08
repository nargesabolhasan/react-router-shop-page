import { Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { ADMIN_ROUTE } from "../constant/routes";
import HandleBack from "../components/handleBack";
import PasswordComponent from "../components/password";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const inAdmin = location.pathname.includes(ADMIN_ROUTE);

  const handleLogin = () => {
    //some codes
  };

  const handleAdminRoute = () => {
    navigate(ADMIN_ROUTE);
  };

  return (  
    <FormControl className="flex flex-col gap-3">
      <Outlet />
      <div className="flex flex-row gap-2 items-center">
        <HandleBack />
        <Typography variant="h5" className="grow text-center">
          Login
        </Typography>
      </div>
      <TextField label="Username" fullWidth margin="normal" />
      <PasswordComponent />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      {!inAdmin && <Button onClick={handleAdminRoute}> admin pannel</Button>}
    </FormControl>
  );
};

export default Login;
