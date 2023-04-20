import { Dialog } from "@headlessui/react";
import Modal from "@/shared/components/ui/modals/Modal";

const CourseAddModal = ({ element, course, onAdd, openNow, onClose }) => {
    const onAddButton = () => {
        onAdd(course);
        onClose();
    };
    return (
        <Modal element={element} openNow={openNow} onClose={() => onClose()}>
            <Dialog.Title
                as="h3"
                className="text-lg font-bold leading-6 text-cyan-400 flex items-center"
            >
                <Edit size={22} className="mr-2" /> Add a course
            </Dialog.Title>
            <div className="mt-2">
                <p className="text-sm text-darker-t">
                    You are about to add a new course.
                </p>
            </div>

            <div className="mt-4">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-lighter/80 px-4 py-2 text-sm font-medium text-cyan-400 hover:bg-lighter focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => onAddButton()}
                >
                    Add
                </button>
            </div>
        </Modal>
    );
};

export default CourseAddModal;
