import { XIcon } from "@heroicons/react/outline";
import { signIn, useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { Video, VideoBody } from "../typings";
import { fetchVideos } from "../utils/fetchVideos";
import toast, { Toaster } from "react-hot-toast";
import Uploads from "../components/Upload";
import { GetServerSideProps } from "next";
import Login from "../components/Login";
import { useRouter } from "next/router";
import Home from "./index";

interface Props {
  videos: Video[];
}
const Upload = ({ videos: videoProps }: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [videos, setVideos] = useState<Video[]>(videoProps);

  if (!session) {
    return <Home videos={videos} />;
  }
  return (
    <div className="bg-[#f9f9f9] min-h-screen overflow-hidden">
      <Toaster />
      <Header />
      <div className="">
        <Uploads setVideos={setVideos} />
      </div>
    </div>
  );
};

export default Upload;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const videos = await fetchVideos();

  return {
    props: {
      videos,
    },
  };
};
