import Image from "next/image"

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    user: User,
    pagetype: string,
}

export default function UserCard({ user, pagetype }: Props) {

    console.log(user)
    

    const greeting = user?.name ? (
        <div className="flex flex-col items-center p-1 rounded-lg font-bold text-xl text-black">
            Hello {user?.name} !
        </div>
    ) : null

    const emailDisplay = user?.email ? (
        <div className="flex flex-col items-center p-1  rounded-lg font-bold text-xl text-black">
            {user?.email}
        </div>
    ) : null

    const userImage = user?.image ? (
        <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-2"
            src={user?.image}
            width={100}
            height={100}
            alt={user?.name ?? "Profile Pic"}
            priority={true}
        />
    ) : null

    return (
        <section className="flex flex-col gap-4">
            {greeting}
            {emailDisplay}
            {userImage}
            <p className="text-2xl  text-center">{pagetype} Page!</p>
        </section>
    )
}