import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Modal = ({ element, children, onClose }) => {
    let [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        console.log("close modal");
        setIsOpen(false);
    };

    const openModal = () => {
        console.log("open modal");
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
                                    {/* <Dialog.Title
                                        as="h3"
                                        className="text-lg font-bold leading-6 text-accent"
                                    >
                                        {title}
                                    </Dialog.Title> */}
                                    {children}
                                    {/* <div className="mt-2">
                                        <p className="text-sm text-darker-t">
                                            Your payment has been successfully
                                            submitted. We’ve sent you an email
                                            with all of the details of your
                                            order.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-lighter/80 px-4 py-2 text-sm font-medium text-primary-t hover:bg-lighter focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div> */}
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
