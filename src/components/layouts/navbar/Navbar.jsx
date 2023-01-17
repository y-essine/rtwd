import { useEffect, useState } from "react";
import clsx from "clsx";
import SearchBar from "./searchbar/SearchBar";
import Avatar from "@/components/ui/avatars/Avatar";
import Dropdown from "@/components/ui/dropdown/Dropdown";

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
                <button
                    id="menu-button"
                    type="button"
                    aria-expanded="true"
                    aria-haspopup="true"
                >
                    <Dropdown
                        element={<Avatar className="h-12 w-12" hover />}
                    />
                </button>
                {/* <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-secondary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        <a
                            href="#"
                            className="hover:bg-gray-200/5 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                        >
                            Account settings
                        </a>
                        <a
                            href="#"
                            className="hover:bg-gray-200/5 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-1"
                        >
                            Support
                        </a>
                        <a
                            href="#"
                            className="hover:bg-gray-200/5 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                        >
                            License
                        </a>
                        <form method="POST" action="#" role="none">
                            <button
                                type="submit"
                                className="hover:bg-gray-200/5 block w-full px-4 py-2 text-left text-sm"
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-3"
                            >
                                Sign out
                            </button>
                        </form>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;
