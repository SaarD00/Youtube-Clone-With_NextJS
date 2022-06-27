import { VideoCameraIcon } from "@heroicons/react/outline";
import React from "react";
import { Video } from "../typings";
import ReactPlayer from "react-player";
import TimeAgo from "react-timeago";

interface Props {
  video: Video;
}
function Post({ video }: Props) {
  console.log();
  return (
    <div className="grid md:inline-flex mx-7">
      <div className="  flex justify-center items-center mt-5 space-y-10 lg:space-y-0 ">
        <div
          key={video._id}
          className="flex flex-col  justify-center hover:scale-105 cursor-pointer transition-all duration-200"
        >
          <div className="flex flex-col rounded-lg">
            <ReactPlayer url={video.file} controls height={250} width={450} />
          </div>
          <div className="mt-2 flex justify-start gap-5">
            <img
              src={video.profileImg}
              className="rounded-full object-contain h-10"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-lg w-64 object-contain">
                {video.text}
              </p>
              <p className="text-xs space-x-1  text-gray-600">
                {video.username} {"  "}{" "}
                <span className="font-extrabold">.</span>{" "}
                <span>
                  <TimeAgo date={video._createdAt} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
