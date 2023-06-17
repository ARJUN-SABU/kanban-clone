//styles
import "../styles/NavbarAndBoardScreen.css";

//components
import Navbar from "./Navbar";
import BoardScreen from "./BoardScreen";
import MiddleScreen from "./MiddleScreen";

function NavbarAndBoardScreen() {
  return (
    <div className="navbarAndBoardScreen">
      <Navbar />
      <MiddleScreen />
      <BoardScreen />
    </div>
  );
}

export default NavbarAndBoardScreen;
