import Link from "next/link";
const SideNavbar = () => {
  return (
    <div
      className={`side-navbar ml-5 w-[15vw] h-[90vh] bg-[#0f0f0f] text-white text-[17px] font-bold overflow-y-scroll scrollbar-none`}
    >
      {/* Section 1: Main Navigation */}
      <div className="pt-4">
        <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
          <Link href="/">
            <div className="flex items-center space-x-4">
              <span>🏠</span> {/* Icon placeholder */}
              <span>Home</span>
            </div>
          </Link>
        </div>
        <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
          <Link href="/shorts">
            <div className="flex items-center space-x-4">
              <span>⚡</span> {/* Icon placeholder */}
              <span>Shorts</span>
            </div>
          </Link>
        </div>
        <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
          <Link href="/tweet">
            <div className="flex items-center space-x-4">
              <span>𝐗</span> {/* Icon placeholder */}
              <span>Tweet</span>
            </div>
          </Link>
        </div>
        <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
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
        <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
          <div className="flex items-center space-x-4">
            <span>You --:</span>
          </div>
        </div>
        <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
          <Link href="/user/channel/home">
            <div className="flex items-center space-x-4">
              <span>👤</span> {/* Icon placeholder */}
              <span>Your Channel</span>
            </div>
          </Link>
        </div>
        <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
          <Link href="/history">
            <div className="flex items-center space-x-4">
              <span>🕒</span> {/* Icon placeholder */}
              <span>History</span>
            </div>
          </Link>
        </div>
        <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
          <Link href="/playlist">
            <div className="flex items-center space-x-4">
              <span>🎶</span> {/* Icon placeholder */}
              <span>Playlists</span>
            </div>
          </Link>
        </div>
        <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
          <Link href="/your-videos">
            <div className="flex items-center space-x-4">
              <span>🎥</span> {/* Icon placeholder */}
              <span>Your Videos</span>
            </div>
          </Link>
        </div>
        <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
          <Link href="/watch-later">
            <div className="flex items-center space-x-4">
              <span>⏳</span> {/* Icon placeholder */}
              <span>Watch Later</span>
            </div>
          </Link>
        </div>
        <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
          <Link href="/liked-videos">
            <div className="flex items-center space-x-4">
              <span>👍</span> {/* Icon placeholder */}
              <span>Liked Videos</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#383838] my-2" />

      {/* Section 3: Subscriptions */}
      <div>
        <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
          {/* <Link href="/user/channel"> */}
          <div className="flex items-center space-x-4">
            {/* <span>👤</span> Icon placeholder */}
            <span>Subscriptions</span>
          </div>
          {/* </Link> */}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#383838] my-2" />

      {/* Section 4: More from YouTube */}
      <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
        <Link href="/user/channel">
          <div className="flex items-center space-x-4">
            {/* <span>👤</span> Icon placeholder */}
            <span>Explore</span>
          </div>
        </Link>
      </div>
      <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
        <Link href="/user/channel">
          <div className="flex items-center space-x-4">
            <span>👤</span> {/* Icon placeholder */}
            <span>Trending</span>
          </div>
        </Link>
      </div>
      <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
        <Link href="/history">
          <div className="flex items-center space-x-4">
            <span>🕒</span> {/* Icon placeholder */}
            <span>Shoping</span>
          </div>
        </Link>
      </div>
      <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
        <Link href="/playlist">
          <div className="flex items-center space-x-4">
            <span>🎶</span> {/* Icon placeholder */}
            <span>Music</span>
          </div>
        </Link>
      </div>
      <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
        <Link href="/your-videos">
          <div className="flex items-center space-x-4">
            <span>🎥</span> {/* Icon placeholder */}
            <span>Films</span>
          </div>
        </Link>
      </div>
      <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
        <Link href="/watch-later">
          <div className="flex items-center space-x-4">
            <span>⏳</span> {/* Icon placeholder */}
            <span>Live</span>
          </div>
        </Link>
      </div>
      <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
        <Link href="/liked-videos">
          <div className="flex items-center space-x-4">
            <span>👍</span> {/* Icon placeholder */}
            <span>Gaming</span>
          </div>
        </Link>
      </div>
      <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
        <Link href="/liked-videos">
          <div className="flex items-center space-x-4">
            <span>👍</span> {/* Icon placeholder */}
            <span>News</span>
          </div>
        </Link>
      </div>
      <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
        <Link href="/liked-videos">
          <div className="flex items-center space-x-4">
            <span>👍</span> {/* Icon placeholder */}
            <span>Sports</span>
          </div>
        </Link>
      </div>
      <div className="py-3 px-4 hover:bg-[#383838] hover:rounded-2xl cursor-pointer">
        <Link href="/liked-videos">
          <div className="flex items-center space-x-4">
            <span>📝</span> {/* Icon placeholder */}
            <span>Courses</span>
          </div>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default SideNavbar;
