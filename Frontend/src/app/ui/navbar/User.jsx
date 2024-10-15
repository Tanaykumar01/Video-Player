"use client";
import Image from "next/image";
import { React, useState, useEffect } from "react";
import { checkUserLogin } from "@/api/auth";
import Link from "next/link";
import { LogOut, LucideUserCircle2, SettingsIcon } from "lucide-react";
import { ExclamationTriangleIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import hitRequest from "@/api/hitReq";
const User = ({ onClickDiv }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userSetting, setUserSetting] = useState(true);

  // Check user login status
  useEffect(() => {
    const checkLoginStatus = async () => {
      const currentUser = await checkUserLogin();
      setUser(currentUser);
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  const handleToggle = () => {
    setUserSetting(!userSetting);
    onClickDiv(userSetting);
  };

  const handleLogout = async () => {
    try {
      await hitRequest("/users/logout", "POST");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }
  return (
    <div className="m-2" onClick={handleToggle}>
      {/* User Info */}
      <div className="flex">
        <div>
          <Image
            src={user.avatar}
            alt="avatar"
            width={70}
            height={70}
            className="w-14 h-14 rounded-full"
            priority
          />
        </div>
        <div className="mx-3 font-bold">
          <div>{user.fullName}</div>
          <div>{`@${user.username}`}</div>
        </div>
      </div>
      <div className="ml-16 text-blue-600">
        <Link href="/user/channel/home">Your Channel</Link>
      </div>
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#0f0f0f] my-2" />
      {/* User Settings */}
      <div className="flex flex-col space-y-3">
        <div className="flex gap-6 my-2">
          <LucideUserCircle2 className="w-6 h-6" />
          <Link href="/user/login">Switch account </Link>
        </div>
        <div className="flex gap-6 my-2" onClick={handleLogout}>
          <LogOut className="w-6 h-6" />
          Logout
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#0f0f0f] my-2" />
      {/* User Settings */}
      <div className="flex flex-col">
        <div className="flex gap-6 my-2">
          <SettingsIcon className="w-6 h-6" />
          Settings
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#0f0f0f] my-2" />
      {/* User Help and Feedback */}
      <div className="flex flex-col">
        <div className="flex gap-6 my-2">
          <QuestionMarkCircledIcon className="w-6 h-6" />
          Help
        </div>
        <div className="flex gap-6 my-2">
          <ExclamationTriangleIcon className="w-6 h-6" />
          Feedback</div>
      </div>
    </div>
  );
};

export default User;
