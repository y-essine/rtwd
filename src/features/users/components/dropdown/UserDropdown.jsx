import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Dropdown from "@/shared/components/ui/dropdown/Dropdown";
import useStore from "@users/store";

const UserDropdown = ({ element, user }) => {
    const removeUserFn = useStore((state) => state.removeUser);

    const deleteUser = (user) => {
        removeUserFn(user.id);
    };

    return (
        <Dropdown element={element}>
            <Menu.Item>
                {({ active }) => (
                    <a
                        href="#"
                        className={clsx(
                            active ? "bg-accent" : "text-primary-t",
                            "block px-4 py-2 text-sm"
                        )}
                    >
                        Edit
                    </a>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                    <a
                        href="#"
                        className={clsx(
                            active ? "bg-accent" : "text-primary-t",
                            "block px-4 py-2 text-sm"
                        )}
                    >
                        Delete
                    </a>
                )}
            </Menu.Item>
        </Dropdown>
    );
};

// UserDropdown.proptypes = {
//     user: PropTypes.element.isRequired,
// };

export default UserDropdown;
