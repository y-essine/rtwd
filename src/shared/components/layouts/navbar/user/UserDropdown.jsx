import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import clsx from "clsx";
import { Settings, User as Profile } from "react-feather";
import Avatar from "@components/ui/avatars/Avatar";
import Dropdown from "@components/ui/dropdown/Dropdown";

const UserDropdownAvatar = ({ user }) => {
    return (
        <Dropdown element={<Avatar className="h-12 w-12" />}>
            <div>
                <Menu.Item>
                    {({ active }) => (
                        <Link
                            to="/profile"
                            className={clsx(
                                active ? "bg-accent" : "text-primary-t",
                                "block px-4 py-2 text-sm cursor-pointer"
                            )}
                        >
                            <span className="flex items-center">
                                <Profile size={22} className="w-6 mr-2" />{" "}
                                Profile
                            </span>
                        </Link>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <Link
                            to="/settings"
                            className={clsx(
                                active ? "bg-accent" : "text-primary-t",
                                "block px-4 py-2 text-sm cursor-pointer"
                            )}
                        >
                            <span className="flex items-center">
                                <Settings size={20} className="w-6 mr-2" />{" "}
                                Settings
                            </span>
                        </Link>
                    )}
                </Menu.Item>
            </div>
            <Menu.Item>
                {({ active }) => (
                    <a
                        className={clsx(
                            active ? "bg-accent" : "text-primary-t",
                            "block px-4 py-2 text-sm cursor-pointer"
                        )}
                        // onClick={() => onDeleteClick()}
                    >
                        Logout
                    </a>
                )}
            </Menu.Item>
        </Dropdown>
    );
};

export default UserDropdownAvatar;
