import Link from "next/link"

const page = ({children}) => {
    return (
        <div className="w-[80vw]">
            <div className="relative h-[screen] overflow-y-scroll scrollbar-none">
                <h1 className="m-8 text-xl font-bold">Channel content</h1>
                <div className="ml-8 nav flex items-center justify-between w-[80vw]">
                    <div className="flex space-x-14">
                        <Link href="/user/studio/content/video">Video</Link>
                        <Link href="/user/studio/content/shorts">Shorts</Link>
                        <Link href="/user/studio/content/live">Live</Link>
                        <Link href="/user/studio/content/posts">Posts</Link>
                        <Link href="/user/studio/content/playlist">Playlist</Link>
                        <Link href="/user/studio/content/podcast">Podcasts</Link>
                    </div>
                </div>
                {/* Divider */}
                <div className="w-[80vw] h-[1px] bg-[#383838] my-2" />
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default page