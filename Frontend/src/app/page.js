"use client";
import React, { useEffect, useState } from 'react';
import { checkUserLogin } from './api/auth';
import hitRequest from './api/hitReq';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const currentUser = await checkUserLogin();
      setUser(currentUser);
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await hitRequest('/videos/', 'GET');
        if (res && res.data) {
          setVideos(res.data.data);
        } else {
          console.error('Invalid response structure:', res); // Handle unexpected response
        }
      } catch (error) {
        console.error('Failed to fetch videos:', error);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <div className="flex space-x-5 bg-gray-700 h-full w-full">
          {videos.map((video) => (
            <div key={video._id} className="w-[15vw] h-[5vh]">
              {/* <img src={video.thumbnail} alt={video.title} /> */}
              <video src={video.videoFile} controls height={100} width={150} className="rounded-xl"/>
              <h2>{video.title}</h2>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Please log in to access your account.</div>
      )}
    </div>
  );
};

export default App;
