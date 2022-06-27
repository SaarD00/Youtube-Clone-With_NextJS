import React from "react";
import {
  MenuIcon,
  SearchCircleIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div className="flex bg-white  items-center border-b">
      <div className=" mx-5 flex items-center justify-between flex-1 gap-5 ">
        <div className="logo flex justify-center md:justify-between gap-5 items-center">
          <MenuIcon className="h-5 w-5   " />
          <img
            onClick={() => router.push("/")}
            className="h-14 cursor-pointer  "
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          />
        </div>
        <div className="flex items-center border-black/20 border  gap-2 justify-center">
          <input
            type="search"
            placeholder="Search"
            className="outline-none px-2 lg:w-[43em]  text-sm lg:text-base py-1  "
          />
          <hr className="h-5 border border-black/20"></hr>
          <SearchIcon className="h-5  w-5" />
        </div>
        <div
          onClick={() => {
            session ? router.push("/upload") : signIn("google");
          }}
          className="flex justify-center items-center"
        >
          <h1
            className="cursor-pointer"
            onClick={() => {
              session ? signOut : signIn();
            }}
          >
            {session ? "Publish Video" : "Sign In"}
          </h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <VideoCameraIcon
            onClick={() => {
              router.push("/upload");
            }}
            className="h-6 w-6 cursor-pointer"
          />
          <img
            onClick={() => {
              session ? signOut() : signIn();
            }}
            src={session?.user?.image || "https://links.papareact.com/gll"}
            className="h-7 w-7 rounded-full border border-black/50 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
