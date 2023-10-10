import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
        <div className="ml-20 md:ml-0">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;