import { Dialog } from "@headlessui/react";
import Modal from "@components/ui/modals/Modal";
import { Edit } from "react-feather";

const UserEditModal = ({ element, user, onEdit, openNow, onClose }) => {
    const onEditButton = () => {
        onEdit(user);
        onClose();
    };

    return (
        <Modal element={element} openNow={openNow} onClose={() => onClose()}>
            <Dialog.Title
                as="h3"
                className="text-lg font-bold leading-6 text-cyan-400 flex items-center"
            >
                <Edit size={22} className="mr-2" /> Editing user {user.name}
            </Dialog.Title>
            <div className="mt-2">
                <p className="text-sm text-darker-t">
                    The user {user.name} will be permanently edited.
                </p>
                <p className="text-sm text-darker-t">
                    Are you sure you want to continue?
                </p>
            </div>

            <div className="mt-4">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-lighter/80 px-4 py-2 text-sm font-medium text-cyan-400 hover:bg-lighter focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => onEditButton()}
                >
                    Got it, Edit!
                </button>
            </div>
        </Modal>
    );
};

export default UserEditModal;
