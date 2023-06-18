//styles
import "../styles/NavbarAndBoardScreen.css";

//components
import Navbar from "./Navbar";
import BoardScreen from "./BoardScreen";
import MiddleScreen from "./MiddleScreen";

function NavbarAndBoardScreen() {
  function toggleMiddleScreen() {
    document
      .querySelector(".middlescreen")
      .classList.toggle("middlescreen--hide");
  }

  return (
    <div className="navbarAndBoardScreen">
      <Navbar />
      {window.innerWidth <= 654 && (
        <button className="middleScreenToggler" onClick={toggleMiddleScreen}>
          Click here for more options.
        </button>
      )}
      <MiddleScreen />
      <BoardScreen />
    </div>
  );
}

export default NavbarAndBoardScreen;
