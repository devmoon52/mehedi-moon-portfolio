import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { useContext } from "react";
import NotificationProvider from "./context/notificationContext.jsx";

// import fonts
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </HelmetProvider>,
);
