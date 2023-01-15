import useStore from "@/store/users";
import Table from "@/components/ui/table/Table";
import { useEffect } from "react";

const UsersList = () => {
    // const users = [
    //     {
    //         id: 1,
    //         name: "Hart Hagerty",
    //         job: "Zemlak, Daniel and Leannon",
    //         jobTitle: "Desktop Support Technician",
    //         country: "United States ",
    //         color: "Purple",
    //         avatar: "/git.jpg",
    //     },
    //     {
    //         id: 2,
    //         name: "Brice Swyre",
    //         job: "Carroll Group",
    //         jobTitle: "Tax Accountant",
    //         country: "Germany",
    //         color: "Red",
    //         avatar: "/git.jpg",
    //     },
    //     {
    //         id: 3,
    //         name: "Lorrie Birkett",
    //         job: "Kutch, Klocko and Kihn",
    //         jobTitle: "Account Executive",
    //         country: "China",
    //         color: "Green",
    //         avatar: "/git.jpg",
    //     },
    // ];

    const users = useStore((state) => state.users);
    const fetchUsers = useStore((state) => state.fetchUsers);

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Table
            users
            headers={["user", "job", "favorite color"]}
            items={users}
        />
    );
};

export default UsersList;
