import React from "react";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-gray-900 min-w-screen min-h-screen ">
      <Home />
      <Footer />
    </div>
  );
};

export default App;
