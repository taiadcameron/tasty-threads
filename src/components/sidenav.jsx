import React from "react";
import { Link } from "react-router-dom";
import {
  House,
  TableOfContents,
  ReceiptText,
  Bookmark,
  Settings,
} from "lucide-react";
import logo from "../Images/logott.svg";

const Sidebar = () => {
  return (
    <aside className="fixed  mt-44 z-40  w-1/5 h-screen transition-transform -translate-x-full lg:translate-x-0 ">
      <div className=" h-full bg-gradient-to-t from-seconary-light via-primary-dark">
        <div className="px-8 m-1 bg-primary h-full flex flex-col  overflow-y-auto justify-start py-2 gap-12  ">
          <ul className="space-y-4 font-medium mr-16">
            <li>
              <Link
                to="/"
                className="flex items-center   px-4 py-2 rounded-lg dark:text-black  dark:hover:bg-seconary-light"
              >
                <House />
                <span className="ml-3 text-base">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center px-4 py-2 rounded-lg dark:text-black  dark:hover:bg-seconary-light"
              >
                <TableOfContents />
                <span className="ml-3 text-base">Categories</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center px-4 py-2 rounded-lg dark:text-black  dark:hover:bg-seconary-light"
              >
                <ReceiptText />
                <span className="ml-3 text-base">My Recipes</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center px-4 py-2 rounded-lg dark:text-black  dark:hover:bg-seconary-light"
              >
                <Bookmark />
                <span className="ml-3 text-base">Bookmarked</span>
              </Link>
            </li>
          </ul>

          <div className="px-4">
            <div className="top flex flex-col gap-2">
              <h3 className="text-2xl">Friends</h3>
              <div className="line w-full bg-neutral-600 h-0.1"></div>

              <div className=" friends flex flex-col gap-4 py-4">
                <div className="flex gap-4">
                  <img src={logo} alt="" className="h-14 rounded-xl" />
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Levi Roots</p>
                    <p className="text-sm">25 Recipes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img src={logo} alt="" className="h-14 rounded-xl" />
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Levi Roots</p>
                    <p className="text-sm">25 Recipes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img src={logo} alt="" className="h-14 rounded-xl" />
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Levi Roots</p>
                    <p className="text-sm">25 Recipes</p>
                  </div>
                </div>
              </div>
              <div className="line w-full bg-neutral-600  h-0.1"></div>
              <p className="">View All</p>
            </div>
          </div>

          <div className=" shadow-lg flex bg-seconary rounded-3xl justify-between items-center p-5">
            <div className="flex gap-4 items-center ">
              <img src={logo} alt="" className="h-16 rounded-xl" />
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium">Levi Roots</p>
                <p className="text-sm">Leviroots@gmail.com</p>
              </div>
            </div>
            <Settings />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
