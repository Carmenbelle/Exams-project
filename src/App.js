import "./App.css";
// import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundary } from "./Components/ErrorBoundary";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import ErrorTest from "./Components/ErrorTest";
import NoMatch from "./Components/NoMatch";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/error" element={<ErrorTest />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
