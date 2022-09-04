import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import hash from "../../utils/hash";
import loginCheck from "../../utils/loginCheck";

function checkEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

export default function MenteeAuth() {
    const [signup, setSignup] = useState(false);
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [rePass, setRePass] = useState(false);
    const [name, setName] = useState();
    const [phone, setPhone] = useState();

    const router = useRouter();

    // useEffect(() => {
    //     loginCheck(() => {
    //         router.push("/auth");
    //     });
    // }, []);

    function checkSignupInfo() {
        if (!email) {
            alert("Please enter an email address");
            return false;
        } else if (checkEmail(email)) {
            console.log("email ok");
        } else {
            alert("Illegal Email Address");
            return false;
        }
        if (!pass) {
            alert("Please enter a password");
            return false;
        } else if (!rePass) {
            alert("Please re enter password");
            return false;
        } else if (pass == rePass) {
            console.log("pass matched");
        } else {
            alert("Passwords dont match");
            return false;
        }
        if (!phone) {
            alert("Please enter phone number");
            return false;
        } else if (phone.match(/\d/g).length === 10) {
            console.log("phone ok");
        } else {
            alert("Illegal phone number");
            return false;
        }
        return true;
    }

    function checkLoginInfo() {
        if (!email) {
            alert("Please enter an email address");
            return false;
        } else if (checkEmail(email)) {
            console.log("email ok");
        } else {
            alert("Illegal Email Address");
            return false;
        }
        if (!pass) {
            alert("Please enter a password");
            return false;
        } else {
            console.log("pass ok");
        }
        return true;
    }

    function doSignup() {
        if (checkSignupInfo()) {
            var a = axios.post("/api/auth/mentor-signup", {
                name: name,
                email: email,
                phone: phone,
                pass: pass
            });
            a.then((res) => {
                console.log(res.data);
                localStorage.setItem("loggedin", true);
                localStorage.setItem("auth", email + ":" + hash(pass));
                localStorage.setItem("ismentor", true);
                router.push("/");
            });
            a.catch((err) => {
                console.log(err.response.data);
            });
        }
    }

    function doLogin() {
        if (checkLoginInfo()) {
            var a = axios.post("/api/auth/mentor-login", {
                email: email,
                pass: pass,
            });
            a.then((res) => {
                console.log(res.data);
                localStorage.setItem("loggedin", true);
                localStorage.setItem("auth", email + ":" + hash(pass));
                localStorage.setItem("ismentor", true);
                router.push("/");
            });
            a.catch((err) => {
                console.log(err.response.data);
                alert(err.response.data.error);
            });
        }
    }

    /* useEffect(() => { */
    /*   var a = axios.post("/api/signup", { */
    /*     name: "Ankush", */
    /*     email: "abcd@gmail.com", */
    /*     phone: "696969696", */
    /*     pass: "pppewpqopeqweqwpqew", */
    /*     institute: "CU", */
    /*     designation: "Student", */
    /*   }); */
    /*   a.then((res) => { */
    /*     console.log(res.data); */
    /*   }); */
    /* }, []); */

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-[#000000] mx-40">Mentor {signup ? "Signup" : "Login"}</h1>
                    <p className="py-6 text-grey-200 mx-40">The best way to gain knowledge is by sharing some ❤️</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white my-30">
                    <div className="card-body">
                        {signup ? <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Full Name</span>
                            </label>
                            <input type="text" placeholder="Full Name" className="input input-bordered" onChange={(e) => {
                                console.log(e.target.value);
                                setName(e.target.value);
                            }} />
                        </div> : ""}
                        <div className="form-control">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="text" placeholder="Email" className="input input-bordered" onChange={(e) => {
                                    console.log(e.target.value);
                                    setEmail(e.target.value);
                                }} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="text" placeholder="Password" className="input input-bordered" onChange={(e) => {
                                    console.log(e.target.value);
                                    setPass(e.target.value);
                                }} />
                            </div>
                            {signup ? <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="Confirm Password" className="input input-bordered" onChange={(e) => {
                                    console.log(e.target.value);
                                    setRePass(e.target.value);
                                }} />
                            </div> : ""}
                            {signup ? <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black"> Phone Number</span>
                                </label>
                                <input type="text" placeholder="Phone Number" className="input input-bordered" onChange={(e) => {
                                    console.log(e.target.value);
                                    setPhone(e.target.value);
                                }} />
                            </div> : ""}
                            {signup ? <label className="label">
                                <div className="label-text-alt link link-hover text-black" onClick={(e) => {
                                    console.log("changed to login");
                                    setSignup(false);
                                }}>Login?</div>
                            </label> : <label className="label">
                                <div className="label-text-alt link link-hover text-black" onClick={(e) => {
                                    console.log("changed to signup");
                                    setSignup(true);
                                }}>Signup?</div>
                            </label>}
                        </div>
                        {signup ? <div className="form-control mt-6">
                            <button className="btn btn-primary bg-[#000000] hover:bg-green-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={doSignup}>Signup</button>
                        </div> : <div className="form-control mt-6">
                            <button className="btn btn-primary bg-[#000000] hover:bg-green-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={doLogin}>Login</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}
