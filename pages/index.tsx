import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { Video } from "../typings";
import { Toaster } from "react-hot-toast";
import { fetchVideos } from "../utils/fetchVideos";
import { useSession } from "next-auth/react";

interface Props {
  videos: Video[];
}
const Home = ({ videos }: Props) => {
  const { data: session } = useSession();
  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      <Head>
        <title>Youtube Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SubHeader />
      <Feed videos={videos} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const videos = await fetchVideos();

  return {
    props: {
      videos,
    },
  };
};
