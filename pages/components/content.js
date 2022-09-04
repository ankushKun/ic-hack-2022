import Navbar from "./navbar";

export default function Content(props) {
    return (
        <div className=" p-1 flex flex-row bg-white h-screen">
            <Navbar />
            <div className="w-full p-1 flex flex-col text-black h-screen overflow-scroll mx-auto">
                {props.children}
            </div>
        </div>
    );
}