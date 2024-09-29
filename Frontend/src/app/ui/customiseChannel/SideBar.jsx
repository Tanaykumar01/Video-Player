import Image from "next/image";
import Link from "next/link";
import { BarChartIcon, CommitIcon, DashboardIcon, MagicWandIcon, VideoIcon } from "@radix-ui/react-icons";
import { CopyrightIcon, DollarSignIcon, Music3Icon, SubtitlesIcon } from "lucide-react";
const SideBar = ({userInfo}) => {
    console.log(userInfo);
    return ( 
        <div className="side-navbar ml-5 w-[20vw] h-[90vh] bg-[#0f0f0f] text-white text-[17px] border-r-[0.5px] border-r-[#383838] sticky">
            <div className="">
                <div className="avatar flex flex-col justify-center items-center mt-3 mb-3">
                    <Link href="/user/channel/home">
                        <Image src={userInfo.avatar} alt="avatar" width={100} height={100} className="rounded-full h-[15vh] w-[9vw]"/>
                    </Link>
                    <div className="mt-2">Your channel</div>
                    <span className="text-sm text-gray-600">{userInfo.fullName}</span>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
                    <Link href="/user/dashboard">
                        <div  className="flex items-center space-x-8 text-xl">
                            <DashboardIcon width={28} height={28}/>{/* Icon placeholder */}
                            <span>Dashboard</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
                    <Link href="/user/content">
                        <div  className="flex items-center space-x-8 text-xl">
                            <VideoIcon width={28} height={28}/>{/* Icon placeholder */}
                            <span>Content</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
                    <Link href="/user/analytics">
                        <div  className="flex items-center space-x-8 text-xl">
                            <BarChartIcon width={28} height={28}/>{/* Icon placeholder */}
                            <span>Analytics</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
                    <Link href="/comments">
                        <div  className="flex items-center space-x-8 text-xl">
                            <CommitIcon width={28} height={28}/>{/* Icon placeholder */}
                            <span>Commments</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
                    <Link href="/user/subtitles">
                        <div  className="flex items-center space-x-8 text-xl">
                            <SubtitlesIcon width={28} height={28}/>{/* Icon placeholder */}
                            <span>Subtitles</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
                    <Link href="/user/copyright">
                        <div  className="flex items-center space-x-8 text-xl">
                            <CopyrightIcon width={28} height={28}/>{/* Icon placeholder */}
                            <span>Copyright</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
                    <Link href="/user/earn">
                        <div  className="flex items-center space-x-8 text-xl">
                            <DollarSignIcon width={28} height={28}/>{/* Icon placeholder */}
                            <span>Earn</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
                    <Link href="/user/customisation">
                        <div  className="flex items-center space-x-8 text-xl">
                            <MagicWandIcon width={28} height={28}/>{/* Icon placeholder */}
                            <span>Customisation</span>
                        </div>
                    </Link>
                </div>
                <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
                    <Link href="/user/audios">
                        <div  className="flex items-center space-x-8 text-xl">
                            <Music3Icon width={28} height={28}/>{/* Icon placeholder */}
                            <span>Audio Library</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default SideBar;