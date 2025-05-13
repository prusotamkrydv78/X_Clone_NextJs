import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftBar = () => {
  const menuList = [
    {
      id: 1,
      name: "Homepage",
      link: "/",
      icon: "home.svg",
    },
    {
      id: 2,
      name: "Explore",
      link: "/",
      icon: "explore.svg",
    },
    {
      id: 3,
      name: "Notification",
      link: "/",
      icon: "notification.svg",
    },
    {
      id: 4,
      name: "Messages",
      link: "/",
      icon: "message.svg",
    },
    {
      id: 5,
      name: "Bookmarks",
      link: "/",
      icon: "bookmark.svg",
    },
    {
      id: 6,
      name: "Jobs",
      link: "/",
      icon: "job.svg",
    },
    {
      id: 7,
      name: "Communities",
      link: "/",
      icon: "community.svg",
    },
    {
      id: 8,
      name: "Premium",
      link: "/",
      icon: "logo.svg",
    },
    {
      id: 9,
      name: "Profile",
      link: "/",
      icon: "profile.svg",
    },
    {
      id: 10,
      name: "More",
      link: "/",
      icon: "more.svg",
    },
  ];
  return (
    <div className="h-screen sticky top-0 flex flex-col  justify-between pt-2 pb-8">
      {/* LOGO MENU  */}

      <div className="flex flex-col gap-4 text-lg items-center xl:items-start">
        <Link className="p-2 rounded-full hover:bg-[#181818]" href="/">
          <Image src="icons/logo.svg" alt="X.com" width={24} height={24} />
        </Link>

        {/* MEnu list  */}

        <div className="flex flex-col">
          {menuList.map((menu) => {
            return (
              <>
                <Link
                  href={menu.link}
                  className="p-2 rounded-full hover:bg-[#181818] flex gap-4"
                  key={menu.id}
                >
                  <Image
                    src={`icons/${menu.icon}`}
                    alt={menu.name}
                    width={24}
                    height={24}
                  />
                  <span className="hidden xl:inline">{menu.name}</span>
                </Link>
              </>
            );
          })}
        </div>
        <Link
          href={"/"}
          className="bg-white text-black rounded-full font-bold w-12 h-12 flex justify-center items-center xl:hidden"
        >
          <Image src={"icons/post.svg"} alt="new post" width={24} height={24} />
        </Link>
        <Link
          href={"/"}
          className="hidden xl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          POST{" "}
        </Link>
      </div>
      {/* User menu  */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
           <Image src={"/general/avatar.png"} alt="avatar" fill/>
          </div>
          <div className="hidden xl:flex    flex-col">
            <span className="  font-bold">Prusotam Yadav</span>
            <span className="text-sm text-Gray">@prusotamydv</span>
          </div>
        </div>
        <div className="hidden xl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
