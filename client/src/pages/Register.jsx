import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { checkAuth } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      email,
      password,
      confirmPassword,
    } = formData;

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return toast.error("Please fill all fields");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      await checkAuth();
      toast.success("Registration Successful");

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">

      <div className="w-full max-w-md bg-slate-900 rounded-xl shadow-lg border border-slate-800 p-8">

        <h1 className="text-3xl font-bold text-center mb-2">

          Create Account

        </h1>

        <p className="text-center text-slate-400 mb-8">

          Join RailTracker

        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2">

              Name

            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>

          <div>

            <label className="block mb-2">

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

            <label className="block mb-2">

              Password

            </label>

            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>

          <div>

            <label className="block mb-2">

              Confirm Password

            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3 font-semibold disabled:opacity-60"
          >

            {loading
              ? "Creating Account..."
              : "Register"}

          </button>

        </form>

        <p className="text-center mt-6 text-slate-400">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-500 hover:underline"
          >

            Login

          </Link>

        </p>

      </div>

    </div>
  );
}