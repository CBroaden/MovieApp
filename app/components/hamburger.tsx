"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import toggleSidebar from "../functions/toggleSidebar";

export default function Hamburger() {
    return (
        <button onClick={toggleSidebar} className="text-3xl md:hidden fixed left-0 top-0 w-fit ml-4 mt-4 z-30">
            <GiHamburgerMenu />
        </button>
    );
}