import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm p-6 rounded-xl shadow-md bg-white dark:bg-gray-900"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
                    Login
                </h2>

                {/* Email */}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 p-3 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700"
                />

                {/* Password */}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-6 p-3 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700"
                />

                {/* Button */}
                <button
                    type="submit"
                    className="w-full py-3 rounded bg-blue-500 text-white hover:bg-blue-600  dark:text-black"
                >
                    Login
                </button>
            </form>
        </div>
    );
}