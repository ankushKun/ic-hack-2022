import Navbar from "./components/navbar";
import Image from "next/image";
import Content from "./components/content";
import { useRouter } from "next/router";
import { useEffect } from "react";
import loginCheck from "../utils/loginCheck";

export default function Landing() {
  const router = useRouter();
  useEffect(() => {
    loginCheck(() => { },
      () => { router.push("/profile"); });
  }, []);
  return (
    <div className="flex flex-row bg-white h-screen text-black">
      <div className="flex flex-row h-min fixed left-[18%] top-10 font-bold font-inter">
        <Image src="/media/logo.svg" height={120} width={120} layout="fixed" />
        <span className="text-5xl my-auto">Sail</span>
      </div>
      <div className="text-center font-inter font-semibold my-auto mx-auto px-5"><span className="text-7xl">One place to rule all<br /> your career needs</span><br /><br />
        <span className="font-lg font-light">A place to learn new skills and get a chance to get hired at amazing tech giants</span><br />
        <button className="btn btn-outline m-5 text-green-400 hover:bg-green-400" onClick={() => {
          router.push("/auth");
        }}>Get Started</button></div>
      <div className="my-auto mx-auto">
        <Image src="/media/landing_illus.svg" width={600} height={600} />
      </div>
    </div>
  );

}
