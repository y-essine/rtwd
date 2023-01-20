import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown } from "react-feather";
import clsx from "clsx";
import "./dropdown.less";
import useStore from "@users/store";
import Modal from "@components/ui/modals/Modal";

const Dropdown = ({ element, children, showChevron }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none">
                    {element}
                    {showChevron && (
                        <ChevronDown
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                            size={20}
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
                    {children}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default Dropdown;
