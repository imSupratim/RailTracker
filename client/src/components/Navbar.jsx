import { Link, useNavigate } from "react-router-dom";
import api from "../services/api.js";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Train, TrainFront } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { user } = useAuth();

  const handleLogout = async () => {
    await api.post("/auth/logout");

    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out");

    navigate("/login");
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl flex items-center gap-1 font-bold text-blue-500 hover:bg-gray-800 px-2 rounded-2xl py-1  active:scale-95 transition ease-in-out"
        >
          <TrainFront className="text-white size-8"/> RailTracker
        </Link>

        <div className="flex gap-6">
          <Link to="/">Home</Link>

          {user ? (
            <>
              <Link to="/profile">Profile</Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 rounded-2xl px-2 cursor-pointer hover:bg-red-700 active:scale-90 transition ease-in-out"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>

              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
