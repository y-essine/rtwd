import clsx from "clsx";
import { useRef, useState } from "react";
import { Search } from "react-feather";

const TableSearch = ({ onSearch, placeholder }) => {
    const inputRef = useRef();
    const [isActive, setActive] = useState(false);

    return (
        <div className="relative w-96 duration-200">
            <div
                className={clsx(
                    "absolute py-3 px-4 text-darker-t duration-200 rounded-md",
                    isActive && "!text-primary-t"
                )}
            >
                <Search />
            </div>
            <input
                type="text"
                placeholder={placeholder}
                className={clsx(
                    "p-3 pr-0 pl-14 rounded-md outline-none hover:bg-secondary/50 focus:bg-secondary duration-200"
                )}
                ref={inputRef}
                onInput={() => {
                    onSearch(inputRef.current.value.toLowerCase());
                }}
                onBlur={() => {
                    setActive(false);
                }}
                onFocus={() => {
                    setActive(true);
                }}
            />
        </div>
    );
};

export default TableSearch;
