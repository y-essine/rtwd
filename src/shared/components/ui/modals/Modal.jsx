import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

const Modal = ({ element, children, onClose, openNow }) => {
    let [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(openNow);
    }, [openNow]);

    const closeModal = () => {
        onClose();
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div
                onClick={() => {
                    openModal();
                }}
            >
                {element}
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div
                            className="fixed inset-0 bg-black/30"
                            aria-hidden="true"
                        />
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondary p-6 text-left align-middle shadow-xl transition-all">
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Modal;
