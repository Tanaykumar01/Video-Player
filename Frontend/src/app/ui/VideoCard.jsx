import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";


const VideoCard = ({ video, user }) => {
  return (
    <div
      key={video._id}
      className="w-[26vw] bg-[#0f0f0f] rounded-lg hover:shadow-[#383838] shadow-lg"
    >
      {/* Video thumbnail */}
      <div className="w-full h-[200px] relative">
        <Link href={`/watch/${video._id}`}>
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="rounded-t-lg"
            priority
          />
        </Link>
      </div>

      {/* Video details */}
      <div className="p-4 flex">
        {/* Channel logo */}
        <div className="h-12 w-12">
          {user && (
            <Link href={`/${user.username}/home`}>
              <Image
                src={user.avatar}
                alt="Logo"
                width={32}
                height={32}
                className="w-12 h-12 rounded-full"
                loading="lazy"
              />
            </Link>
          )}
        </div>

        {/* Video info */}
        <div className="ml-4">
          <div className="text-white text-lg font-semibold">
            <Link href={`/watch/${video._id}`}>{video.title}</Link>
          </div>
          <div className="text-gray-400 text-sm">
            {user && user.fullName}
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
  );
};

export default VideoCard;
