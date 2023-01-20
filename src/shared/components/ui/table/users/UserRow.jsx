import Dropdown from "@components/ui/dropdown/Dropdown";
import { MoreVertical } from "react-feather";

const UserRow = ({ user }) => {
    return (
        <tr>
            <th>
                <label>
                    <input
                        type="checkbox"
                        className="checkbox checkbox-select"
                        // id={"checkbox-" + u.id}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar cursor-pointer">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src={user.avatar || "/git.jpg"}
                                alt="user avatar"
                                className="hover:scale-110"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.country}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="text-sm">{user.job}</span>
                <br />
                <div className="badge bg-accent/50 badge-sm p-3 mt-2">
                    <span className="text-primary-t">{user.jobTitle}</span>
                </div>
            </td>
            <td>{user.color}</td>
            <th>
                <Dropdown
                    short
                    removeUser={user}
                    dialog
                    element={
                        <div className="btn btn-ghost btn-xs cursor-pointer">
                            <span className="text-xs font-bold">
                                <MoreVertical size={20} />
                            </span>
                        </div>
                    }
                />
            </th>
        </tr>
    );
};

export default UserRow;
