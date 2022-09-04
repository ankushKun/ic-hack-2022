import Navbar from "./components/navbar";
import Image from "next/image";
import Content from "./components/content";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Card({ name, year, college, mail }) {
    const router = new useRouter();
    return (
        <div className="card card-compact w-96 bg-white shadow-xl text-black mx-10 my-5">
            <figure><img src="/pfp.png" alt="Profile Photo" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{year}, {college}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-[#000000] hover:bg-green-900 active:bg-green-500 focus:outline-none" onClick={() => {
                        router.push("/profile/" + mail);
                    }}>View Progress</button>
                </div>
            </div>
        </div>);
}

export default function Landing() {
    const [mentees, setMentees] = useState();
    const [cards, setCards] = useState();
    const [leetData, setLeetData] = useState();
    const [gotLeet, setGotLeet] = useState(false);

    useEffect(() => {
        axios.get("/api/mentees").then((res) => {
            // console.log(res);
            var cList = [];
            console.log(res.data.users);
            for (var i in res.data.users) {
                console.log(i, res.data.users[i]);
                cList.push(<Card name={res.data.users[i].name} year={res.data.users[i].year} college={res.data.users[i].college} mail={res.data.users[i].email} />)
            }
            // console.log(cList);
            setCards(cList);
        })
    }, []);

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
        //         // setGithubData(res.data);
        //         // setGotGithub(true)
        //         // setGithub(localStorage.getItem("github"));
        //     })
        // }
    }, []);

    return (
        <Content>
            <div className="Mentor-Profile bg-white">
                <div className="flex items-stretch justify-center">
                    <p className="text-6xl text-black justify-center">Mentee List</p>
                </div>

                <div className="grid grid-cols-3 items-stretch justify-center">
                    {cards}
                </div>
                <br />
                <br />
                <div className="Message-mentee-list bg-white">
                    <div className="flex items-stretch justify-center">
                        <p className="text-6xl text-black justify-center">The more knowledge you<br /><span className="text-[#047857]"> share</span> the more <br />knowledge you<span className="text-[#047857]"> gain</span></p>
                        <div className="stats bg-primary text-primary-content mx-5">

                            <div className="stat">
                                <div className="stat-title">Total Students Mentored</div>
                                <div className="stat-value">40</div>
                                <div className="stat-actions">
                                    <button className="btn btn-sm btn-success text-white bg-[#000000] hover:bg-green-900 active:bg-green-500 focus:outline-none">Add Student</button>
                                </div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">Current Number of Students</div>
                                <div className="stat-value">{cards ? cards.length : "0"}</div>
                                <div className="stat-actions">
                                    <button className="btn btn-sm text-white bg-[#000000] hover:bg-red-800 active:bg-red-500 focus:outline-none">Remove Student</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <br />
                {/* <footer className="footer p-10 bg-neutral text-neutral-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer> */}
            </div>
        </Content>
    );

}
