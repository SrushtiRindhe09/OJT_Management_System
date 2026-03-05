import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {

    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      formData
    );

    const { token, user } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login successful!");

    switch (user.role) {
      case "student":
        navigate("/student/StudentDashboard");
        break;
      case "coordinator":
        navigate("/coordinator/dashboard");
        break;
      case "company":
        navigate("/company/dashboard");
        break;
      case "admin":
        navigate("/admin/dashboard");
        break;
      default:
        navigate("/");
    }

  } catch (error: any) {

    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("Login failed");
    }

    console.error(error);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-md"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-md"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700"
          >
            Sign In
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-indigo-600 cursor-pointer"
          >
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signin;