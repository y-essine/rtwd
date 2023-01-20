import { Outlet } from "react-router-dom";
import Sidebar from "@components/layouts/sidebar/Sidebar";
import Navbar from "@components/layouts/navbar/Navbar";

const Dashboard = () => {
    return (
        <div className="flex h-full">
            <Sidebar />
            <div className="h-full w-full xs:w-[calc(100%-7rem)] lg:w-[calc(100%-14rem)] pb-16 xs:pb-0">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
