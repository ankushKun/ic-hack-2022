import Navbar from "./components/navbar";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement } from "chart.js";
import { Bar, Line, Scatter, Bubble, Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend, ArcElement);

export default function Landing() {
    const [gotLeet, setGotLeet] = useState(false);
    const [leetData, setLeetData] = useState();
    const [gotGithub, setGotGithub] = useState(false);
    const [githubData, setGithubData] = useState();
    const [github, setGithub] = useState();

    useEffect(() => {
        if (typeof window == undefined) { return }
        if (!gotLeet) {
            axios.post("/api/leet/" + localStorage.getItem("leetcode")).then((res) => {
                // console.log(res.data);
                setLeetData(res.data);
                setGotLeet(true);
            })
        }
        if (!gotGithub) {
            axios.post("/api/github/" + localStorage.getItem("github")).then((res) => {
                // console.log(res.data);
                setGithubData(res.data);
                setGotGithub(true)
                setGithub(localStorage.getItem("github"));
            })
        }
    }, []);

    return (
        <div className="h-screen p-1 flex flex-row bg-white text-black">
            <Navbar />
            <div className="w-full p-1 flex h-screen overflow-scroll">
                <div className="text-xl mx-5">
                    <div className="font-light mt-4">Leetcode Stats</div>
                    {leetData ? <div className="scale-75 w-[450px] h-[450px] right-0 fixed">
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
                    </div> : ""}
                    {/* <div className="bg-gray-200 rounded p-2 my-2 font-bold"> */}
                    <div className="bg-green-500 rounded p-2 my-2 font-bold">
                        <div className="flex flex-row">
                            <div className="bg-white rounded p-2 my-2 mr-2">
                                <span className="text-black text-sm font-bold ml-2">TOTAL QUESTIONS</span>
                                <span className=" block font-bold ml-2 text-black">{leetData ? leetData.totalQuestions : "..."}</span>
                            </div>
                            <div className="bg-white rounded p-2 my-2">
                                <span className="text-black text-sm font-bold ml-2">GLOBAL RANKING</span>
                                <span className=" block font-bold ml-2 text-black">{leetData ? leetData.ranking : "..."}</span>
                            </div>
                        </div>
                        <span className="text-black text-sm font-bold ml-2">SOLVED</span>
                        <span className="text-black block font-bold ml-2">{leetData ? leetData.totalSolved : "..."}</span>
                        <div className="flex flex-row ">
                            <div className=" text-black m-2 text-sm font-bold">EASY<div className="font-bold text-lg text-black">{leetData ? leetData.easySolved + "/" + leetData.totalEasy : "..."}</div></div>
                            <div className="text-black m-2 text-sm font-bold">MEDIUM<div className="font-bold text-lg text-black">{leetData ? leetData.mediumSolved + "/" + leetData.totalMedium : "..."}</div></div>
                            <div className="text-black m-2 text-sm font-bold">HARD<div className="font-bold text-lg text-black">{leetData ? leetData.hardSolved + "/" + leetData.totalHard : "..."}</div></div>
                        </div>
                    </div>


                    <div className="grid grid-cols-5 gap-2">
                        {/* <div className="rounded bg-gray-600 p-2 text-white font-bold">
                            <div className="font-light">Rank</div>
                            #{leetData ? leetData.ranking : "..."}
                        </div>
                        <div className="rounded bg-gray-600 p-2 text-white font-bold">
                            <div className="font-light">Questions Solved</div>
                            {leetData ? leetData.totalSolved : "..."}
                        </div>
                        <div className="rounded bg-gray-600 p-2 text-white font-bold">
                            <div className="font-light">Easy</div>
                            {leetData ? leetData.easySolved : "..."}
                        </div>
                        <div className="rounded bg-gray-600 p-2 text-white font-bold">
                            <div className="font-light">Medium</div>
                            {leetData ? leetData.mediumSolved : "..."}
                        </div>
                        <div className="rounded bg-gray-600 p-2 text-white font-bold">
                            <div className="font-light">Hard</div>
                            {leetData ? leetData.hardSolved : "..."}
                        </div> */}
                    </div>
                    <div className="font-light my-2">Github Stats</div>
                    <div className="rounded bg-black p-2 my-2 mr-2 inline text-white font-bold w-fit">
                        {githubData ? githubData.public_repos : "..."} Repositories
                    </div>
                    <div className="rounded bg-black p-2 my-2 inline text-white font-bold w-[100px]">
                        {githubData ? githubData.public_gists : "..."} Gists
                    </div>
                    <br />
                    <br />
                    <div className="flex items-stretch justify-center">
                        <div className="my-2">
                            <Image className="" src={"https://github-readme-stats.vercel.app/api/top-langs/?username=" + github} width={267} height={250} />
                            <Image className="" src={"https://github-readme-stats.vercel.app/api?username=" + github + "&show_icons=true"} width={638} height={250} mx-5 />
                        </div>
                    </div>

                </div>

            </div>
        </div >
    );

}
