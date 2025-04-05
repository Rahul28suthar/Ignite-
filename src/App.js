import React from "react";
//import components and pages
import Nav from "./components/Nav";
import Home from "./pages/Home";
import "./styles/app.scss"
//imoort routing
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";



function App() {

  
  return (
    <div>
     <Nav/>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<Home />} />
        </Routes> 
      </AnimatePresence>
    </div>
  );
}

export default App;
