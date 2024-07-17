"use client";
import { FaTrashAlt } from "react-icons/fa";
import { redirect } from "next/dist/server/api-utils";
import { revalidatePath } from "next/cache";
import deletePost from "../posts/action"

export default function DeleteButton({ postId }: { postId: number }) {
    async function handleClick() {

        deletePost(postId);
            
    }

    return (
        <button onClick={handleClick} className="absolute right-3 top-3 text-sm rounded border font-bold border-black bg-red-200 hover:bg-red-500 hover:text-white">
            <FaTrashAlt className=""/>
        </button>
    );
}