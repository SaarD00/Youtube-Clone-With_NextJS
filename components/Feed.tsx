import React, { useState } from "react";
import { Video } from "../typings";
import Post from "./Post";

interface Props {
  videos: Video[];
}

function Feed({ videos: videosProps }: Props) {
  const [videos, setVideos] = useState<Video[]>(videosProps);
  return (
    <div>
      <div>
        {videos.map((video) => (
          <Post key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
