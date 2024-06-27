import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Login, SideBar } from "../components/admin";
import Home from "./Home";

import axios from "axios";
import { apiUrl } from "../constant/variables";

export default function AdminPage() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      const token = localStorage.getItem("jwt");
      if (token) {
        axios
          .get(`${apiUrl}/admin/getUser`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log("User data:", response.data);
            setUserData(response.data);
          })
          .catch((error) => {
            console.log(error);
            navigate("/login");
            // Handle errors (e.g., redirect to login page, show error message)
          });
      } else {
        navigate("/login");
      }
    };

    fetchUserData();
  }, []);

  return <Home />;
}

