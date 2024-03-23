import CreateNewEvent from "./components/forms/createEvent/CreateNewEvent";
import NavBar from "./components/navBar/NavBar";
import Home from "./views/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crear-evento" element={<CreateNewEvent />} />
      </Routes>
    </div>
  );
}

export default App;
