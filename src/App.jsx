import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./routes/login";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";

function App() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, [setUserData]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Root userData={userData} setUserData={setUserData} />}
      />
      <Route path="/login" element={<Login setUserData={setUserData} />} />
      <Route
        path="*"
        element={<ErrorPage userData={userData} setUserData={setUserData} />}
      />
    </Routes>
  );
}

export default App;
