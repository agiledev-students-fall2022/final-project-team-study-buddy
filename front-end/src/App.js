import "./App.css";
import Home from "./Home.js";
import More from "./More/More.js";
import Results from "./Results/Results.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <main className="App-main">
          <Routes>
            {/* a route for the home page */}
            <Route path="/" element={<Home />} />

            {/* a route for more */}
            <Route path="/more" element={<More />} />

            {/* a route to see list of results */}
            <Route path="/results" element={<Results />} />

            {/* a route to see list of results */}
            <Route
              path="*"
              element={
                <div>
                  <h1>Page Does Not Exist</h1>
                </div>
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
