import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Register data:", form);
  };

  return (
    <div className="w-full max-w-md p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">
        Register
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700 transition-colors duration-300"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700 transition-colors duration-300"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700 transition-colors duration-300"
        />

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700 transition-colors duration-300"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-green-400 dark:text-black transition-colors duration-300"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}