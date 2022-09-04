import Navbar from "../components/navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import loginCheck from "../../utils/loginCheck";
import axios from "axios";
import Content from "../components/content";
import Link from "next/link";

export default function Landing() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [leetcode, setLeetcode] = useState();
    const [lcUpdated, setLcUpdated] = useState(false);
    const [github, setGithub] = useState();
    const [ghUpdated, setGhUpdated] = useState(false);
    const [isMentor, setIsMentor] = useState(false);
    const [year, setYear] = useState(0);
    const [college, setCollege] = useState();

    const router = useRouter();
    useEffect(() => {
        loginCheck(() => { router.push("/") },
            () => { router.push("/profile") });
    }, []);
    useEffect(() => {
        if (typeof window !== undefined) {
            const auth = localStorage.getItem("auth");
            const mail = auth.split(":")[0];
            setIsMentor(JSON.parse(localStorage.getItem("ismentor")));
            setEmail(mail);

            if (isMentor) {
                var prof = axios.post("/api/get-mentor", { email: mail });
            }
            else { var prof = axios.post("/api/get-mentee", { email: mail }); }
            prof.then((res) => {
                console.log(res.data);
                setName(res.data.name);
                setLeetcode(res.data.leetcode_username);
                setGithub(res.data.github_username);
                setYear(res.data.year);
                setCollege(res.data.college);
                localStorage.setItem("leetcode", res.data.leetcode_username);
                localStorage.setItem("github", res.data.github_username);
                localStorage.setItem("leetcode", res.data.leetcode_username);
                localStorage.setItem("github", res.data.github_username);
                localStorage.setItem("year", res.data.year);
                localStorage.setItem("college", res.data.college);
            });
            prof.catch((err) => {
                console.log(err);
            })
        }
    }, [])

    function updateUsernames() {
        if (lcUpdated) {
            axios.post("/api/update/mentee/leetcode", { updateEmail: email, leetcodeUname: leetcode }).then((res) => {
                // console.log(res.data);
                localStorage.setItem("leetcode", leetcode);
            }).catch((err) => { console.log(err) });
        }
        if (ghUpdated) {
            axios.post("/api/update/mentee/github", { updateEmail: email, githubUname: github }).then((res) => {
                // console.log(res.data);
                localStorage.setItem("github", github);
            }).catch((err) => { console.log(err) });
        }
    }

    return (
        <Content>
            <div className=" p-1 flex flex-row bg-white">
                {isMentor ? <div className="Mentor-Profile bg-white">
                    <div className="flex items-stretch justify-center">
                        <div className="card w-96  shadow-xl bg-white text-black">
                            <figure><img src="/pfp.png" alt="Profile Photo" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p>Professor at Chandigarh University</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                        <div className="card w-96  shadow-xl bg-white text-black mx-5">
                            <div className="h-48">
                                <div className="card-body">
                                    <h2 className="card-title">Students Mentored: 40</h2>

                                    <h2 className="card-title">Speciality:</h2>
                                    <ul className="list-disc">
                                        <li>Data Structures</li>
                                        <li>Web Development</li>
                                        <li>Database Management System</li>
                                        <li>Competitive Programming</li>
                                    </ul>

                                    <div className="card-actions justify-end">

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="Mentor-Profile-Message">
                        <div className="flex items-stretch justify-center px-10">
                            <p className="text-6xl text-black justify-center">For the <span className="text-[#047857]">world</span> you may be just a <br /><span className="text-[#047857]">human</span>, but for your mentee<br /> you are a <span className="text-[#047857]">Star</span></p>
                            <figure className="px-10 pt-10">
                                <Image src="/media/logo.svg" alt="Logo" className="rounded-xl" width={250} height={250} />
                            </figure>

                        </div>

                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="flex items-stretch justify-center">
                        <p className="text-6xl text-black justify-center">Your star performer 🤩</p>
                    </div>
                    <br />
                    <br />

                    <div className="flex items-stretch justify-center">
                        <div className="card w-96 bg-base-100 shadow-xl bg-white text-black font-family-inter w-fit">
                            <figure className="px-10 pt-10">
                                <Image src="/pfp.png" alt="Best Performer" className="rounded-xl" width={250} height={250} />
                            </figure>
                            <div className="card-body items-center text-center text-white">
                                <h2 className="card-title">Manas Tiwari</h2>
                                <p>Learning is good😄</p>

                            </div>
                            <div className="card-actions justify-end mr-5">
                                <button className="btn btn-primary bg-[#000000] hover:bg-green-900 active:bg-green-500 focus:outline-none">Show Appreciation</button>
                            </div>
                            {/* <div className="stats shadow my-1">

                                <div className="stat place-items-center">
                                    <div className="stat-title">C++</div>
                                    <div className="stat-value">86%</div>
                                    <div className="stat-desc">Last week</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Total questions solved</div>
                                    <div className="stat-value text-secondary">18</div>
                                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Skill set developed</div>
                                    <div className="stat-value">30%</div>
                                    <div className="stat-desc">↗︎ 90 (14%)</div>
                                </div>
                            </div> */}
                        </div>
                    </div >

                </div > :
                    <div className="Mentee-Profile bg-white">
                        <div className="flex items-stretch justify-center">
                            <div className="card w-96 shadow-xl text-black">
                                <figure><img src="/pfp.png" alt="avatar" /></figure>
                                <div className="card-body bg-gray-100">
                                    <h2 className="card-title">{name}</h2>
                                    <p>{year} year at {college}</p>
                                </div>
                            </div>
                            <div className="card w-96 shadow-xl bg-gray-100 text-black mx-5 ">
                                <div className="card-body">
                                    <h2 className="card-title">Topic of Interests</h2>
                                    <ul className="list-disc">
                                        <li>Data Structures</li>
                                        <li>Web Development</li>
                                        <li>Cryptography</li>
                                        <li>Web3</li>
                                    </ul>
                                    <br />
                                    <br />
                                    <h2 className="card-title">Links</h2>
                                    <ul className="list-disc">
                                        <li><Link href={"https://leetcode.com/" + leetcode} >Leetcode Profile</Link></li>
                                        <li><Link href={"https://leetcode.com/" + leetcode} >Github Profile</Link></li>
                                        <li>Email: {email}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-gray-100 h-min rounded-md p-3 shadow-lg m-2">
                                <label className="label">
                                    <span className="label-text text-black">Leetcode Username</span>
                                </label>
                                <input type="text" placeholder="Leetcode Username" defaultValue={leetcode} className="input input-bordered text-white" onChange={(e) => {
                                    console.log(e.target.value);
                                    setLeetcode(e.target.value);
                                    setLcUpdated(true);
                                }} />
                                <label className="label">
                                    <span className="label-text text-black">Github Username</span>
                                </label>
                                <input type="text" placeholder="Github Username" defaultValue={github} className="input input-bordered text-white" onChange={(e) => {
                                    console.log(e.target.value);
                                    setGithub(e.target.value);
                                    setGhUpdated(true);
                                }} />
                                <button className="block mx-auto btn mt-2" onClick={updateUsernames}>save</button>
                            </div>
                        </div>
                        {/* <div className="flex items-stretch justify-center my-10">
                            <div className="card w-96  shadow-xl bg-gray-100 text-black">
                                <div className="card-body">
                                    
                                </div>
                            </div> */}
                        {/* <div className="stats shadow mx-5">

                                <div className="stat place-items-center">
                                    <div className="stat-title">C++</div>
                                    <div className="stat-value">55%</div>
                                    <div className="stat-desc">Last week</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Total questions solved</div>
                                    <div className="stat-value text-secondary">9</div>
                                    <div className="stat-desc text-secondary">↗︎ 21.6 (1.5%)</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Skill set developed</div>
                                    <div className="stat-value">16%</div>
                                    <div className="stat-desc">↗︎23 (14%)</div>
                                </div>

                            </div> */}
                        {/* </div> */}

                        <br />
                        <br />
                        <br />
                        <div className="Mentee-Profile-Message bg-white">
                            <div className="flex items-stretch justify-center">
                                <p className="text-6xl text-black justify-center">A <span className="text-[#047857]">LeetCode</span> a day<br />keeps the fear of<br /> <span className="text-[#047857]">DSA</span> away.</p>
                                <figure className="px-10 pt-10">
                                    <Image src="/media/logo.svg" alt="Logo" className="rounded-xl" width={250} height={250} />
                                </figure>

                            </div>
                        </div>
                    </div>}
            </div></Content >
    );

}
