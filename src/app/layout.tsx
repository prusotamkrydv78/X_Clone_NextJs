import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className=" max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto  flex  justify-between *:h-screen">
          <div className="px-2 xxl:p-8">
            <LeftBar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-gray-borderGray">
            {children}
          </div>
          <div className=" flex-1 hidden lg:flex ml-4">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
