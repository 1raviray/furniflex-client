import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Hide = ({ children }) => {
  let locate = useLocation();
  const [show, Setshow] = useState(true);
  useEffect(() => {
    if (
      locate.pathname === "/admin" ||
      locate.pathname === "/dashboardqwsfrnullnbhhj123nkc" ||
      locate.pathname === "/signup" ||
      locate.pathname === "/login"
    ) {
      Setshow(false);
    } else {
      Setshow(true);
    }
  });
  return <div>{show && children}</div>;
};

export default Hide;
