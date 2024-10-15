"use client"; // This component is a client component

import hitRequest from "@/api/hitReq";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

// Video player component
export default function VideoPlayer() {
  const { videoId } = useParams(); // Get the video ID from the URL parameters
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await hitRequest(`/videos/${videoId}`, "GET");
        console.log(res.data);
        setVideo(res.data); // Assuming res.data contains the video URL
      } catch (err) {
        console.error(err);
        setError("Failed to load video");
      }
    };
    
    fetchVideo();
  }, [videoId]);

  if (error) {
    return <div>{error}</div>; // Render error message if there's an error
  }

  if (!video) {
    return <div>Loading...</div>; // Render loading state while fetching video
  }

  return (
    <div className="w-[100vw] mt-3">
      <h1>Video Player</h1>
      <video controls className="h-[60vh] w-[60vw]">
        <source src={video.videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Now playing: {video.title}</p>
    </div>
  );
}