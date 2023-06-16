//styles
import "../styles/NavbarAndBoardScreen.css";

//components
import Navbar from "./Navbar";
import BoardScreen from "./BoardScreen";

function NavbarAndBoardScreen() {
  return (
    <div className="navbarAndBoardScreen">
      <Navbar />
      <BoardScreen />
    </div>
  );
}

export default NavbarAndBoardScreen;
