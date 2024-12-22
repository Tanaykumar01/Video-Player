"use client";
import { useEffect, useRef, useState } from "react";
import { Cross1Icon, UploadIcon } from "@radix-ui/react-icons";
import VideoDetails from "./VideoDetails";

const UploadVideo = ({ setUploadVideos }) => {
  const [video, setVideo] = useState(null);
  

  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    console.log(file);
  };

  return (
    <div className="relative h-[90vh] w-[60vw] bg-[#1a1a1a] rounded-2xl border-2 border-[#383838]">
      {!video && (
        <>
          <div className="flex justify-between items-center">
            <div className="text-white text-xl ml-8 my-5 font-mono">
              Upload video
            </div>
            <div
              className="text-white text-lg mr-8 my-5 cursor-pointer"
              onClick={() => setUploadVideos(false)}
            >
              <Cross1Icon height={30} width={30} />
            </div>
          </div>
          {/* Divider */}
          <div className="w-[60vw] h-[1px] bg-[#383838]" />
          <div className="flex justify-center items-center mt-[15vh]">
            <div
              className="w-[15vw] h-[26vh] bg-[#7a7a7a] hover:bg-[#6a6a6a] rounded-full flex justify-center items-center text-center"
              onClick={handleButtonClick}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleVideoUpload}
                style={{ display: "none" }}
              />
              <UploadIcon height={40} width={40} />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-6">
            Drag and drop video files to upload
            <span className="font-mono font-thin text-xs mt-2 text-[#7a7a7a]">
              Your videos will be private until you publish them.
            </span>
          </div>
          <div className="flex justify-center items-center mt-8">
            <button
              className="bg-[#7a7a7a] hover:bg-[#6a6a6a] py-2 px-4 rounded-full"
              onClick={handleButtonClick}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleVideoUpload}
                style={{ display: "none" }}
              />
              Upload
            </button>
          </div>
          <div className="absolute left-[10%] text-center text-xs text-[#7a7a7a] bottom-0 p-4 mb-2">
            <div>
              By submitting your videos to YouTube, you acknowledge that you
              agree to Streamline's{" "}
              <span className="text-[#3f3fff]">Terms of Service</span> and{" "}
              <span className="text-[#3f3fff]">Community Guidelines</span>.
            </div>
            <span>
              Please make sure that you do not violate others' copyright or
              privacy rights. <span className="text-[#3f3fff]">Learn more</span>
            </span>
          </div>
        </>
      )}
      {video && (
        <>
          <VideoDetails video={video} videoUrl={URL.createObjectURL(video)} setUploadVideos={setUploadVideos} />
        </>
      )}
    </div>
  );
};

export default UploadVideo;
