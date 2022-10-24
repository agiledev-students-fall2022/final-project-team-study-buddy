import "./App.css";
import More from "./More";
import Results from "./Results/Results.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <main className="App-main">
          <Routes>
            {/* a route for the home page */}
            <Route
              path="/more"
              default
              element={
                <div>
                  <h1>Study Buddy</h1>
                </div>
              }
            />

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
