import clsx from "clsx";
import { useRef, useState } from "react";
import { Search } from "react-feather";

const SearchBar = ({ isScrolled }) => {
    const [isActive, setActive] = useState(false);
    const inputRef = useRef();

    const handleBlur = () => {
        setActive(false);
    };

    const handleFocus = () => {
        inputRef.current.focus();
        setActive(true);
    };

    return (
        <div
            className={clsx(
                "relative bg-secondary rounded-md pr-3",
                !isActive && "cursor-pointer",
                isScrolled && "bg-black/30"
            )}
            onClick={() => handleFocus()}
        >
            <div
                className={clsx(
                    "absolute py-3 px-4 text-darker-t duration-200 bg-secondary z-10 rounded-md",
                    isActive && "!text-primary-t",
                    isScrolled && "bg-transparent"
                )}
            >
                <Search />
            </div>
            <input
                type="text"
                placeholder="Search..."
                className={clsx(
                    "py-3 pr-11 bg-transparent rounded-md w-0 opacity-0 cursor-pointer duration-200 outline-none",
                    isActive &&
                        "cursor-text !w-64 xs:!w-96 opacity-100 pr-0 pl-14"
                )}
                ref={inputRef}
                onBlur={() => handleBlur()}
                onInput={(e) => console.log(e.target.value)}
                onFocus={() => setActive(true)}
            />
        </div>
    );
};

export default SearchBar;
