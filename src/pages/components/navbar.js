import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isMentor, setIsMentor] = useState(false);

    useEffect(() => {
        if (typeof window !== undefined) {
            setIsMentor(JSON.parse(localStorage.getItem("ismentor")));
        }
    }, [])

    const router = new useRouter();
    function logout() {
        console.log("logged out");
        localStorage.clear();
        router.push("/auth");
    }

    return (
        <div className="bg-white">
            <ul className="menu rounded menu-vertical p-1 bg-slate-700 h-full text-white">
                <li>
                    <div>
                        <Link href="/">
                            <svg className="w-6 h-6" viewBox="0 0 51 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8074 16.3806C15.8943 16.5898 16.0654 16.7512 16.2762 16.8228L24.8687 19.7418C24.9763 19.7784 25.0888 19.7897 25.1983 19.7767C25.3024 19.7643 25.4038 19.7298 25.4956 19.6741L32.9565 15.1461C33.1561 15.025 33.2891 14.8163 33.3175 14.5799C33.3458 14.3434 33.2664 14.1053 33.102 13.9338L22.9306 3.32929C22.7569 3.14827 22.5097 3.06296 22.266 3.1009C22.0228 3.13871 21.814 3.29474 21.7056 3.51962L15.8237 15.7332C15.7265 15.935 15.7205 16.1713 15.8074 16.3806Z" fill="#FFCC02" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.6776 22.0341C25.638 21.7407 25.4395 21.4934 25.1653 21.3956L2.51148 13.3228C2.19729 13.2108 1.85084 13.3184 1.6546 13.5891C1.4585 13.8597 1.45771 14.2311 1.65269 14.5078L12.8597 30.409C13.0291 30.6494 13.3064 30.7648 13.5744 30.7329C13.6895 30.7191 13.8029 30.6782 13.9052 30.6082L25.3521 22.7798C25.5911 22.6163 25.7171 22.3275 25.6776 22.0341Z" fill="#EFAE07" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M47.1153 7.97063C46.8586 7.75081 46.4944 7.72461 46.2155 7.90587L13.2674 29.3116C12.9692 29.5053 12.844 29.8851 12.9657 30.228C13.0874 30.5711 13.4234 30.7843 13.7761 30.744L39.392 27.8163L39.3957 27.8159C39.6687 27.7833 39.9019 27.605 40.005 27.3451L47.3371 8.8668C47.4616 8.5531 47.3718 8.19038 47.1153 7.97063Z" fill="#FFCC02" />
                            </svg>
                        </Link>
                    </div>
                </li>
                {isMentor ? <li>
                    <div>
                        <Link href="/mentees">
                            <svg className="h-7 w-7" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26 10H18C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12V28C16 28.5304 16.2107 29.0391 16.5858 29.4142C16.9609 29.7893 17.4696 30 18 30H30C30.5304 30 31.0391 29.7893 31.4142 29.4142C31.7893 29.0391 32 28.5304 32 28V16L26 10Z" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28 25H20" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28 21H20" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 17H21H20" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M26 10V16H32" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </li> : <li>
                    <div>
                        <Link href="/stats">
                            <svg className="w-7 h-7" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.21 23.8901C32.5738 25.3946 31.5788 26.7203 30.3119 27.7514C29.0449 28.7825 27.5447 29.4875 25.9424 29.8049C24.3401 30.1222 22.6844 30.0422 21.1201 29.5719C19.5558 29.1015 18.1306 28.2551 16.969 27.1067C15.8074 25.9583 14.9448 24.5428 14.4566 22.984C13.9684 21.4252 13.8695 19.7706 14.1686 18.1647C14.4676 16.5589 15.1555 15.0507 16.172 13.7721C17.1886 12.4935 18.5029 11.4834 20 10.8301" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M34 20C34 18.6868 33.7413 17.3864 33.2388 16.1732C32.7362 14.9599 31.9997 13.8575 31.0711 12.9289C30.1425 12.0003 29.0401 11.2638 27.8268 10.7612C26.6136 10.2587 25.3132 10 24 10V20H34Z" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </li>}
                <div className="h-full"></div>


                <div className="dropdown dropdown-right dropdown-end mx-auto">
                    <div className="indicator">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item m-3">0</span>
                        </label>
                    </div>
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-vertical dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/profile" className="justify-between">
                                No New Notifications
                                {/* <span className="badge">New</span> */}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="dropdown dropdown-right dropdown-end mx-auto">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src="/pfp.png" width={50} height={50} />
                        </div>
                    </label>
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-vertical dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/profile" className="justify-between">
                                Profile
                                {/* <span className="badge">New</span> */}
                            </Link>
                        </li>
                        <li><button onClick={logout}>Logout</button></li>
                    </ul>
                </div>
            </ul>
        </div>);
}