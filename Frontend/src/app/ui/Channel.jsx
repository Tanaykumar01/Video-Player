"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { checkUserLogin } from "@/api/auth.js";
import hitRequest from "@/api/hitReq";
const ChannelPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userChannel, setUserChannel] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        const fetchUserChannel = async () => {
            try {
              if(user?.username) {
                const res = await hitRequest(`/users/channel/${user?.username}`, "GET");
                setLoadingUser(false);
                setUserChannel(res?.data);
              }
            }
            catch (err) {
                console.error(err);
            }
        }
        fetchUserChannel();
    }, [user?.username]);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const currentUser = await checkUserLogin();

      setUser(currentUser);
      setLoading(false);
    };

    checkLoginStatus();
  }, []);


  if (loading || loadingUser) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {user && (
        <div className="channel-page h-full">
          {user.coverImage && <div className="cover-image">
            <Image
              src={user.coverImage}
              alt="cover"
              width={1920}
              height={400}
              className="w-full h-[25vh] rounded-xl ml-3"
              priority
            />
          </div>}
          <div className="w-[80vw] h-[25vh] bg-[#0f0f0f] flex pl-[5vw] items-center">
            <div className="image">
              <Image
                src={user.avatar}
                alt="avatar"
                width={100}
                height={100}
                className="rounded-full h-[20vh] w-[12vw]"
                priority
              />
            </div>
            <div className="w-[70vh] ml-[5vh]">
              <div className="font-bold text-3xl">{user.fullName}</div>
              <div className="flex space-x-2">
                <div className="text-gray-400">@{user.username}</div>
                <div className="text-gray-400">{ userChannel?.subscribersCount } Subscribers</div>
              </div>
              <div>
                more about this channel....
                <Link href="/user/channel" className="text-gray-500">
                  more
                </Link>
              </div>
              <div className="space-x-5 mt-5">
                <Link
                  href="/user/customise"
                  className="p-[1.5vh] bg-[#383838] rounded-full"
                >
                  Customize Channel
                </Link>
                <Link
                  href="/user/channel/editVideo h-[2vh]"
                  className="p-[1.5vh] bg-[#383838] rounded-full"
                >
                  Manage Video
                </Link>
              </div>
            </div>
          </div>
          <div className="flex space-x-14 ml-[5vw] text-xl mb-4">
            <Link href="/user/channel/home" className="hover:border-b-2">
              Home
            </Link>
            <Link href="/user/channel/playlist" className="hover:border-b-2">
              Playlist
            </Link>
            <Link href="/user/channel/community" className="hover:border-b-2">
              Community
            </Link>
          </div>
          {/* Divider */}
          <div className="w-full h-[1px] bg-[#383838] my-2" />
        </div>
      )}
    </>
  );
};
export default ChannelPage;
