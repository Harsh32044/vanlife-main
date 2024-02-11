import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans.jsx";
import { makeServer } from "./server.js";
import VanItem from "./pages/vans/VanItem.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/host/Dashboard.jsx";
import Reviews from "./pages/host/Reviews.jsx";
import Income from "./pages/host/Income.jsx";
import HostLayout from "./components/HostLayout.jsx";
import VansHost from "./pages/host/VansHost.jsx";

makeServer();

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="vans" element={<Vans />} />
              <Route path="vans/:id" element={<VanItem />} />

              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="income" element={<Income />} />
                <Route path="vans" element={<VansHost />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
