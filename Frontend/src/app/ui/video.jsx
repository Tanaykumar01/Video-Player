import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import VideoCard from "./VideoCard";
const Video = ({ videos, users }) => {
  return (
    <div className="flex gap-6 p-4">
      {videos.map((video, index) => (
        <VideoCard video={video} user={users[index]} key={video._id} />
      ))}
    </div>
  );
};

export default Video;
