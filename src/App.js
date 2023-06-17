//css
import "./App.css";

//compnents
import Sidebar from "./components/Sidebar";
import NavbarAndBoardScreen from "./components/NavbarAndBoardScreen";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <NavbarAndBoardScreen />
    </div>
  );
}

export default App;
