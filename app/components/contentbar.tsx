"use client"
import Featured from "./featured";
import SearchBar from "./searchbar";


export default function ContentBar() {
    return (
        <div className="h-full w-full bg-white md:w-[25%] px-1 font-bold flex flex-col md:fixed md:border-l border-black md:right-0 md:top-0">
            <SearchBar />
            <Featured />
        </div>
    )
}