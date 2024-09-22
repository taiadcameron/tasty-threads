import { Search } from "lucide-react";
import RecipeCard from "./recipe-card";

const Content = () => {
  return (
    <div className="relative flex flex-col gap-4">
      <div className="relative ">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-12 bg-white border-2 border-primary-dark drop-shadow-md rounded-xl px-4  focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex gap-8">
        <span className="px-4 py-2 rounded-3xl dark:text-black  dark:hover:bg-seconary-light">
          Newest
        </span>
        <span className="px-4 py-2 rounded-3xl dark:text-black  dark:hover:bg-seconary-light">
          Trending
        </span>
        <span className="px-4 py-2 rounded-3xl dark:text-black  dark:hover:bg-seconary-light">
          Most Liked
        </span>
      </div>
      <div className=" flex flex-col gap-12">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
};

export default Content;
