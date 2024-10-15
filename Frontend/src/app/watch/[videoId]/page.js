import VideoPlayer from "@/app/ui/video/Videoplayer";


export async function generateMetadata({ params }) {
  const { videoId } = params; // Use the correct parameter name
  return {
    title: `Watch Video ${videoId}`,
  };
}

export default async function VideoDetails({ params }) {
  return (
    <div>
      <VideoPlayer />
    </div>
  );
}