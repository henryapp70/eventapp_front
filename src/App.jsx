import NavBar from "./components/navBar/NavBar";
import Home from "./views/Home/Home";
import NewEvent from "./views/NewEvents/NewEvent";
import { Route, Routes } from "react-router-dom";
import EventDetail from "./views/detail/EventDetail";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evento/:id" element={<EventDetail />} />
        <Route path="/crear-evento" element={<NewEvent />} />
      </Routes>
    </div>
  );
}

export default App;
