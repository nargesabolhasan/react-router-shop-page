import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { NavLink } from "react-router";
import {
  BASKET_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  SIGNIN_ROUTE,
} from "../../constant/routes";
import BadgeCompoenet from "./badge";

export default function HeaderComponent() {
  const headerItems = [
    {
      id: 1,
      name: "Home",
      to: HOME_ROUTE,
    },
    {
      id: 2,
      name: "Login",
      to: LOGIN_ROUTE,
    },
    {
      id: 3,
      name: "Sign",
      to: SIGNIN_ROUTE,
    },
    {
      id: 4,
      name: <BadgeCompoenet />,
      to: BASKET_ROUTE,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, width: 1 }}>
      <AppBar position="static">
        <Toolbar className="flex justify-between items-between w-full">
          {headerItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "bg-sky-300 rounded-full p-1 text-gray-600" : ""
              }
            >
              {item.name}
            </NavLink>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
