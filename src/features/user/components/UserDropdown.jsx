import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { Settings, User as Profile, LogOut } from "react-feather";
import clsx from "clsx";
import Avatar from "@components/ui/avatars/Avatar";
import Dropdown from "@components/ui/dropdown/Dropdown";
import LogoutModal from "./modals/LogoutModal";

const UserDropdownAvatar = ({ user }) => {
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

    return (
        <>
            <Dropdown element={<Avatar className="h-12 w-12" />}>
                <div>
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                to="/profile"
                                className={clsx(
                                    active ? "bg-accent" : "text-primary-t/80",
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
                                    active ? "bg-accent" : "text-primary-t/80",
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
                                active ? "bg-accent" : "text-primary-t/80",
                                "block px-4 py-2 text-sm cursor-pointer"
                            )}
                            onClick={() => setLogoutModalOpen(true)}
                        >
                            <span className="flex items-center">
                                <LogOut size={20} className="w-6 mr-2" /> Logout
                            </span>
                        </a>
                    )}
                </Menu.Item>
            </Dropdown>
            <LogoutModal
                openNow={isLogoutModalOpen}
                onClose={() => setLogoutModalOpen(false)}
            />
        </>
    );
};

export default UserDropdownAvatar;
