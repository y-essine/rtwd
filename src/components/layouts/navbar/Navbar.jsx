import SearchBar from "./searchbar/SearchBar";
import Avatar from "@/components/ui/avatars/Avatar";

const Navbar = () => {
    return (
        <div className="px-6 h-20 flex items-center justify-between">
            <div>
                <SearchBar />
            </div>
            <div>
                <Avatar className="h-12 w-12" />
            </div>
        </div>
    );
};

export default Navbar;
