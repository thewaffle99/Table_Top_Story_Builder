import { BrowserRouter, Routes, Route } from "react-router-dom";
import backGround from "../src/components/imgs/backGround.png";
import WorldCreate from "./views/WorldCreate";
import PlaceCreate from "./views/PlaceCreate";
import PlaceEdit from "./views/PlaceEdit";
import WorldEdit from "./views/WorldEdit";
import NPCCreate from "./views/NPCCreate";
import NPCEdit from "./views/NPCEdit";
import "bootstrap/dist/css/bootstrap.min.css";
import WorldsHome from "./views/WorldsHome";
import LoginReg from "./views/LoginReg";
import Profile from "./components/Profile";
function App() {
  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          backgroundImage: `url(${backGround})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Routes>
          <Route path="/" element={<LoginReg />} />
          <Route path="/home" element={<WorldsHome />} />
          <Route path="/user/profile/:userName" element={<Profile />} />
          <Route path="/createWorld" element={<WorldCreate />} />
          <Route path="/api/edit/world/:id" element={<WorldEdit />} />
          <Route path="/createPlace/:id" element={<PlaceCreate />} />
          <Route path="/api/edit/place/:id" element={<PlaceEdit />} />
          <Route path="/createNPC/:id" element={<NPCCreate />} />
          <Route path="/api/edit/npc/:id" element={<NPCEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
