"use client";
import React, { useEffect, useState } from "react";
import { checkUserLogin } from "./api/auth";
import { getAllVideos } from "./api/getAllVideos";
import hitRequest from "./api/hitReq";
import Video from "./ui/video";

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
      const res = await getAllVideos();
      setVideos(res); // Assuming res.data contains the videos array
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
    };
    user && fetchUsers();
  }, [videos]);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <Video videos={videos} users={users}/>
      ) : (
        <div className="text-center text-gray-700 py-8">
          Please log in to access your account.
        </div>
      )}
    </div>
  );
};

export default App;
