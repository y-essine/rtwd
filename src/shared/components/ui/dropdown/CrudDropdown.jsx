import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Dropdown from "@/shared/components/ui/dropdown/Dropdown";

const CrudDropdown = ({ element, onEditClick, onDeleteClick }) => {
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
                        onClick={() => onEditClick()}
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
                        onClick={() => onDeleteClick()}
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

export default CrudDropdown;
