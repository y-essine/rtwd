import { Link } from "react-router-dom";

const SidebarItem = ({ title, path, icon }) => {
    return (
        <Link
            to={"/dashboard" + path}
            className="flex justify-center lg:justify-start lg:pl-8 py-4 hover:bg-white/5 cursor-pointer rounded-md select-none"
        >
            {icon}
            <div className="ml-3 text-xl font-bold hidden lg:block">
                {title}
            </div>
        </Link>
    );
};

export default SidebarItem;
