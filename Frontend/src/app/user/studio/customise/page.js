'use client';
import { useState, useEffect } from "react";
import { checkUserLogin } from "@/api/auth.js";
import MainComp from "@/app/ui/customiseChannel/MainComp";

const CustomiseChannel = ({ setCustomiseChannel }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const currentUser = await checkUserLogin();

            setUser(currentUser);
            setLoading(false);
        };

        checkLoginStatus();
    }, []);

    if (loading) {
        return <div>Loading...🙂</div>;
    }
    return (
        <>
            {user && (
                <div className="flex">
                    {/* Main Content  */}
                    <MainComp userInfo={{...user}} setCustomiseChannel={setCustomiseChannel} />
                </div>
            )}
        </>
    );
}

export default CustomiseChannel;