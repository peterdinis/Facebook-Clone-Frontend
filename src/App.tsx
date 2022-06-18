import { Routes, Route } from "react-router-dom";
import Profilepage from "./pages/auth/Profilepage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profilepage />} />
      </Routes>
    </>
  );
}

export default App;
