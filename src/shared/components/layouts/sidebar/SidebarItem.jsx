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
        if (pathname === path) {
            setActive(true);
            setTitle(title);
        } else {
            setActive(false);
        }
    }, [location.pathname]);

    return (
        <Link
            to={path}
            className={clsx(
                "flex justify-center lg:justify-start lg:pl-8 py-3 xs:py-4 hover:bg-secondary/50 cursor-pointer rounded-md select-none duration-200 text-primary-t/80",
                isActive && "!bg-secondary !text-primary-t"
            )}
        >
            <div className="px-4 xs:px-0">{icon}</div>
            <div className="ml-3 text-xl font-bold hidden lg:block">
                {title}
            </div>
        </Link>
    );
};

export default SidebarItem;
