import { useEffect } from "react";
import "../styles/MiddleScreen.css";

function MiddleScreen() {
  useEffect(() => {
    if (window.innerWidth <= 654 || window.innerHeight <= 400) {
      document
        .querySelector(".middlescreen")
        .classList.add("middlescreen--hide");
    }
  }, []);

  return (
    <div className="middlescreen">
      <div className="middlescreen__top">
        <div className="middlescreen__top__left">
          <h1>Mobile App</h1>
          <img src="projectImages/middlescreen-edit-and-link.svg"></img>
        </div>
        <div className="middlescreen__top__right">
          <div className="middlescreen__top__right__invite">
            <img src="projectImages/middlescreen-invite-addbutton.svg"></img>
            <p>Invite</p>
          </div>
          <img src="projectImages/middlescreen-avatar-group.svg"></img>
        </div>
      </div>

      <div className="middlescreen__bottom">
        <div className="middlescreen__bottom__left">
          <div className="middlescreen__bottom__left__button">
            <img
              className="middlescreen__bottom__left__button__icon"
              src="projectImages/middlescreen-filter-icon.svg"
            />
            <p>Filter</p>
            <img
              className="middlescreen__bottom__left__dropdown"
              src="projectImages/arrow-down.svg"
            />
          </div>
          <div className="middlescreen__bottom__left__button">
            <img
              className="middlescreen__bottom__left__button__icon"
              src="projectImages/middlescreen-calendar.svg"
            />
            <p>Filter</p>
            <img
              className="middlescreen__bottom__left__dropdown"
              src="projectImages/arrow-down.svg"
            />
          </div>
        </div>
        <div className="middlescreen__bottom__right">
          <div className="middlescreen__bottom__right__button">
            <img
              className="middlescreen__bottom__right__button__icon"
              src="projectImages/middlescreen-share-icon.svg"
            />
            <p>Share</p>
          </div>
          <div
            style={{
              height: "25px",
              width: "1px",
              backgroundColor: "#787486",
              margin: "0 18px",
            }}
          ></div>

          <img
            className="middlescreen__bottom__right__layout__icon middlescreen__bottom__right__layout__icon__left"
            src="projectImages/middlescreen-layout-left-icon.svg"
          />
          <img
            className="middlescreen__bottom__right__layout__icon middlescreen__bottom__right__layout__icon__right"
            src="projectImages/middlescreen-layout-right-icon.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default MiddleScreen;
