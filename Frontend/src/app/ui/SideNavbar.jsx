import Link from "next/link";

const SideNavbar = () => {
    return (
        <div className="side-navbar ml-5 w-[15vw] h-full bg-[#0f0f0f] text-white text-[17px] font-bold">
            {/* Section 1: Main Navigation */}
            <div className="pt-4">
                <div className="py-3 px-4 hover:bg-[#383838] cursor-pointer">
                    <Link href="/">
                        <div  className="flex items-center space-x-4">
                            <span>🏠</span> {/* Icon placeholder */}
                            <span>Home</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] cursor-pointer">
                    <Link href="/shorts">
                        <div className="flex items-center space-x-4">
                            <span>⚡</span> {/* Icon placeholder */}
                            <span>Shorts</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] cursor-pointer">
                    <Link href="/subscriptions">
                        <div className="flex items-center space-x-4">
                            <span>📺</span> {/* Icon placeholder */}
                            <span>Subscriptions</span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#383838] my-2" />

            {/* Section 2: Library */}
            <div>
                <div className="py-3 px-4 hover:bg-[#383838] cursor-pointer">
                    <Link href="/user/channel">
                        <div className="flex items-center space-x-4">
                            <span>👤</span> {/* Icon placeholder */}
                            <span>Your Channel</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] cursor-pointer">
                    <Link href="/history">
                        <div className="flex items-center space-x-4">
                            <span>🕒</span> {/* Icon placeholder */}
                            <span>History</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] cursor-pointer hidden">
                    <Link href="/playlist">
                        <div className="flex items-center space-x-4">
                            <span>🎶</span> {/* Icon placeholder */}
                            <span>Playlists</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] cursor-pointer">
                    <Link href="/your-videos">
                        <div className="flex items-center space-x-4">
                            <span>🎥</span> {/* Icon placeholder */}
                            <span>Your Videos</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] cursor-pointer">
                    <Link href="/watch-later">
                        <div className="flex items-center space-x-4">
                            <span>⏳</span> {/* Icon placeholder */}
                            <span>Watch Later</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] cursor-pointer">
                    <Link href="/liked-videos">
                        <div className="flex items-center space-x-4">
                            <span>👍</span> {/* Icon placeholder */}
                            <span>Liked Videos</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SideNavbar;