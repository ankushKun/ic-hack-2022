import Navbar from "../components/navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import loginCheck from "../../utils/loginCheck";
import axios from "axios";
import Content from "../components/content";
import Link from "next/link";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement } from "chart.js";
import { Bar, Line, Scatter, Bubble, Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend, ArcElement);


export default function Landing() {
    const router = new useRouter()
    const { email } = router.query;
    const [name, setName] = useState("");
    const [leetcode, setLeetcode] = useState();
    const [lcUpdated, setLcUpdated] = useState(false);
    const [github, setGithub] = useState();
    const [ghUpdated, setGhUpdated] = useState(false);
    const [isMentor, setIsMentor] = useState(false);
    const [year, setYear] = useState(0);
    const [college, setCollege] = useState();
    const [gotLeet, setGotLeet] = useState(false);
    const [leetData, setLeetData] = useState();

    var prof = axios.post("/api/get-mentee", { email: email });
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

    useEffect(() => {
        if (typeof window == undefined) { return }
        if (!gotLeet) {
            axios.post("/api/leet/" + localStorage.getItem("leetcode")).then((res) => {
                // console.log(res.data);
                setLeetData(res.data);
                setGotLeet(true);
            })
        }
        // if (!gotGithub) {
        //     axios.post("/api/github/" + localStorage.getItem("github")).then((res) => {
        //         // console.log(res.data);
        //         setGithubData(res.data);
        //         setGotGithub(true)
        //         setGithub(localStorage.getItem("github"));
        //     })
        // }
    }, []);

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
                            <div className="card w-96 shadow-xl bg-gray-100 text-black mx-5 ">
                                <div className="card-body">
                                    {/* <h2 className="card-title">Leetcode Stats</h2> */}
                                    {leetData ? <div className="scale-50 -ml-[90px] -mt-[130px]  w-[500px] h-[500px]">
                                        <Pie data={{
                                            labels: [
                                                'Easy',
                                                'Medium',
                                                'Hard',
                                                // 'Unsolved'
                                            ],
                                            datasets: [{
                                                label: 'Questions Solved',
                                                // data: [leetData.easySolved, leetData.mediumSolved, leetData.hardSolved, leetData.totalQuestions - leetData.totalSolved],
                                                data: [leetData.easySolved, leetData.mediumSolved, 3],
                                                backgroundColor: [
                                                    '#0E0',
                                                    '#0A0',
                                                    '#070',
                                                    // '#696969',
                                                ],
                                                hoverOffset: 4
                                            }]
                                        }} options={{
                                            elements: {
                                                arc: {
                                                    weight: 0.5,
                                                    borderWidth: 3
                                                },
                                            },
                                            plugins: {
                                                legend: {
                                                    position: 'top',
                                                    labels: {
                                                        font: {
                                                            size: 25
                                                        }
                                                    }
                                                },
                                                title: {
                                                    display: true,
                                                    text: 'Leetcode Questions Solved',
                                                    font: { size: 40 }
                                                }
                                            },
                                            cutout: 120,
                                            responsive: true,
                                            maintainAspectRatio: true
                                        }} />
                                    </div> : "Generating Stats..."}
                                    <div className="-mt-20">
                                        <Image className="" src={"https://github-readme-stats.vercel.app/api/top-langs/?username=" + github} width={300} height={250} />
                                        <Image className="" src={"https://github-readme-stats.vercel.app/api?username=" + github + "&show_icons=true"} width={550} height={250} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex items-stretch justify-center my-10">
                            <div className="card mr-12 shadow-xl bg-gray-100 text-black">
                                <div className="card-body">
                                    <h2 className="card-title">Links</h2>
                                    <ul className="list-disc">
                                        <li><Link href={"https://leetcode.com/" + leetcode} >Leetcode Profile</Link></li>
                                        <li><Link href={"https://leetcode.com/" + leetcode} >Github Profile</Link></li>
                                        <li>Email: {email}</li>
                                    </ul>
                                </div>
                            </div>

                        </div> */}

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
