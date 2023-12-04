/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { dbConnect } from "./utils/mongoose";
async function loadTasks() {
  await dbConnect();
}
function Dashboard() {
  const [xeroAuth, setXeroAuth] = useState(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (typeof window !== null) {
      const authFound = localStorage.getItem("xero-auth");
      if (authFound) {
        setXeroAuth(JSON.parse(authFound));
      }
    }
  }, []);

  console.log(xeroAuth);

  const getContacts = async () => {
    try {
      const { data } = await axios.get(
        `/api/contacts?access_token=${xeroAuth.access_token}`
      );

      console.log("contacts=>", data);
      setContacts(JSON.stringify(data.Contacts));
    } catch (err) {
      console.log(err);
    }
  };

  const buttonStyles = {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  };
  loadTasks();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={getContacts} style={buttonStyles}>
        Get Contacts
      </button>

      <p>{contacts}</p>
    </div>
  );
}

export default Dashboard;
