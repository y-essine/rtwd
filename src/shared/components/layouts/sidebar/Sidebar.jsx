import { Home, Settings, User, Users, Tag } from "react-feather";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
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
        users: {
            title: "Users",
            path: "/users",
            icon: <Users size={28} />,
        },
        products: {
            title: "Products",
            path: "/products",
            icon: <Tag size={26} />,
        },
    };

    return (
        <>
            <div className="h-screen hidden xs:flex w-28 lg:w-56 px-6 flex-col items-center justify-between sticky top-0">
                <div className="w-full">
                    <div className="h-20 text-xl font-extrabold flex items-center justify-center">
                        <Link
                            to={items.home.path}
                            className="hover:text-accent"
                        >
                            Sidebar
                        </Link>
                    </div>
                    <div className="pt-3 space-y-2">
                        <SidebarItem {...items.home} />
                        <SidebarItem {...items.users} />
                        <SidebarItem {...items.products} />
                    </div>
                </div>
                {/* <div className="pb-3 w-full space-y-2">
                    <SidebarItem {...items.profile} />
                    <SidebarItem {...items.settings} />
                </div> */}
            </div>
            <div className="xs:hidden fixed bottom-0 h-16 w-full bg-primary/80 backdrop-blur-md z-20">
                <div className="flex items-center justify-center gap-10 font-bold h-full">
                    <SidebarItem {...items.home} />
                    <SidebarItem {...items.users} />
                    <SidebarItem {...items.products} />
                </div>
            </div>
        </>
    );
};

export default Sidebar;
