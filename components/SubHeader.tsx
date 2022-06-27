import React from "react";

const SubHeader = () => {
  return (
    <div className="bg-white pt-1 border-b border-black/20 ">
      <div className="flex  justify-center mt-4 mb-3 items-center gap-5">
        <div className="bg-black py-1 rounded-full px-4">
          <p className="text-white">All</p>
        </div>
        <div className="bg-gray-200 border border-black/20 py-1 rounded-full px-4">
          <p className="text-black">Javascript</p>
        </div>
        <div className="bg-gray-200 border border-black/20 py-1 rounded-full px-4">
          <p className="text-black">Gaming</p>
        </div>
        <div className="bg-gray-200 border border-black/20 py-1 rounded-full px-4">
          <p className="text-black">Programming</p>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
