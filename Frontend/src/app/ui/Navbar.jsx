import Search from "./Search";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navbar = () => {
    return (
        <div className="relative flex items-center justify-between px-6 py-4 bg-[#0f0f0f] border-b-2 border-[#383838]">
            {/* Start Section */}
            <div className="flex items-center space-x-6 w-[15vw]">
                <button className="cursor-pointer hover:opacity-80 transition-opacity duration-200">
                    <HamburgerMenuIcon className="w-6 h-6 text-white" />
                </button>
                <div className="flex items-center space-x-3">
                    <div className="text-white">Icon</div>
                    <div className="text-xl font-bold text-white">Logo</div>
                </div>
            </div>

            {/* Center Section */}
            <div className="flex-1 max-w-lg mx-10">
                <Search placeholder={'Search...'} />
            </div>

            {/* End Section */}
            <div className="flex items-center space-x-6">
                <div className="text-white hover:text-gray-300 cursor-pointer transition-colors duration-200">Create</div>
                <div className="text-white hover:text-gray-300 cursor-pointer transition-colors duration-200">Notification</div>
                <div className="text-white hover:text-gray-300 cursor-pointer transition-colors duration-200">Channel</div>
            </div>
        </div>
    );
}

export default Navbar;