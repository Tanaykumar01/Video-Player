'use client';
import { checkUserLogin } from '@/api/auth'
import hitRequest from '@/api/hitReq';
import React, { useEffect, useState } from 'react'

const page = () => {
    const [user, setUser] = useState(null);
    const [userChannel, setUserChannel] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const currentUser = await checkUserLogin();
            setUser(currentUser);
            setLoading(false);
        };
        checkLoginStatus();
    }, []);
    useEffect(() => {
        const channel = async () => {
            const res = await hitRequest(`/users/channel/${user?.username}`, "GET");
            setUserChannel(res?.data);
        }
        if (user) channel();
    }, [user?.username]);

    if (loading) return <div>Loading...</div>

    return (
        <div className='w-[80vw] p-6'>
            <div className='text-2xl mb-6'>Channel Dashboard</div>
            <div className='flex space-x-10 h-[60vh]'>
                <div className='w-1/3  border border-[#7a7a7a] rounded-lg'>Video Upload</div>
                <div className='w-1/3 border border-[#7a7a7a] rounded-lg p-5'>
                    <div className='text-xl mb-2'>Channel analytics</div>
                    <div>
                        <div className='text-sm'>Current subscriber</div>
                        <div className='text-3xl'>{userChannel?.subscribersCount}</div>
                    </div>
                </div>
                <div className='w-1/3 border border-[#7a7a7a] rounded-lg'>Creator Insider</div>
            </div>

        </div>
    )
}

export default page
