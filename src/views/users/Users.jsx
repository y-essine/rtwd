import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/loading/LoadingSpinner";
import UsersList from "@/components/users/UsersList";

const Users = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Users</h1>
            <div className="pt-6 w-full">
                <Suspense fallback={<LoadingSpinner />}>
                    <UsersList />
                </Suspense>
            </div>
        </div>
    );
};

export default Users;
