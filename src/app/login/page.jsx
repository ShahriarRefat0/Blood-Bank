"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [error, setError] = useState("");
  const { signInWithGoogle } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();

console.log('login with pass')
  };

  const handleGoogle = () => {
        signInWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="min-h-screen min-w-screen mx-auto bg-red-50 flex items-center justify-center px-5">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 border border-red-200">
        {/* HEADER */}
        <h1 className="text-3xl font-bold text-center text-red-600">
          BloodBank
        </h1>
        <p className="text-center text-gray-600 mt-1 mb-6">
          Log in to save lives
        </p>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <p className="text-red-600 text-center font-semibold">{error}</p>
          )}

          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full mt-1"
              placeholder="example@email.com"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full mt-1"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn bg-red-600 hover:bg-red-700 w-full text-white"
          >
            Login
          </button>
        </form>

        {/* OR DIVIDER */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px bg-gray-200 w-full"></div>
          <p className="text-sm text-gray-500">OR</p>
          <div className="h-px bg-gray-200 w-full"></div>
        </div>

        {/* GOOGLE LOGIN */}
        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full border-red-400 text-red-600"
        >
          <FcGoogle />
           Continue with Google
        </button>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-600 mt-5">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-red-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
