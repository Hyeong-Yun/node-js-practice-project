import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import UpLoad from "./pages/upLoad";

function App({ contentService }) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main contentService={contentService} />} />
        <Route
          path="upLoad"
          element={<UpLoad contentService={contentService} />}
        />
      </Routes>
    </div>
  );
}

export default App;
