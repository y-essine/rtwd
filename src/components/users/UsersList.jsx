import { useEffect, useRef, useState } from "react";

const UsersList = () => {
    const users = [
        {
            id: 1,
            name: "Hart Hagerty",
            job: "Zemlak, Daniel and Leannon",
            jobTitle: "Desktop Support Technician",
            country: "United States ",
            color: "Purple",
            avatar: "/git.jpg",
        },
        {
            id: 2,
            name: "Brice Swyre",
            job: "Carroll Group",
            jobTitle: "Tax Accountant",
            country: "Germany",
            color: "Red",
            avatar: "/git.jpg",
        },
        {
            id: 3,
            name: "Lorrie Birkett",
            job: "Kutch, Klocko and Kihn",
            jobTitle: "Account Executive",
            country: "China",
            color: "Green",
            avatar: "/git.jpg",
        },
    ];

    const [isAllChecked, setAllChecked] = useState(false);

    const allCheckedRef = useRef();

    const selectAll = () => {
        const checked = allCheckedRef.current.checked;
        setAllChecked(checked);
    };

    useEffect(() => {
        const mycheckboxes = document.querySelectorAll(".checkbox-select");
        if (!isAllChecked) {
            mycheckboxes.forEach((c) => {
                c.checked = false;
            });
        } else {
            mycheckboxes.forEach((c) => {
                c.checked = true;
            });
        }
    }, [isAllChecked]);

    return (
        <div className="overflow-x-auto w-full overflow-hidden">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input
                                    ref={allCheckedRef}
                                    type="checkbox"
                                    className="checkbox"
                                    onChange={() => selectAll()}
                                />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {users.map((u, index) => (
                        <tr key={index}>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-select"
                                        id={"checkbox-" + u.id}
                                    />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar cursor-pointer">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={u.avatar}
                                                alt="user avatar"
                                                className="hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {u.name}
                                        </div>
                                        <div className="text-sm opacity-50">
                                            {u.country}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="text-sm">{u.job}</span>
                                <br />
                                <div className="badge bg-indigo-500/50 badge-sm p-3 mt-2">
                                    <span className="text-primary-t">
                                        {u.jobTitle}
                                    </span>
                                </div>
                            </td>
                            <td>{u.color}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    details
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
                {/* <!-- foot --> */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default UsersList;
