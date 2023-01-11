import { useState } from "react";
import { Home, Settings, User } from "react-feather";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const items = {
        home: {
            title: "Home",
            path: "/",
            icon: <Home size={28} />,
        },
        profile: {
            title: "Profile",
            path: "/profile",
            icon: <User size={28} />,
        },
        settings: {
            title: "Settings",
            path: "/settings",
            icon: <Settings size={26} />,
        },
    };

    return (
        <div
            className="h-full w-28 lg:w-56 px-6 flex flex-col items-center"
            onClick={() => {
                toggle();
            }}
        >
            <div className="h-20 text-xl font-extrabold flex items-center">
                Sidebar
            </div>
            <div className="pt-3 w-full">
                <SidebarItem {...items.home} />
                <SidebarItem {...items.profile} />
                <SidebarItem {...items.settings} />
            </div>
        </div>
    );
};

export default Sidebar;
