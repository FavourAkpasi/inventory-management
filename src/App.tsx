import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNewTypeModal from "./components/AddNewTypeModal";
import Header from "./components/Header";
import { GlobalContext } from "./context/GlobalState";
import Home from "./pages/Home";
import AddNewMachineModal from "./components/AddNewMachineModal";
import Details from "./pages/Details";

const App = () => {
  const { showTypeModal, showMachineModal } = useContext(GlobalContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:machineTypeId" element={<Details />} />
      </Routes>

      {showTypeModal && <AddNewTypeModal />}
      {showMachineModal && <AddNewMachineModal />}
    </Router>
  );
};

export default App;
