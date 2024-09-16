import Search from "./Search";

const Navbar = () => {
    return (
        <div className="relative flex items-center justify-between px-4 py-2 m-5">
            {/* Start Section */}
            <div className="flex items-center space-x-4 w-[15vw] border-gray-50">
                <div className="cursor-pointer">H</div>
                <div className="flex items-center space-x-2">
                    <div>Icon</div>
                    <div className="font-bold">Logo</div>
                </div>
            </div>

            {/* Center Section */}
            <div className="mx-5">
                <Search placeholder={'search'} />
            </div>

            {/* End Section */}
            <div className="flex justify-center items-center space-x-4">
                <div className="">create</div>
                <div className="">notification</div>
                <div className="">channel</div>
            </div>
        </div>
    );
}

export default Navbar;