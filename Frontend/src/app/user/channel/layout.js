import ChannelPage from "@/app/ui/Channel";
export default function UserChannelLayout({ children }) {
    return (
      <div>
        <ChannelPage />
        {children}
      </div>
    );
  }