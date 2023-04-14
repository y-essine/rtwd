import { useState } from "react";
import { MoreVertical, Users } from "react-feather";
import CrudDropdown from "@/shared/components/ui/dropdown/CrudDropdown";
import useStore from "@courses/store";

const CourseRow = ({ course }) => {
    return (
        <tr>
            <th>
                <label>
                    <input
                        type="checkbox"
                        className="checkbox checkbox-select"
                        onChange={(e) => handleChange(e)}
                    />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar cursor-pointer">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src={course.avatar || "/git.jpg"}
                                alt="user avatar"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{course.name}</div>
                        {/* <div className="text-sm opacity-50 lowercase">
                            {user.email}
                        </div> */}
                    </div>
                </div>
            </td>
            <td>
                <div className="badge bg-accent/50 badge-sm p-3 mb-2">
                    <span className="text-primary-t">{course.category}</span>
                </div>
                <div className="text-gray-500 text-xs">
                    Starts at {course.startdate.slice(0, 10)}
                </div>
            </td>
            <td>
                <div className="badge bg-emerald-500/50 badge-sm p-3 mb-2">
                    <span className="text-primary-t">{course.price} TND</span>
                </div>
            </td>
            <td>
                <div className="flex gap-2 items-center badge-sm p-3 mb-2">
                    <span className="text-primary-t">
                        {course.enrolledStudents.length}
                    </span>
                    <Users size={16}></Users>
                </div>
            </td>
            <td>
                <div className="flex gap-2 items-center">
                    <div className="text-xs text-gray-500">
                        {/* format createdAt */}
                        {course.createdAt.slice(0, 10)}
                    </div>
                </div>
            </td>
            <th>
                <CrudDropdown
                    element={
                        <div className="btn btn-ghost btn-xs cursor-pointer">
                            <span className="text-xs font-bold">
                                <MoreVertical size={20} />
                            </span>
                        </div>
                    }
                    onEditClick={() => {}}
                    onDeleteClick={() => {}}
                />
                {/* <UserDeleteModal
                    user={user}
                    openNow={isDeleteModalOpen}
                    onClose={() => setDeleteModalOpen(false)}
                    onDelete={(u) => deleteUser(u)}
                ></UserDeleteModal>
                <UserEditModal
                    user={user}
                    openNow={isEditModalOpen}
                    onClose={() => setEditModalOpen(false)}
                    onEdit={(u) => editUser(u)}
                ></UserEditModal> */}
            </th>
        </tr>
    );
};

export default CourseRow;
