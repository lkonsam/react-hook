import InputFocus from "./components/InputFocus/InputFocus";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyComponent from "./components/UseMemo/MyComponent";
import ParentComponent from "./components/UseCallback/ParentComponent";
import "./App.css";
import ParentContextComponent from "./components/UseContextComponent/ParentContextComponent";
import CustomHook from "./components/CustomHook/CustomHook";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/input-focus">Input Focus</Link>
            </li>
            <li>
              <Link to="/parent-component">Use Callback</Link>
            </li>
            <li>
              <Link to="/my-component">Use Memo</Link>
            </li>
            <li>
              <Link to="/my-context">Use Context</Link>
            </li>
            <li>
              <Link to="/my-custom-hook">Custom Hook</Link>
            </li>
          </ul>
        </nav>
        <br />
        <br />
        <Routes>
          <Route path="/input-focus" element={<InputFocus />} />
          <Route path="/parent-component" element={<ParentComponent />} />
          <Route path="/my-component" element={<MyComponent />} />
          <Route path="/my-context" element={<ParentContextComponent />} />
          <Route path="/my-custom-hook" element={<CustomHook />} />
          <Route path="/" element={<h1>Welcome to the App!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
