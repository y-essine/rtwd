import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({ title, path, icon }) => {
    const [isActive, setActive] = useState(false);
    const location = useLocation();

    const setTitle = (title) => {
        document.title = title + " - Dashboard";
    };

    useEffect(() => {
        const pathname = location.pathname;
        if (pathname === "/dashboard" + path) {
            setActive(true);
            setTitle(title);
        } else {
            setActive(false);
        }
    }, [location.pathname]);

    return (
        <Link
            to={"/dashboard" + path}
            className={clsx(
                "flex justify-center lg:justify-start lg:pl-8 py-4 hover:bg-secondary/50 cursor-pointer rounded-md select-none duration-200",
                isActive && "!bg-secondary"
            )}
        >
            {icon}
            <div className="ml-3 text-xl font-bold hidden lg:block">
                {title}
            </div>
        </Link>
    );
};

export default SidebarItem;
