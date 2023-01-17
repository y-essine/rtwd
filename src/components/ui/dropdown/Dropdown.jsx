import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import "./dropdown.less";

const Dropdown = ({ element, showChevron }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none">
                    {element}
                    {showChevron && (
                        <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                        />
                    )}
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="dropdown-content absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/5 rounded-md bg-secondary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
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
                                    Duplicate
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={clsx(
                                        active ? "bg-accent" : "text-primary-t",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Archive
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
                                    Move
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={clsx(
                                        active ? "bg-accent" : "text-primary-t",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Share
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
                                    Add to favorites
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
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
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default Dropdown;
