import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useState from "@users/store";

const UserDeleteModal = ({ children, user }) => {
    const removeUser = useState((state) => state.removeUser);

    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        removeUser(user.id);
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div
                onClick={() => {
                    openModal();
                }}
            >
                {children}
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
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-bold leading-6 text-red-700"
                                    >
                                        Deleting user {user.name}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-darker-t">
                                            The user {user.name} will be
                                            permanently deleted. Are you sure
                                            you want to continue?
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-lighter/80 px-4 py-2 text-sm font-medium text-primary-t hover:bg-lighter focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, delete!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

UserDeleteModal.propTypes = {
    user: PropTypes.element.isRequired,
};

export default UserDeleteModal;
