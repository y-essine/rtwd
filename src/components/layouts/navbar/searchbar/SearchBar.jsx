import { useRef } from "react";
import { Search } from "react-feather";

const SearchBar = () => {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div
            className="relative bg-secondary rounded-md cursor-pointer pr-3"
            onClick={() => handleFocus()}
        >
            <div className="absolute py-3 px-4 text-darker-t">
                <Search />
            </div>
            <input
                type="text"
                placeholder="Search..."
                className="py-3 pr-11 bg-transparent rounded-md w-0 opacity-0 focus:opacity-100 focus:pr-0 focus:pl-14 cursor-pointer focus:w-96 duration-200 outline-none"
                ref={inputRef}
            />
        </div>
    );
};

export default SearchBar;
