"use client";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { GoPerson } from "react-icons/go";

export default function ProfilePage() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="min-h-screen bg-red-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full border border-red-200">

        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          My Profile
        </h2>


        <div className="flex justify-center mb-5">
          <div className="w-28 h-28 border rounded-full flex items-center justify-center overflow-hidden bg-white shadow">
            {user?.photoURL ? (
              <Image
                src={user.photoURL}
                alt="User Profile"
                width={120}
                height={120}
                className="object-cover rounded-full"
                unoptimized
              />
            ) : (
              <GoPerson size={60} className="text-red-500" />
            )}
          </div>
        </div>


        <div className="space-y-3 text-center">
          <p className="text-xl font-semibold text-gray-700">
            {user?.displayName || "No Name"}
          </p>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>

        {/* Extra Details (Optional) */}
        {/* Extra Details */}
        <div className="mt-6 space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">Blood Group:</span>{" "}
            {user?.bloodGroup || "Not Added"}
          </p>

          <p>
            <span className="font-semibold">Division:</span>{" "}
            {user?.division || "Not Added"}
          </p>

          <p>
            <span className="font-semibold">District:</span>{" "}
            {user?.district || "Not Added"}
          </p>

          <p>
            <span className="font-semibold">Upazila:</span>{" "}
            {user?.upazila || "Not Added"}
          </p>

          <p>
            <span className="font-semibold">Phone:</span>{" "}
            {user?.phone || "Not Added"}
          </p>

          <p>
            <span className="font-semibold">Address:</span>{" "}
            {user?.address || "Not Added"}
          </p>
        </div>

        {/* BUTTON */}
        <div className="mt-6">
          <button className="btn bg-red-600 hover:bg-red-700 text-white w-full">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}
