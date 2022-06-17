import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Landingpage from "./pages/Landingpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/base" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
