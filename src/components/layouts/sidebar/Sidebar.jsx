import { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="h-full w-28 lg:w-56 px-6 flex justify-center"
            onClick={() => {
                toggle();
            }}
        >
            <div className="h-20 text-xl font-extrabold flex items-center">
                Sidebar
            </div>
        </div>
    );
};

export default Sidebar;
