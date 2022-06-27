import { XIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { Video, VideoBody } from "../typings";
import { fetchVideos } from "../utils/fetchVideos";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  setVideos: Dispatch<SetStateAction<Video[]>>;
}
const Uploads = ({ setVideos }: Props) => {
  const [input, setInput] = useState<string>("");
  const [input2, setInput2] = useState<string>("");

  const { data: session } = useSession();

  const postVideo = async () => {
    const videoInfo: VideoBody = {
      text: input,
      username: session?.user?.name || "Unknown",
      profileImg: session?.user?.image || "https://links.papareact.com/gll",
      file: input2,
    };

    const result = await fetch(`/api/addVideo`, {
      body: JSON.stringify(videoInfo),
      method: "POST",
    });

    const json = await result.json();

    const newVideos = await fetchVideos();
    setVideos(newVideos);

    toast.success("Video Posted", {
      icon: "😉",
    });
    return json;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    postVideo();
    setInput("");
    setInput2("");
  };
  return (
    <div className=" flex justify-center h-screen items-center  w-screen">
      <div className="bg-white  p-3 flex gap-5 flex-col justify-center ml-32 items-center">
        <div className="flex justify-between w-96 items-center ">
          <p>Publish Video Modal</p>
          <XIcon className="h-5 w-5" />
        </div>
        <div>
          <p>Details</p>
          <form>
            <div className="p-2">
              <input
                required
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                value={input}
                type="text"
                className="border border-black/20 outline-none p-2 w-96 "
                placeholder={!session ? "Sign In to Tweet!" : "Title"}
              />
            </div>
            <div className="p-2">
              <input
                required
                onChange={(e) => {
                  setInput2(e.target.value);
                }}
                value={input2}
                type="text "
                className="border border-black/20 outline-none p-2 w-96 "
                placeholder={!session ? "Sign In to Tweet!" : "Video link"}
              />
            </div>
            <div className="flex items-center justify-center mt-2">
              <button
                onClick={handleSubmit}
                disabled={
                  !session ||
                  !input ||
                  !input2 ||
                  input.length > 140 ||
                  input2.length > 140
                }
                className="p-2 bg-[#FF0000] disabled:bg-[#432C2C] disabled:cursor-not-allowed transition-all duration-150 disabled:text-white/50 rounded-full cursor-pointer text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Uploads;
