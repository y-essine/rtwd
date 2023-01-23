import { useEffect, useState } from "react";
import clsx from "clsx";
import SearchBar from "./searchbar/SearchBar";
import UserDropdownAvatar from "@user/components/UserDropdown";

const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false);

    const handleScroll = (e) => {
        if (window.scrollY < 25) return setScrolled(false);
        return setScrolled(true);
    };

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleScroll(e));
        return () =>
            window.removeEventListener("scroll", (e) => handleScroll(e));
    });

    return (
        <div
            className={clsx(
                "z-50 px-6 h-20 flex items-center justify-between backdrop-blur-md sticky top-0 duration-200",
                isScrolled && "bg-primary/80"
            )}
        >
            <div>
                <SearchBar isScrolled={isScrolled} />
            </div>
            <div className="relative flex items-center text-left">
                <UserDropdownAvatar />
            </div>
        </div>
    );
};

export default Navbar;
