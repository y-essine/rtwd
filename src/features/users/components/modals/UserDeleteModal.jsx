import { Dialog } from "@headlessui/react";
import Modal from "@/shared/components/ui/modals/Modal";
import { Trash2 as Trash } from "react-feather";

const UserDeleteModal = ({ element, user, onDelete, openNow, onClose }) => {
    const onDeleteButton = () => {
        onDelete(user);
        onClose();
    };

    return (
        <Modal element={element} openNow={openNow} onClose={() => onClose()}>
            <Dialog.Title
                as="h3"
                className="text-lg font-bold leading-6 text-red-400 flex items-center"
            >
                <Trash size={22} className="mr-2" /> Deleting user {user.name}
            </Dialog.Title>
            <div className="mt-2">
                <p className="text-sm text-darker-t">
                    The user {user.name} will be permanently deleted.
                </p>
                <p className="text-sm text-darker-t">
                    Are you sure you want to continue?
                </p>
            </div>

            <div className="mt-4">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-lighter/80 px-4 py-2 text-sm font-medium text-red-400 hover:bg-lighter focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => onDeleteButton()}
                >
                    Got it, delete!
                </button>
            </div>
        </Modal>
    );
};

// UserDeleteModal.propTypes = {
//     user: PropTypes.element.isRequired,
// };

export default UserDeleteModal;
