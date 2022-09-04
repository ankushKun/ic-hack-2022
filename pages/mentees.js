import Navbar from "./components/navbar";
import Image from "next/image";
import Content from "./components/content";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Landing() {
    const [mentees, setMentees] = useState();

    useEffect(() => {
        axios.get("/mentees").then((res) => {
            console.log(res);
        })
    }, [])

    return (
        <Content>
            <div className="Mentor-Profile bg-white">
                <div className="flex items-stretch justify-center">
                    <p className="text-6xl text-black justify-center">Mentee List</p>
                </div>

                <div className="flex items-stretch justify-center">
                    <div className="card card-compact w-96  shadow-xl bg-white text-black my-5">
                        <figure><img src="/pfp.png" alt="Profile Photo" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Akash Saxena</h2>
                            <p>2nd year Chandigarh University</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-[#000000] hover:bg-green-900 active:bg-green-500 focus:outline-none ">View Progress</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-white shadow-xl text-black mx-10 my-5">
                        <figure><img src="/pfp.png" alt="Profile Photo" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Mayank Gupta</h2>
                            <p>2nd year Chandigarh University</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-[#000000] hover:bg-green-900 active:bg-green-500 focus:outline-none">View Progress</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-white shadow-xl text-black my-5">
                        <figure><img src="/pfp.png" alt="Profile Photo" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Sai Pranit</h2>
                            <p>3rd year Chandigarh University</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-[#000000] hover:bg-green-900 active:bg-green-500 focus:outline-none">View Progress</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="card card-compact w-96 bg-white shadow-xl text-black">
                        <figure><img src="/pfp.png" alt="Profile Photo" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Raghav Sharma</h2>
                            <p>2nd year Chandigarh University</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-[#000000] hover:bg-green-900 active:bg-green-500 focus:outline-none">View Progress</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-white shadow-xl text-black mx-10">
                        <figure><img src="/pfp.png" alt="Profile Photo" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shivangi Upadhyay</h2>
                            <p>2nd year Chandigarh University</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-[#000000] hover:bg-green-900 active:bg-green-500 focus:outline-none">View Progress</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-white shadow-xl text-black">
                        <figure><img src="/pfp.png" alt="Profile Photo" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Ankush Singh</h2>
                            <p>2nd year Chandigarh University</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-[#000000] hover:bg-green-900 active:bg-green-500 focus:outline-none">View Progress</button>
                            </div>
                        </div>
                    </div>
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
                                <div className="stat-value">6</div>
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
