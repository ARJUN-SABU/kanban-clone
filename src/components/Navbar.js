import { useEffect } from "react";

import "../styles/Navbar.css";

function Navbar() {
  useEffect(() => {
    if (window.innerWidth <= 500) {
      document.querySelector(".navbar__right__userInfo").classList.add("hide");
      document
        .querySelector(".navbar__middle__utilityIcons")
        .classList.add("hide");
    }
  }, []);

  function toggleUserInfo() {
    if (window.innerWidth <= 500) {
      document
        .querySelector(".navbar__right__userInfo")
        .classList.toggle("hide");
      document
        .querySelector(".navbar__middle__utilityIcons")
        .classList.toggle("hide");
    }
  }

  function handleSideBarVisibility() {
    document.querySelector(".sidebar").classList.toggle("sidebar--hide");
    if (window.innerWidth <= 500) {
      document.querySelector(".navbar__right__userInfo").classList.add("hide");
      document
        .querySelector(".navbar__middle__utilityIcons")
        .classList.add("hide");
    }
  }

  return (
    <div className="navbar">
      {window.innerWidth <= 834 && (
        <div className="navbar__left">
          <img
            onClick={handleSideBarVisibility}
            src="projectImages/sidebar-logo.svg"
          />
        </div>
      )}
      <div className="navbar__middle">
        <div className="navbar__middle__searchbar">
          <img src="projectImages/search-icon.svg"></img>
          <input placeholder="Search for anything..." />
        </div>
        <div className="navbar__middle__utilityIcons">
          <img src="projectImages/calendar-utility-1.svg" />
          <img src="projectImages/message-utility-2.svg" />
          <img src="projectImages/notification-utility-3.svg" />
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__right__userAvatar" onClick={toggleUserInfo}>
          <img src="projectImages/navbar-avatar.svg" />
          <img
            className="navbar__right__dropdownarrow"
            src="projectImages/arrow-down.svg"
          />
        </div>
        <div className="navbar__right__userInfo">
          <p className="navbar__right__username">Anima Agrawal</p>
          <p className="navbar__right__userlocation">U.P, India</p>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
