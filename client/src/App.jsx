import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import TrainDetails from "./pages/TrainDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchResult />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/train/:trainNumber" element={<TrainDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
