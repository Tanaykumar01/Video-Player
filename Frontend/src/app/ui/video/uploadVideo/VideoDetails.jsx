import { useState, useEffect, useRef } from "react";
import { CopyIcon, Cross1Icon } from "@radix-ui/react-icons";
import { ImagePlusIcon } from "lucide-react";
const VideoDetails = ({ video, videoUrl, setUploadVideos }) => {
  const [formSection, setFormSection] = useState(1);
  const [title, setTitle] = useState(video?.name.split(".")[0]);

  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    setTitle(video?.name.split(".")[0]);
  }, [video]);

  return (
    <div className="relative publish-video-form h-full flex flex-col">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl ml-8 my-5 font-mono">{title}</div>
        <div
          className="text-white text-lg mr-8 my-5 cursor-pointer"
          onClick={() => setUploadVideos(false)}
        >
          <Cross1Icon height={30} width={30} />
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#383838]" />

      <div className="flex justify-center space-x-12 my-2">
        {["Details", "Video elements", "Checks", "Visibility"].map(
          (item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center cursor-pointer px-4 py-2 w-[10vw] text-white hover:bg-gray-700 rounded-lg"
              onClick={() => setFormSection(index + 1)}
            >
              {item}
              <div className="flex justify-center mt-2">
                <div className="w-5 h-5 rounded-full border-4 border-[#383838] flex justify-center items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="p-4">
        {formSection === 1 ? (
          <div className="flex">
            {/* Left Form Section */}
            <div className="flex-1 p-4 h-[60vh] overflow-y-auto scrollbar-none">
              {/* Header Section */}
              <div className="flex justify-between mb-4">
                <div className="text-lg font-semibold">Details</div>
                {/* have to complete the resuse details */}
                <div className="font-bold cursor-pointer">Reuse details</div>
              </div>

              {/* Title Input */}
              <div className="mb-4">
                <div className="mb-2">Title (required)</div>
                <textarea
                  placeholder={"Title"}
                  rows={2}
                  value={`${title}`}
                  className="w-full p-2 rounded-lg bg-[#1a1a1a] border border-[#383838] hover:border-gray-300 focus:outline-[#383838] resize-none overflow-hidden"
                />
              </div>

              {/* Description Textarea */}
              <div className="mb-4">
                <div className="mb-2">Description (required)</div>
                <textarea
                  placeholder="Tell viewers about your video"
                  className="w-full p-2 rounded-lg bg-[#1a1a1a] border border-[#383838] hover:border-gray-300 focus:outline-[#383838] resize-none overflow-hidden"
                />
              </div>

              {/* Thumbnail Upload */}
              <div className="mb-4">
                <div>Thumbnail</div>
                <div className="my-2 text-[#7a7a7a] text-sm">
                  Set a thumbnail that stands out and draws viewers' attention.
                </div>
                <div
                  className="w-[10vw] h-[10vh] p-2 border border-[#383838] hover:border-gray-300 focus:outline-[#383838] rounded-lg flex justify-center items-center"
                  onClick={handleButtonClick}
                >
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    // onChange={handleThumbnailUpload}
                    className=""
                  />
                  <ImagePlusIcon className="w-6 h-6" />
                </div>
              </div>

              {/* Playlist Selection */}
              <div className="mb-4">
                <div>Playlist</div>
                <div className="my-2 text-[#7a7a7a] text-sm">
                  Add your video to one or more playlists to organise your
                  content for viewers.
                </div>
                <select className="w-[20vw] p-3 border bg-[#1a1a1a] border-[#383838] hover:border-gray-300 focus:outline-[#383838] rounded-lg">
                  <option>Select playlist</option>
                  {/* Add playlist options */}
                </select>
              </div>

              {/* Audience Selection */}
              <div className="mb-4">
                <div className="text-lg">Audience</div>
                <div className="my-2 text-[#7a7a7a] text-sm">
                  Regardless of your location, you're legally required to comply
                  with the Children's Online Privacy Protection Act (COPPA)
                  and/or other laws. You're required to tell us whether your
                  videos are 'Made for Kids'.
                </div>
                <div className="flex flex-col">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="audience"
                      value="yes"
                      className="mr-2"
                    />
                    Yes, it's 'Made for Kids'.
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="audience"
                      value="no"
                      className="mr-2"
                    />
                    No, it's not 'Made for Kids'.
                  </label>
                </div>
              </div>
            </div>

            {/* Right Video Preview Section */}
            <div className="w-1/3 h-[38vh] bg-gray-800 text-white rounded-lg">
              {/* Video Preview */}
              <video width="285" controls className="rounded-t-lg">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Link & Filename */}
              <div className="p-4">
                <div className="">
                  {/* Video Link */}
                  {/* Video Link */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <div className="text-sm text-[#7a7a7a]">Video link</div>
                      <div className="text-xs text-blue-400">{videoUrl}</div>
                    </div>
                    <div className="cursor-pointer">
                      <CopyIcon className="w-6 h-6 m-2" />
                    </div>
                  </div>
                </div>

                {/* Video Filename */}
                <div className="mt-4">
                  <div className="text-sm text-[#7a7a7a]">Filename</div>
                  <div>{video.name}</div>
                </div>
              </div>
            </div>
          </div>
        ) : formSection === 2 ? (
          <div>
            <h1>Video elements</h1>
          </div>
        ) : formSection === 3 ? (
          <div className="w-[40vw] m-5">
            <div className="text-2xl mb-2">Checks</div>
            <div className="mb-4 text-sm">
              We'll check your video for issues that may restrict its visibility
              and then you will have the opportunity to fix issues before
              publishing your video.
            </div>
            <div className="text-2xl mb-2 ">Copyright</div>
            <div className="mb-4 text-sm text-[#7a7a7a]">No issue found</div>
            {/* Divider */}
            <div className="w-full h-[1px] bg-[#383838]" />
            <div className="mt-4 text-[#7a7a7a]">
              Remember: These check results aren't final. Issues may come up in
              the future that impact your video.
            </div>
          </div>
        ) : (
          <div className="flex">
            <div className="flex-1 p-4 h-[60vh] overflow-y-auto scrollbar-none">
              {/* Header Section */}
              <div className="flex flex-col mb-4">
                <div className="text-xl font-semibold">Visibility</div>
                <div className="text-sm">
                  Choose when to publish and who can see your video.
                </div>
              </div>

              {/* Visibility Selection */}
              <div className="mb-4">
                <div>Visibility</div>
                <div className="my-2 text-[#7a7a7a] text-sm">
                  Choose when to publish and who can see your video.
                </div>
                <div className="w-full p-5 border bg-[#1a1a1a] border-[#383838] rounded-lg">
                  <div className="">Save or publish</div>
                  <div className="text-[#7a7a7a] text-sm mb-2">Make your video public, unlisted or private</div>
                  <div className="flex flex-col space-y-2 ml-3">
                    <label className="flex items-center text-lg">
                      <input
                        type="radio"
                        name="visibility"
                        value="Public"
                        className="mr-2"
                      />
                      Public
                    </label>
                    <span className="text-sm ml-5 text-[#7a7a7a]">Only you and people who you choose to show can only watch your video</span>
                    <label className="flex items-center text-lg">
                      <input
                        type="radio"
                        name="visibility"
                        value="Unlisted"
                        className="mr-2"
                      />
                      Unlisted
                    </label>
                    <span className="text-sm ml-5 text-[#7a7a7a]">Anyone with the video link can watch your video</span>
                    <label className="flex items-center text-lg">
                      <input
                        type="radio"
                        name="visibility"
                        value="Private"
                        className="mr-2"
                      />
                      Private
                    </label>
                    <span className="text-sm ml-5 text-[#7a7a7a]">Everyone can watch your video</span>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#131313] rounded-lg p-5">
                <div className="mb-3 text-white">Before you publish, check the following:</div>
                <div className="text-sm mb-3 w-[80%]">
                    <div className="mb-1">Do children appear in this video?</div>
                    <div className="text-[#7a7a7a]">Make sure that you follow our policies to protect minors from harm, exploitation, bullying and violations of employment law.</div>
                </div>
                <div className="text-sm mb-3 w-[80%]">
                    <div className="mb-1">Looking for overall content guidance?</div>
                    <div className="text-[#7a7a7a]">Our Community Guidelines can help you to avoid trouble and ensure that YouTube remains a safe and vibrant community.</div>
                </div>
              </div>
            </div>

            {/* Right Video Preview Section */}
            <div className="w-1/3 h-[36vh] bg-gray-800 text-white rounded-lg">
              {/* Video Preview */}
              <video width="285" controls className="rounded-t-lg">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Link & Filename */}
              <div className="p-4">
                <div>
                  {/* Video Filename */}
                  <div className="mb-2">
                    <div>{video.name}</div>
                  </div>
                  {/* Video Link */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <div className="text-sm text-[#7a7a7a]">Video link</div>
                      <div className="text-xs text-blue-400">{videoUrl}</div>
                    </div>
                    <div className="cursor-pointer">
                      <CopyIcon className="w-6 h-6 m-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Footer */}
      <div className="w-full absolute bottom-0">
        {/* Divider */}
        <div className="w-full h-[1px] bg-[#383838]" />
        {/* Button */}
        <div className="flex justify-end">
          <div className="p-4">
            {formSection !== 1 && (
              <button
                className="bg-[#9a9a9a] text-black font-bold hover:bg-[#6a6a6a] py-2 px-4 rounded-full"
                onClick={() =>
                  setFormSection(
                    formSection !== 1 ? formSection - 1 : formSection
                  )
                }
              >
                {formSection !== 1 ? "Back" : null}
              </button>
            )}
          </div>
          {/* Button */}
          <div className="p-4">
            <button
              className="bg-[#9a9a9a] text-black font-bold hover:bg-[#6a6a6a] py-2 px-4 rounded-full"
              onClick={() =>
                setFormSection(
                  formSection !== 4 ? formSection + 1 : formSection
                )
              }
            >
              {formSection !== 4 ? "Next" : "Publish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
