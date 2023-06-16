//css
import "./App.css";

//compnents
import Sidebar from "./components/Sidebar";
import NavbarAndBoardScreen from "./components/NavbarAndBoardScreen";

function App() {
  return (
    <div className="app">
      <div className="app__sidebarContainer">
        <Sidebar />
      </div>
      <div className="app__navbarAndBoardScreenContainer">
        <NavbarAndBoardScreen />
      </div>
    </div>
  );
}

export default App;
