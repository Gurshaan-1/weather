import HomePage from "./pages/Homepage/HomePage";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import "./App.css";
import { auth } from "./Services/firebase/firebase";
import { DataProvider } from "./context/DataContext";


function App() {
  const initialState = localStorage.getItem("username");
  const [isAuthenticated, setIsAuthenticated] = useState(!!initialState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
        localStorage.setItem("username", user.displayName); // Store username if available
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem("username"); // Clear username on logout
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/map" element={<MapComponent />} /> */}
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
