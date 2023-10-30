import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Card } from "./component/Card";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
