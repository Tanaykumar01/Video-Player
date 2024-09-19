'use client'
import Icon from '@/Assets/channel-create-video.svg';
import { useState } from 'react';

const ChannelHomePage = () => {
    const [videos, setVideos] = useState([]);
    
    return (
        <div className='flex flex-col items-center justify-center m-[10vh]'>
            {videos.length === 0 ? (
                <>
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
                </>
            ) : (
                <div>videos</div>
            )}
        </div>
    );
}

export default ChannelHomePage;
