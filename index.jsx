import React from "react";
import ReactDOM from "react-dom/client";
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/vans/Vans.jsx";
import VanItem from "./pages/vans/VanItem.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/host/Dashboard.jsx";
import Reviews from "./pages/host/Reviews.jsx";
import Income from "./pages/host/Income.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVans from "./pages/host/HostVans.jsx";
import HostVanDetailsLayout from "./pages/host/HostVanDetailsLayout.jsx";
import HostVanDetails from "./pages/host/HostVanDetails.jsx";
import HostVanPricing from "./pages/host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/host/HostVanPhotos.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./server.js";
import Error from "./components/Error.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error/>}/>
              <Route path="vans/:id" element={<VanItem />} />
              <Route path="*" element={<NotFound/>}/>

              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="income" element={<Income />} />
                <Route path="vans" element={<HostVans />} />
                
                <Route path="vans/:id" element={<HostVanDetailsLayout />}>
                  <Route index element={<HostVanDetails />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
                </Route>
              </Route>
            </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
