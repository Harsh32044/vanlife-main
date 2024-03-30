import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/vans/Vans.jsx";
import VanItem, { loader as vanItemLoader } from "./pages/vans/VanItem.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/host/Dashboard.jsx";
import Reviews from "./pages/host/Reviews.jsx";
import Income from "./pages/host/Income.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVans, {loader as hostVansLoader } from "./pages/host/HostVans.jsx";
import HostVanDetailsLayout, { loader as hostVanDetailsLoader } from "./pages/host/HostVanDetailsLayout.jsx";
import HostVanDetails from "./pages/host/HostVanDetails.jsx";
import HostVanPricing from "./pages/host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/host/HostVanPhotos.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login, {loader as loginLoader, action as loginAction} from "./pages/Login.jsx";
import Error from "./components/Error.jsx";

import "./server.js";
import { requireAuth } from "./utils.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route 
        path="login" 
        element={<Login />} 
        loader={loginLoader}
        action={loginAction}/>
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route 
        path="vans/:id" 
        element={<VanItem />}
        loader={vanItemLoader} />
      <Route path="*" element={<NotFound />} />

      <Route 
        path="host" 
        element={<HostLayout />}>
        <Route 
          index 
          element={<Dashboard />} 
          loader={async ({request}) => await requireAuth(request)} />
        <Route 
          path="reviews" 
          element={<Reviews />} 
          loader={async ({request}) => await requireAuth(request)} />
        <Route 
          path="income" 
          element={<Income />} 
          loader={async ({request}) => await requireAuth(request)} />
        <Route 
          path="vans" 
          element={<HostVans />} 
          loader={hostVansLoader} />

        <Route 
          path="vans/:id" 
          element={<HostVanDetailsLayout />} 
          loader={hostVanDetailsLoader}>
            
          <Route index element={<HostVanDetails />} loader={async ({request}) => await requireAuth(request)} />
          <Route path="pricing" element={<HostVanPricing />} loader={async ({request}) => await requireAuth(request)}/>
          <Route path="photos" element={<HostVanPhotos />} loader={async ({request}) => await requireAuth(request)}/>
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
