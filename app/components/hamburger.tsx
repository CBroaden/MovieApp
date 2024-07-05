"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import toggleSidebar from "../functions/toggleSidebar";

export default function Hamburger() {
    return (
        <button onClick={toggleSidebar} className="text-3xl md:hidden fixed right-4 top-4 w-fit z-30">
            <GiHamburgerMenu />
        </button>
    );
}