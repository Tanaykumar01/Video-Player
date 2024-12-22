import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./ui/Navbar.jsx";
import SideNavbar from "./ui/SideNavbar.jsx";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Streamline",
  description: "Streamline is a video streaming platform for creators and viewers. Creators can upload videos and viewers can watch them. Streamline is built with Next.js, Tailwind CSS, and MongoDB. It is a project for the Full Stack Open 2021 course. Streamline is open source and free to use. You can contribute to the project on GitHub.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transform scale-95 origin-top-left m-0 p-0 w-[100vw]`}
      >
          <div>
            <Navbar/>
            <div className="flex">
              <SideNavbar />
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
