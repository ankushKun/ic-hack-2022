import Link from "next/link";
import Image from "next/image";
import loginCheck from "../../utils/loginCheck";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AuthLand() {
  const router = useRouter();
  useEffect(() => {
    loginCheck(() => { router.push("/auth"); },
      () => { router.push("/profile"); });
  }, []);

  return (
    <div className=" bg-white">
      <div className="w-screen mx-auto text-center">
        <Link href="/">
          <Image src="/media/logo.svg" width={100} height={100} className="cursor-pointer" />
        </Link>
      </div>
      <div className="mentor-mentee page grid grid-cols-2 -mt-16 pt-3">
        <div className="card w-96 shadow-xl bg-white text-[#000000] ml-auto my-20 w-526 mx-166">
          <figure><img src="https://placeimg.com/400/225/arch" /></figure>
          <div className="card-body">
            <h2 className="card-title ">Mentor</h2>
            <p className="font-inter">Who can be a mentor ?
              Anyone with ample amount ok knowledge in coding and is willing to share and help others with that knowledge can be a mentor.
              <br />
              <ul className="list-disc">
                <li>A professor</li>
                <li>A senior</li>
                <li>Already placed engineer looking for talented students for referral</li>
              </ul>
            </p>
            <div className="card-actions justify-end">
              <Link href="/auth/mentor"><button className="btn btn-primary bg-[#000000] hover:bg-green-900">LOGIN</button></Link>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-xl bg-[#FFFFFF] text-[#000000] mr-auto ml-5 my-20 w-526">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <span className="card-title">Mentee</span>
            <p className="font-inter">Who can be a mentee ?<br />
              A student willing to track his/her progress and learn under the guidance of expert mentors can be mentee.<br />
              <ul className="list-disc">
                <li> A student from any domain</li>
                <li>A student willing to learn</li>
                <li>People looking to enhance their knowldege</li></ul>
            </p>
            <div className="card-actions justify-end">
              <Link href="/auth/mentee"><button className="btn btn-primary bg-[#000000] hover:bg-green-900">LOGIN</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
