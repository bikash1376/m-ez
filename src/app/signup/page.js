"use client"

import { useTheme } from 'next-themes';
import Link from "next/link";

const Signup = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'}`}>
      <div className={`p-8 rounded-lg shadow-lg w-full max-w-md ${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-white text-black'}`}>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-lg placeholder-gray-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 " htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg placeholder-gray-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg placeholder-gray-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-rose-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
