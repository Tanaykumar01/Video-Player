"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import hitRequest from "@/api/hitReq";

const UserChannel = ({ user, videos }) => {
  const [isSubscribed, setIsSubscribed] = useState(user.isSubscribed);
  const [subscribersCount, setSubscribersCount] = useState(user.subscribersCount);

  const handleSubscribe = async () => {
    const res = await hitRequest(`/subscriptions/c/${user._id}`, "POST");
    if (res.success) {
      setIsSubscribed((prev) => !prev);
      setSubscribersCount((prev) => (isSubscribed ? prev - 1 : prev + 1));
    }
  };

  return (
    <div>
      <>
        {user && (
          <div className="channel-page h-full">
            {user.coverImage && (
              <div className="cover-image">
                <Image
                  src={user.coverImage}
                  alt="cover"
                  width={1920}
                  height={400}
                  className="w-full h-[25vh] rounded-xl ml-3"
                  priority
                />
              </div>
            )}
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
                  <div className="text-gray-400">
                    {subscribersCount} Subscribers
                  </div>
                  <div className="text-gray-400">{videos.length} videos</div>
                </div>
                <div>
                  more about this channel....
                  <Link href="/user/channel" className="text-gray-500">
                    more
                  </Link>
                </div>
                {!isSubscribed ? (
                  <div
                    className="flex justify-center items-center font-bold space-x-5 mt-5 p-[1vh] bg-[#cf2525de] rounded-full w-[8vw] cursor-pointer hover:bg-[#cc0000] text-white"
                    onClick={handleSubscribe}
                  >
                    Subscribe
                  </div>
                ) : (
                  <div
                    className="flex justify-center items-center font-bold space-x-5 mt-5 p-[1vh] bg-[#484848] rounded-full w-[8vw] cursor-pointer hover:bg-[#383838] text-[#00ff00]"
                    onClick={handleSubscribe}
                  >
                    Subscribed
                  </div>
                )}
              </div>
            </div>
            <div className="flex space-x-14 ml-[5vw] text-xl mb-4">
              <Link
                href={`/${user.username}/home`}
                className="hover:border-b-2"
              >
                Home
              </Link>
              <Link
                href={`/${user.username}/video`}
                className="hover:border-b-2"
              >
                Video
              </Link>
              <Link
                href={`/${user.username}/playlist`}
                className="hover:border-b-2"
              >
                Playlist
              </Link>
              <Link
                href={`/${user.username}/community`}
                className="hover:border-b-2"
              >
                Community
              </Link>
            </div>
            {/* Divider */}
            <div className="w-full h-[1px] bg-[#383838] my-2" />
          </div>
        )}
      </>
    </div>
  );
};

export default UserChannel;