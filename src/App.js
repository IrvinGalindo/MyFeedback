import "./App.css";
import Home from "./Components/Home/Home";
import Questions from "./Components/Questions/Questions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GratitudeView from "./Components/GratitudeView/GratitudeView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/gratitude" element={<GratitudeView />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
