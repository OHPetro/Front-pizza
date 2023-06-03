import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import logo from "../assets/img/logo.jpg";
import { useSelector } from "react-redux";

const Header = () => {
  const { itemsCart, totalCount, totalPrice } = useSelector((state) => state.cart);
  const isMounted = React.useRef(false);

  let location = useLocation();
  let isButton = location.pathname !== "/cart" ? true : false;

  React.useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("cart", JSON.stringify(itemsCart));
      localStorage.setItem("count", JSON.stringify(totalCount));
      localStorage.setItem("price", JSON.stringify(totalPrice));
    }
    isMounted.current = true;
  }, [itemsCart]);

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img src={logo} alt="" width={120} height={80} />
        </div>
      </Link>
      {isButton && <Button />}
    </header>
  );
};

export default Header;
