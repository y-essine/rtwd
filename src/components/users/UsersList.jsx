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

    return (
        <div class="overflow-x-auto w-full overflow-hidden">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
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
                    {users.map((u) => (
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar cursor-pointer">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img
                                                src={u.avatar}
                                                alt="user avatar"
                                                className="hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">{u.name}</div>
                                        <div class="text-sm opacity-50">
                                            {u.country}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="text-sm">{u.job}</span>
                                <br />
                                <div class="badge bg-indigo-500/50 badge-sm p-3 mt-2">
                                    <span className="text-primary-t">
                                        {u.jobTitle}
                                    </span>
                                </div>
                            </td>
                            <td>{u.color}</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">
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
