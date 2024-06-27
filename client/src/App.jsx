import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/AdminPage";

import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";
import { AddCourse, AddTeacher, AddUpcomingCourse, Welcome } from "./components/admin";

const router = createBrowserRouter([
  {
    path: "",
    element: <LandingPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
    children: [
      { path: "", element: <Welcome /> },
      { path: "addcourse", element: <AddCourse /> },
      { path: "addteacher", element: <AddTeacher /> },
      { path: "addupc", element: <AddUpcomingCourse /> },
      { path: "*", element: <PageNotFound/> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-poppins">
      <RouterProvider router={router} />
      {/* <LandingPage/> */}
      {/* <AdminPage/> */}
    </div>
  );
}

export default App;
