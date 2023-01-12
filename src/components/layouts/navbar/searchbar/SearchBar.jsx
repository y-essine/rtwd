import { Search } from "react-feather";
import clsx from "clsx";
import { useState } from "react";

const SearchBar = () => {
    const [isActive, setActive] = useState(false);
    const [isHovered, setHovered] = useState(false);

    return (
        <div
            className={clsx(
                "cursor-pointer py-4 hover:px-4 hover:w-18 hover:bg-zinc-800 rounded-md duration-200",
                isActive && ""
            )}
            onClick={() => setActive(true)}
        >
            <Search size={20} />
        </div>
    );
};

export default SearchBar;
