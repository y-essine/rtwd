import Table from "@components/ui/table/Table";

const UsersList = ({ users }) => {
    return (
        <Table
            users
            headers={["user", "job", "favorite color"]}
            items={users}
        />
    );
};

export default UsersList;
