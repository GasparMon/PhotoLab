import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppGetPhotos from "../controllers/AppGetPhotos";
import AppGetCollections from "../controllers/AppGetCollections";
import Home from "./components/Home";

function App() {
  return (
    <div className="main_app_div">
      <div className="main_app_navbar">
        <Navbar></Navbar>
      </div>

      <div className="main_app_container">
        <div className="main_over"></div>
        <div className="main_home">
        <div className="main_app_sidebar">
          <Sidebar></Sidebar>
        </div>

        <div className="main_app_gallery">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
