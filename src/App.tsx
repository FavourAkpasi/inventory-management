import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModalInput from "./components/ModalInput";
import Nav from "./components/Nav";
import { GlobalContext } from "./context/GlobalState";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  const { showModal } = useContext(GlobalContext);

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:typeId" element={<Details />} />
        </Routes>
        {showModal && <ModalInput />}
      </Router>
    </>
  );
}

export default App;
