import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Footer from "./components/Footer";
import { makeServer } from "./server.js";
import VanItem from "./components/VanItem.jsx";
import Layout from "./components/Layout.jsx";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vans" element={<Vans />} />
              <Route path="/vans/:id" element={<VanItem />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
