"use client";
import React, { useEffect, useState } from "react";
import { checkUserLogin } from "./api/auth";
import hitRequest from "./api/hitReq";
import { formatDistanceToNow } from 'date-fns';
const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [users, setUsers] = useState([]);

  // Check user login status
  useEffect(() => {
    const checkLoginStatus = async () => {
      const currentUser = await checkUserLogin();
      setUser(currentUser);
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  // Fetch videos
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await hitRequest("/videos/", "GET");
      setVideos(res.data.data); // Assuming res.data contains the videos array
    };
    fetchVideos();
  }, []);

  // Fetch users after videos are loaded
  useEffect(() => {
    const fetchUsers = async () => {
      if (videos.length === 0) return; // Wait until videos are loaded

      const usersArray = await Promise.all(
        videos.map(async (video) => {
          const tempUserId = video.owner; // Assuming owner is user ID
          const res = await hitRequest(`/users/c/${tempUserId}`, "GET");
          return res.data; // Assuming res.data contains user info
        })
      );

      setUsers(usersArray); // Update users once all users are fetched
      console.log(users);
    };
    fetchUsers();
  }, [videos]);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <div className="flex gap-6 p-4">
          {videos.map((video, index) => (
            <div
              key={video._id}
              className="w-[26vw] bg-[#0f0f0f] rounded-lg shadow-lg"
            >
              {/* Video thumbnail */}
              <div className="w-full h-[200px]">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Video details */}
              <div className="p-4 flex">
                {/* Channel logo */}
                <div className="h-12 w-12">
                  {users[index] && (
                    <img
                      src={users[index].avatar}
                      alt="Logo"
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                </div>

                {/* Video info */}
                <div className="ml-4">
                  <div className="text-white text-lg font-semibold">
                    {video.title}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {users[index] && users[index].fullName}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">
                    {video.views} views •{" "}
                    {formatDistanceToNow(new Date(video.createdAt), { addSuffix: true })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-700 py-8">
          Please log in to access your account.
        </div>
      )}
    </div>
  );
};

export default App;
