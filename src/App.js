import "./App.css";
import Home from "./Components/Home/Home";
import Questions from "./Components/Questions/Questions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GratitudeView from "./Components/GratitudeView/GratitudeView";
import ResultsView from "./Components/Results/ResultsView/ResultsView";
import { Provider } from "react-redux";
import { store } from "./Services/redux/store";
import UserInfo from "./Components/Questions/UserInfo/UserInfo";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/User-info" element={<UserInfo />} />
            <Route path="/Questions" element={<Questions />} />
            <Route path="/Gratitude" element={<GratitudeView />} />
            <Route path="/Results" element={<ResultsView />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
