import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext to access current theme and switch function
import { Link } from "react-router-dom"; // Link from React Router for navigation

export default function SideBar() {
    // Destructure theme and switchTheme from ThemeContext
    const { theme, switchTheme } = useContext(ThemeContext);

    return (
        // Sidebar container with fixed position, full height, shadow, padding, and white border
        <aside className="fixed top-0 left-0 h-screen w-64 dark:bg-gray-900 shadow-md p-6 flex flex-col justify-between z-50 text-white border-r border-r-white">

            {/* Top section: logo and navigation links */}
            <div>
                {/* Centered logo */}
                <div className="flex justify-center">
                    <img
                        alt="DummyLogo"
                        src="images/dummy_logo.png"
                        className="h-12 w-24 object-cover"
                        loading="lazy" // Improve performance by delaying load
                    />
                </div>

                {/* Navigation links with vertical spacing */}
                <nav className="space-y-6 mt-10">
                    <Link to="/" className="hover:underline block">Home</Link>
                    <Link to="/about" className="hover:underline block">About</Link>
                    <Link to="/contact" className="hover:underline block">Contact</Link>
                </nav>
            </div>

            {/* Bottom section: theme switcher dropdown */}
            <div className="mt-10">
                <select
                    className="border px-2 py-1 rounded w-full bg-gray-900"
                    value={theme}
                    onChange={(e) => switchTheme(e.target.value)} // Call context function to switch theme
                >
                    <option value="theme1">Theme 1</option>
                    <option value="theme2">Theme 2</option>
                    <option value="theme3">Theme 3</option>
                </select>
            </div>
        </aside>
    );
}
