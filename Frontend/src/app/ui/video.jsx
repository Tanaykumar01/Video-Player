import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
const Video = ({ videos, users }) => {
  return (
    <div className="flex gap-6 p-4">
      {videos.map((video, index) => (
        <div
          key={video._id}
          className="w-[26vw] bg-[#0f0f0f] rounded-lg shadow-lg"
        >
          {/* Video thumbnail */}
          <div className="w-full h-[200px] relative">
            <Image
              src={video.thumbnail}
              alt={video.title}
              layout="fill" // Ensures the image fills the parent container
              objectFit="cover" // Ensures the image doesn't get distorted
              className="rounded-lg"
              priority
            />
          </div>

          {/* Video details */}
          <div className="p-4 flex">
            {/* Channel logo */}
            <div className="h-12 w-12">
              {users[index] && (
                <Image
                  src={users[index].avatar}
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-12 h-12 rounded-full"
                  loading="lazy"
                />
              )}
            </div>

            {/* Video info */}
            <div className="ml-4">
              <div className="text-white text-lg font-semibold">
                {video.title}
              </div>
              <div className="text-gray-400 text-sm">
                {users[index] && users[index].fullName}
              </div>
              <div className="text-gray-500 text-xs mt-1">
                {video.views} views •{" "}
                {formatDistanceToNow(new Date(video.createdAt), {
                  addSuffix: true,
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Video;
