import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/main";
import UpLoad from "./components/upLoad";

function App({ uploadService }) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="upLoad"
          element={<UpLoad uploadService={uploadService} />}
        />
      </Routes>
    </div>
  );
}

export default App;
