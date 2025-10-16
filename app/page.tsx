"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-2xl w-full bg-white/80 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-10 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 text-center">
          🏥 Hospital Appointment Scheduler
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          Welcome to the appointment scheduling system. View and manage doctor schedules
          for our hospital.
        </p>

        <div className="space-y-4">
          <Link
            href="/schedule"
            className="block w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
            text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-200 shadow-md hover:shadow-xl"
          >
            🚀 Go to Schedule
          </Link>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Available Doctors:</h2>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Dr. Sarah Chen - Cardiology</li>
              <li>• Dr. Michael Rodriguez - Pediatrics</li>
              <li>• Dr. Emily Johnson - General Practice</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
