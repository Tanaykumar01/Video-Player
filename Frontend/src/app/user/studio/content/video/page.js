'use client'
import Icon from '@/Assets/channel-create-video.svg';
import { UploadIcon } from '@radix-ui/react-icons';
import { useState, useEffect, useRef } from 'react';
import { getAllVideos } from '@/api/getAllVideos.js';
const Page = () => {
    const [uploadVideos, setUploadVideos] = useState(false);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const fetchVideos = async () => {
            const res = await getAllVideos();
            setVideos(res); // Assuming res.data contains the videos array
        };
        fetchVideos();
    }, []);
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    }
    const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        console.log(file);
    }
    
    return (
        <div>
            <div className="flex ml-8">
                <div className="w-[20vw]">
                    Video
                </div>
                <div className="w-[10vw]">
                    Visibility
                </div>
                <div className="w-[10vw]">
                    Restriction
                </div>
                <div className="w-[10vw]">
                    Date
                </div>
                <div className="w-[10vw]">
                    Views
                </div>
                <div className="w-[10vw]">
                    Comments
                </div>
                <div className="w-[10vw]">
                    Likes
                </div>
            </div>
            {/* Divider */}
            <div className="w-[80vw] h-[1px] bg-[#383838] my-2" />
            {
                // if videos are available then show them
                // else show no videos available
            }
            {/* <div>
                <div className="flex ml-8">
                    <div className="w-[20vw]">
                        <div className="flex items-center">
                            <div className="w-[10vw] h-[5vh]">
                                <Image src={video.thumbnail} alt="thumbnail" width={100} height={100} className="rounded-lg"/>
                            </div>
                            <div className="w-[10vw]">
                                <div>{video.title}</div>
                                <div>{video.duration}</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[10vw]">
                        <div>{video.visibility}</div>
                    </div>
                    <div className="w-[10vw]">
                        <div>{video.restriction}</div>
                    </div>
                    <div className="w-[10vw]">
                        <div>{video.date}</div>
                    </div>
                    <div className="w-[10vw]">
                        <div>{video.views}</div>
                    </div>
                    <div className="w-[10vw]">
                        <div>{video.comments}</div>
                    </div>
                    <div className="w-[10vw]">
                        <div>{video.likes}</div>
                    </div>
                </div> 
            </div> */}
            <div className="flex flex-col justify-center items-center mt-[10%]">
                <div>
                    <Icon
                        width={160}
                        height={160}
                    />
                </div>
                <div className="text-center text-gray-700 py-8">
                    No videos available
                </div>
                <button className="w-[15%] bg-[#383838] text-white px-4 py-2 rounded-xl" onClick={() => setUploadVideos(true)}>Upload video</button>
                {uploadVideos && (
                    <div className='h-[90vh] w-[60vw] bg-[#383838] mt-[-47%] rounded-2xl'>
                        <div className="flex justify-between items-center">
                            <div className="text-white text-lg ml-8 mt-8">Upload video</div>
                            <div className="text-white text-lg mr-8 mt-8 cursor-pointer" onClick={() => setUploadVideos(false)}>X</div>
                        </div>
                        {/* Divider */}
                        <div className="w-[60vw] h-[1px] bg-[#0f0f0f] my-2" />
                        <div className="flex justify-center items-center mt-[15vh]">
                            <div className="w-[15vw] h-[26vh] bg-[#0f0f0f] rounded-full flex justify-center items-center text-center" onClick={handleButtonClick}>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleVideoUpload}
                                    style={{ display: "none" }} // Hide the file input
                                />
                                <UploadIcon height={40} width={40} />
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center mt-3'>
                            Drag and drop video files to upload
                            <span>Your videos will be private until you publish them.</span>
                        </div>
                        <div className="flex justify-center items-center mt-8">
                            <button
                                className="bg-[#0f0f0f] py-2 px-4 rounded-full"
                                onClick={handleButtonClick}
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleVideoUpload}
                                    style={{ display: "none" }} // Hide the file input
                                />
                                Upload
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;