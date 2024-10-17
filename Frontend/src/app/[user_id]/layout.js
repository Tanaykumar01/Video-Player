'use client';
import UserChannel from "../ui/UserChannel";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import hitRequest from "@/api/hitReq";
import { getAllVideos } from "@/api/getAllVideos";
import { checkUserLogin } from "@/api/auth";

export default function UserChannelLayout({ children }) {
    const router = useRouter();
    const { user_id } = useParams();
    const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [videos, setVideos] = useState([]);
    const [loadingVideos, setLoadingVideos] = useState(false);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const currentUser = await checkUserLogin();
            setCurrentUser(currentUser);
        };
        checkLoginStatus();
    }, []);

    useEffect(() => {
        if (currentUser && user_id === currentUser.username) {
            router.push(`/user/channel/home`);
        }
    }, [currentUser, user_id, router]);

    useEffect(() => {
        const fetchUserChannel = async () => {
            try {
                const res = await hitRequest(`/users/channel/${user_id}`, "GET");
                setLoadingUser(false);
                setUser(res?.data);
            }
            catch (err) {
                console.error(err);
            }
        }
        fetchUserChannel();
    }, [user_id]);

    // Fetch videos and filter by user id
    useEffect(() => {
        const fetchVideos = async () => {
            if (user) {
                setLoadingVideos(true);
                const res = await getAllVideos();
                if (res) {
                    const userVideos = res.filter(video => video.owner === user._id);
                    setVideos(userVideos);
                }
                setLoadingVideos(false);
            }
        };
        if (user) fetchVideos(); // Fetch videos only after user is fetched
    }, [user]);

    if (loadingVideos) {
        return <div>Loading videos...</div>;
    }
    if (loadingUser) {
        return <div>Loading user...</div>;
    }

    return (
        <div>
            <UserChannel user={user} videos={videos} />
            {children}
        </div>
    );
}
