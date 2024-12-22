'use client'
import Icon from '@/Assets/channel-create-video.svg';
import { useState, useEffect } from 'react';
import { getAllVideos } from '@/api/getAllVideos.js';
import UploadVideo from '@/app/ui/video/uploadVideo/UploadVideo';
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
                    <div className='flex justify-center mt-[-47%]'>
                        <UploadVideo setUploadVideos={setUploadVideos}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;