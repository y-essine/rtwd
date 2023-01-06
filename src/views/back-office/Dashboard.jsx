import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layouts/sidebar/Sidebar";
import Navbar from "@/components/layouts/navbar/Navbar";

const Dashboard = () => {
    return (
        <div className="flex w-full h-full">
            <Sidebar />
            <div className="h-full">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
