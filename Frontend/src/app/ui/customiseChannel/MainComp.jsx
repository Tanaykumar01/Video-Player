import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import hitRequest from "@/api/hitReq";
import Image from "next/image";

const MainComp = ({ userInfo, setCustomiseChannel }) => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(userInfo?.avatar);
  const [coverImage, setCoverImage] = useState(userInfo?.coverImage);
  const [email , setEmail] = useState("");

  useEffect(() => {
    if (userInfo) {
      setUsername(userInfo.username);
      setFullname(userInfo.fullName);
      setAvatar(userInfo.avatar);
      setCoverImage(userInfo.coverImage);
      setEmail(userInfo.email);
    }
  }, [userInfo]);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Open the file input dialog
  };

  // Function to handle the file change event
  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
      // You can further process the file here (e.g., upload it to a server)
    }
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
      // You can further process the file here (e.g., upload it to a server)
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!fullname && !username && !avatar && !coverImage) {
      console.log("No changes made to user details or images");
      return;
    }
    if (username !== userInfo.username && fullname !== userInfo.fullName) {
      const formData = new FormData();
      formData.append("fullName", fullname);
      formData.append("username", username);

      const response = await hitRequest(
        "/users/update-account",
        "PATCH",
        formData
      );

      if (response) {
        console.log("User details updated successfully");
      } else {
        console.log("Error while updating user details");
      }
    } else if (username !== userInfo.username) {
      const formData = new FormData();
      formData.append("username", username);

      const response = await hitRequest(
        "/users/update-account",
        "PATCH",
        formData
      );

      if (response) {
        console.log("User details updated successfully");
      } else {
        console.log("Error while updating user details");
      }
    } else if (fullname !== userInfo.fullName) {
      const formData = new FormData();
      formData.append("fullname", fullname);

      const response = await hitRequest(
        "/users/update-account",
        "PATCH",
        formData
      );

      if (response) {
        console.log("User details updated successfully");
      } else {
        console.log("Error while updating user details");
      }
    } else {
      console.log("No changes made to user details");
    }

    if (avatar !== userInfo.avatar) {
      const avatarData = new FormData();
      avatarData.append("avatar", avatar);

      const avatarResponse = await hitRequest(
        "/users/avatar",
        "PATCH",
        avatarData
      );
      // console.log("Avatar response status : ",avatarResponse?.statusCode);
      if (avatarResponse) {
        console.log("Avatar updated successfully");
      } else {
        console.log("Error while updating avatar");
      }
    }

    if (coverImage !==userInfo.coverImage) {
      const coverImageData = new FormData();
      coverImageData.append("coverImage", coverImage);
      const coverImageResponse = await hitRequest(
        "/users/cover-image",
        "PATCH",
        coverImageData
      );
      if (coverImageResponse) {
        console.log("Cover image updated successfully");
      } else {
        console.log("Error while updating cover image");
      }
    }
  };
  return (
    <div className="relative h-screen overflow-y-scroll">
      <h1 className="m-8 text-xl font-bold">Channel customisation</h1>
      <div className="ml-8 nav flex items-center justify-between w-[80vw]">
        <div className="flex space-x-8">
          <Link href="/user/customise/profile">Profile</Link>
          <Link href="/user/customise/home-tab">HomeTab</Link>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/user/channel/home"
            className="bg-[#383838] px-4 py-2 rounded-full"
          >
            View Channel
          </Link>
          <div
            className="bg-[#383838] px-4 py-2 rounded-full"
            onClick={() => setCustomiseChannel(false)}
          >
            Cancel
          </div>
          <div
            className="bg-[#383838] px-4 py-2 rounded-full cursor-pointer"
            onClick={handleFormSubmit}
          >
            Publish
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#383838] my-2" />
      {/* profile */}
      <div className="m-8 w-[60vw]">
        <div className="mb-4">
          <h1 className="py-2">Banner Image</h1>
          <div className="text-sm text-[#7e7e7e] mb-2">
            This image will appear across the top of your channel.
          </div>
          <div className="flex space-x-5">
            <div className="bg-[#383838] w-[20vw] h-[20vh] rounded-lg">
              <Image
                src={coverImage}
                alt="cover"
                width={200}
                height={200}
                className="relative w-[15vw] h-[15vh] rounded-lg left-[2.5vw] top-[2.5vh]"
              />
            </div>
            <div>
              <div className="w-[25vw] text-sm text-[#7e7e7e]">
                For the best results on all devices, use an image that's at
                least 2048 x 1152 pixels and 6 MB or less.
              </div>
              <button
                className="bg-[#383838] py-2 px-4 rounded-full mt-3"
                onClick={handleButtonClick}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleCoverImageChange}
                  style={{ display: "none" }} // Hide the file input
                />
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h1 className="py-2">Picture</h1>
          <div className="text-sm text-[#7e7e7e] mb-2">
            Your profile picture will appear where your channel is presented on
            YouTube, such as next to your videos and comments
          </div>
          <div className="flex space-x-5">
            <div className="bg-[#383838] w-[20vw] h-[20vh] rounded-lg">
              <Image
                src={avatar}
                alt="avtar"
                width={50}
                height={50}
                className="relative w-[10vw] h-[15vh] rounded-[100%] left-[5vw] top-[2.5vh]"
              />
            </div>
            <div>
              <div className="w-[25vw] text-sm text-[#7e7e7e]">
                It's recommended that you use a picture that's at least 98 x 98
                pixels and 4 MB or less. Use a PNG or GIF (no animations) file.
                Make sure that your picture follows the YouTube Community
                Guidelines.{" "}
              </div>
              <button
                className="bg-[#383838] py-2 px-4 rounded-full mt-3"
                onClick={handleButtonClick}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleAvatarChange}
                  style={{ display: "none" }} // Hide the file input
                />
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h1 className="py-2">Name</h1>
          <div className="text-sm text-[#7e7e7e] mb-2">
            Choose a channel name that represents you and your content. Changes
            made to your name and picture are only visible on YouTube and not on
            other Google services. You can change your name twice in 14 days.
          </div>
          <div className="flex space-x-5">
            <input
              type="text"
              value={fullname}
              className="bg-[#383838] py-2 px-4 rounded-xl w-[60vw]"
              placeholder="Name"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <h1 className="py-2">Handle</h1>
          <div className="text-sm text-[#7e7e7e] mb-2">
            Choose your unique handle by adding letters and numbers. You can
            change your handle back within 14 days. Handles can be changed twice
            every 14 days.
          </div>
          <div className="flex space-x-5">
            <input
              type="text"
              value={`@${username}`}
              className="bg-[#383838] py-2 px-4 rounded-xl w-[60vw]"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value.split('@')[1])}
            />
          </div>
        </div>
        <div className="mb-4">
          <h1 className="py-2">Description</h1>
          <div>
            <textarea
              type="text"
              value={userInfo.description}
              className="bg-[#383838] py-2 px-4 rounded-xl w-[60vw] h-[15vh]"
              placeholder="Tell viewers about your description."
              readOnly
            />
          </div>
        </div>
        <div className="mb-4">
          <h1 className="py-2">Channel URL</h1>
          <div className="text-sm text-[#7e7e7e] mb-2">
            This is the standard web address for your channel. It includes your
            unique channel ID, which is the numbers and letters at the end of
            the URL.
          </div>
          <input
            type="text"
            value={`https://www.streami.com/channel/${userInfo._id}`}
            placeholder="link"
            className="bg-[#383838] py-2 px-4 rounded-xl w-[60vw]"
            readOnly
          />
        </div>
        <div className="mb-4">
          <h1 className="py-2">Contact Info</h1>
          <div className="text-sm text-[#7e7e7e] mb-2">
            Let people know how to contact you with business enquiries. The
            email address that you enter may appear in the About section of your
            channel and be visible to viewers.
          </div>
          <div className="flex space-x-5">
            <input
              type="email"
              value={`${email}`}
              className="bg-[#383838] py-2 px-4 rounded-xl w-[60vw]"
              placeholder="email"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComp;
