'use client';
import Icon from '@/Assets/channel-create-video.svg';
import { useState, useEffect } from 'react';
import { getAllVideos } from '@/api/getAllVideos.js';
import { checkUserLogin } from '@/api/auth.js'; // Assuming you have this function to check login
import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image'; // Import the Next.js Image component

const ChannelHomePage = () => {
    const [videos, setVideos] = useState([]);
    const [user, setUser] = useState(null);
    const [loadingVideos, setLoadingVideos] = useState(true); // State to handle video loading

    // Fetch user details
    useEffect(() => {
        const fetchUser = async () => {
            const loggedInUser = await checkUserLogin(); // Fetch the logged-in user
            setUser(loggedInUser);
        };
        fetchUser();
    }, []);

    // Fetch videos and filter by logged-in user
    useEffect(() => {
        const fetchVideos = async () => {
            if (user) {
                setLoadingVideos(true); // Set loading state before fetching
                const res = await getAllVideos();
                if (res) {
                    const userVideos = res.filter(video => video.owner === user._id); // Filter videos by the logged-in user
                    setVideos(userVideos);
                }
                setLoadingVideos(false); // Set loading to false after fetching
            }
        };
        if (user) fetchVideos(); // Fetch videos only after user is fetched
    }, [user]);

    if (loadingVideos) {
        return <div>Loading videos...</div>; // Show loading state
    }

    return (
        <>
            {videos.length === 0 ? (
                <div className='flex flex-col items-center justify-center m-[10vh]'>
                    <div>
                        <Icon
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className='w-[22vw] flex flex-col justify-center items-center text-center'>
                        <div className='text-lg font-bold'>Create content on any device</div>
                        <div className='mt-5 text-md'>Upload and record at home or on the go.<br /> Everything that you make public will appear here.</div>
                    </div>
                    <div>
                        <button className='mt-10 bg-white text-black font-bold text-lg rounded-full px-6 py-2'>Create</button>
                    </div>
                </div>
            ) : (
                <div className='flex space-x-3 m-4'>
                    {videos.map((video) => (
                        <div
                            key={video._id}
                            className="w-[20vw] bg-[#0f0f0f] rounded-lg shadow-lg"
                        >
                            {/* Video thumbnail */}
                            <div className="w-full h-[200px] relative">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill // Use fill to make the image fill the parent container
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Specify responsive sizes
                                    style={{ objectFit: 'cover' }} // Use style for objectFit
                                    className="rounded-lg"
                                    priority
                                />
                            </div>

                            {/* Video details */}
                            <div className="p-4 flex">
                                {/* Channel logo */}
                                <div className="h-8 w-8">
                                    {user && (
                                        <Image
                                            src={user.avatar}
                                            alt="Logo"
                                            width={32}
                                            height={32}
                                            className="rounded-full"
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
                                        {user && user.fullName}
                                    </div>
                                    <div className="text-gray-500 text-xs mt-1">
                                        {video.views} views •{' '}
                                        {formatDistanceToNow(new Date(video.createdAt), { addSuffix: true })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default ChannelHomePage;
