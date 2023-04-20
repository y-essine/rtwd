import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Dropdown from "@/shared/components/ui/dropdown/Dropdown";

const RowDropdown = ({ element, onEditClick, onDeleteClick }) => {
    return (
        <Dropdown element={element}>
            <Menu.Item>
                {({ active }) => (
                    <a
                        className={clsx(
                            active ? "bg-accent" : "text-primary-t",
                            "block px-4 py-2 text-sm cursor-pointer"
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
                        className={clsx(
                            active ? "bg-accent" : "text-primary-t",
                            "block px-4 py-2 text-sm cursor-pointer"
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

export default RowDropdown;
