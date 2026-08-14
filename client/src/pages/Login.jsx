import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { checkAuth } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/login", formData);

      localStorage.setItem("user", JSON.stringify(res.data.user));
      await checkAuth();

      toast.success("Login Successful");

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md bg-slate-900 rounded-xl shadow-lg p-8 border border-slate-800">

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-center text-slate-400 mb-8">
          Login to RailTracker
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2 text-sm">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3 font-semibold disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-6 text-slate-400">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-blue-500 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>
    </div>
  );
}