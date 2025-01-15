import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import { ThemeProvider, ThemeContext } from "./components/ThemeContext";
import Timeline from "./components/Timeline/Timeline";
import { educationData } from "./data/data";
import { imageLinks } from "./data/data";
import VerticalTabs from "./components/Tab/VerticalTab";

function AppContent() {
  const { toggleTheme } = useContext(ThemeContext); // Access toggleTheme from context

  return (
    <div className="App">
      <header className="App-header">
        {/* <button
          onClick={toggleTheme}
          // className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
        >
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
        </button> */}

        <div className="w-full bg-base-200 min-h-screen">
          <VerticalTabs />
        </div>
      </header>
    </div>
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
