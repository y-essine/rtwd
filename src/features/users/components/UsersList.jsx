import Table from "@components/ui/table/Table";

const UsersList = ({ users }) => {
    return (
        <Table
            users
            headers={["user", "role & status", "date joined", "ban"]}
            items={users}
            noAdd
        />
    );
};

export default UsersList;
