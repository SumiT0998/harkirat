import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/Components/VideoCard";
import { VideoGrid } from "@/Components/videoGrid";
import { Appbar } from "@/Components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Appbar/>
      <VideoGrid />
    </div>
  );
}
