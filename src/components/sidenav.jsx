import React from "react";
import { Link } from "react-router-dom";
import { House, TableOfContents, ReceiptText, Bookmark } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="fixed px-8 pt-12 z-40 w-1/5 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-neutral-500">
      <div className="h-full flex flex-col  overflow-y-auto justify-start py-2   ">
        <ul className="space-y-4 font-medium">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 rounded-lg dark:text-black  dark:hover:bg-seconary-light"
            >
              <House />
              <span className="ml-3">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 rounded-lg dark:text-black  dark:hover:bg-seconary-light"
            >
              <TableOfContents />
              <span className="ml-3">Categories</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 rounded-lg dark:text-black  dark:hover:bg-seconary-light"
            >
              <ReceiptText />
              <span className="ml-3">My Recipes</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 rounded-lg dark:text-black  dark:hover:bg-seconary-light"
            >
              <Bookmark />
              <span className="ml-3">Bookmarked</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
