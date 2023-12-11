import React from "react";
import "./style/style.css";
import Pages from "./pages/Pages";
import Navbar from "./components/hero/Navbar";
import Footer from "./components/reusable/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
