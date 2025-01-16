import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { ThemeProvider, ThemeContext } from "./components/ThemeContext";
import VerticalTabs from "./components/Tab/VerticalTab";
import ProjectPage from "./pages/ProjectPage";
import Home from "./pages/Home";

function AppContent() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="w-full">
            
            <main className="w-full">
              <Routes>
                <Route path="/" element={<VerticalTabs/>} />
                <Route path="/projects/:projectId" element={<ProjectPage />} />
              </Routes>
            </main>
          </div>
        </header>
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
