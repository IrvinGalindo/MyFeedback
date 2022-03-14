import "./App.css";
import Home from "./Components/Home/Home";
import Questions from "./Components/Questions/Questions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GratitudeView from "./Components/GratitudeView/GratitudeView";
import ResultsView from "./Components/ResultsView/ResultsView";
import { Provider } from "react-redux";
import { store } from "./Services/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/gratitude" element={<GratitudeView />} />
            <Route path="/Results" element={<ResultsView />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
