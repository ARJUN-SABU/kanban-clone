//libraries and modules
import { useEffect } from "react";

//styles
import "../styles/Sidebar.css";

function Sidebar() {
  useEffect(() => {
    if (window.innerWidth <= 834)
      document.querySelector(".sidebar").classList.add("sidebar--hide");
  }, []);

  function handleSideBarVisibility() {
    if (window.innerWidth <= 834) {
      document.querySelector(".sidebar").classList.toggle("sidebar--hide");
    }

    if (window.innerWidth <= 500) {
      document.querySelector(".navbar__right__userInfo").classList.add("hide");
      document
        .querySelector(".navbar__middle__utilityIcons")
        .classList.add("hide");
    }
  }
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__top__left">
          <img src="projectImages/sidebar-logo.svg" />
          <h1>Project M.</h1>
        </div>
        <img
          onClick={handleSideBarVisibility}
          src="projectImages/sidebar-top-backicon.svg"
        />
      </div>

      <div className="sidebar__middle">
        <div className="sidebar__middle__category">
          <img src="projectImages/sidebar-menu-logo1.svg" alt="Home Icon" />
          <p>Home</p>
        </div>

        <div className="sidebar__middle__category">
          <img src="projectImages/sidebar-menu-logo2.svg" alt="Messages Icon" />
          <p>Messages</p>
        </div>
        <div className="sidebar__middle__category">
          <img src="projectImages/sidebar-menu-logo3.svg" alt="Tasks Icon" />
          <p>Tasks</p>
        </div>
        <div className="sidebar__middle__category">
          <img src="projectImages/sidebar-menu-logo4.svg" alt="Members Icon" />
          <p>Members</p>
        </div>
        <div className="sidebar__middle__category">
          <img src="projectImages/sidebar-menu-logo5.svg" alt="Settings Icon" />
          <p>Settings</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottom__title">
          <p>MY PROJECTS</p>
          <img src="projectImages/sidebar-bottom-add-icon.svg" alt="add icon" />
        </div>

        <div className="sidebar__bottom__categorySection">
          <div className="sidebar__bottom__category sidebar__bottom__categoryFirst">
            <div className="sidebar__bottom__category__left">
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "100%",
                  backgroundColor: "#7AC555",
                }}
              ></div>
              <p>Mobile App</p>
            </div>
            <img
              src="projectImages/menu-selector-dots.svg"
              alt="menu selection dots"
            />
          </div>

          <div className="sidebar__bottom__category">
            <div className="sidebar__bottom__category__left">
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "100%",
                  backgroundColor: "#FFA500",
                }}
              ></div>
              <p>Website Redesign</p>
            </div>
          </div>

          <div className="sidebar__bottom__category">
            <div className="sidebar__bottom__category__left">
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "100%",
                  backgroundColor: "#E4CCFD",
                }}
              ></div>
              <p>Design System</p>
            </div>
          </div>

          <div className="sidebar__bottom__category">
            <div className="sidebar__bottom__category__left">
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "100%",
                  backgroundColor: "#76A5EA",
                }}
              ></div>
              <p>Wireframes</p>
            </div>
          </div>
        </div>

        <div className="sidebar__bottom__card">
          <div className="sidebar_bottom__card__lampContainer">
            <div className="sidebar_bottom__card__lampParent">
              <img src="projectImages/sidebar-bottom-card-lamp-icon.svg" />
            </div>
          </div>

          <div className="sidebar__bottom__card__contentBox">
            <h3>Thoughts Time</h3>
            <p>
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <input placeholder="Write a message"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
