import { Routes, Route } from "react-router-dom";
import Loginpage from "./pages/auth/landing/Loginpage";
import Profilepage from "./pages/auth/Profilepage";
import GamingWrapper from "./pages/gaming/GamingWrapper";
import GroupsWrapper from "./pages/groups/GroupsWrapper";
import Homepage from "./pages/Homepage";
import MarketplaceWrapper from "./pages/marketplace/MarketplaceWrapper";
import WatcherWrapper from "./pages/watch/WatcherWrapper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/watch" element={<WatcherWrapper />} />
        <Route path="/market" element={<MarketplaceWrapper />} />
        <Route path="/groups" element={<GroupsWrapper />} />
        <Route path="/gaming" element={<GamingWrapper />} />
      </Routes>
    </>
  );
}

export default App;
