import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import Error from "./Error.jsx";
import Image_hosting from "./Components/Navigation/Image_hosting.jsx";
import Login from "./Components/Auth/Login.jsx";
import Registration from "./Components/Auth/Registration.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/all_image" element={<Image_hosting />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
    />
  </BrowserRouter>
);
