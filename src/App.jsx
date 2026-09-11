import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "nprogress/nprogress.css";
import { lazy, Suspense, useEffect } from "react";
import ProgressBar from "./components/wrapper/ProgressBar";
import nProgress from "nprogress";

import { NotificationContext } from "./context/NotificationContext";
import { useContext } from "react";
import { AnimatePresence } from "motion/react";

nProgress.configure({ showSpinner: false, speed: 400 });

const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/ProjectsPage"));

import ToastMessage from "./components/ToastMessage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProgressBar key={"home"}>
        <Homepage />
      </ProgressBar>
    ),
  },
  {
    path: "/about",
    element: (
      <ProgressBar key={"about"}>
        <About />
      </ProgressBar>
    ),
  },
  {
    path: "/contact",
    element: (
      <ProgressBar key={"contact"}>
        <Contact />
      </ProgressBar>
    ),
  },
  {
    path: "/projects",
    element: (
      <ProgressBar key={"projects"}>
        <Projects />
      </ProgressBar>
    ),
  },
]);

function App() {
  const { notification, setNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (!notification.show) return;

    const timer = setTimeout(() => {
      setNotification({ type: "", show: false, message: "" });
    }, 4000);

    return () => clearTimeout(timer);
  }, [notification.show]);

  const { show, message, type } = notification;

  return (
    <>
      <AnimatePresence>
        {show && type === "toastbar" && <ToastMessage message={message} />}
      </AnimatePresence>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
