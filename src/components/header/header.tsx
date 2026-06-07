import "./Header.scss";

import { useNavigate } from "react-router-dom";

import BackIcon from "../../assets/icons/BackIcon";
import NotificationIcon from "../../assets/icons/NotificationIcon";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <button
        className="header__icon"
        onClick={() => navigate("/")}
      >
        <BackIcon />
      </button>

      <h1 className="header__title">
        Cargo Orders
      </h1>

      <button className="header__icon">
        <NotificationIcon />
      </button>
    </header>
  );
}