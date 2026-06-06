import "./Header.scss";

import BackIcon from "../../assets/icons/BackIcon";
import NotificationIcon from "../../assets/icons/NotificationIcon";

export default function Header() {
  return (
    <header className="header">
      <button className="header__icon">
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