"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import toggleSidebar from "../functions/toggleSidebar";

export default function Hamburger() {
    return (
        <button onClick={toggleSidebar} className="text-3xl bg-neutral-950 bg-opacity-50 hover:bg-neutral-800 rounded-xl p-2 border border-white text-white md:hidden fixed right-4 top-4 w-fit z-50">
            <GiHamburgerMenu />
        </button>
    );
}