import { Suspense, lazy } from "react";
import { useEffect } from "react";
import useStore from "@users/store";
import LoadingSpinner from "@components/ui/loading/LoadingSpinner";

const UsersList = lazy(() => import("@users/components/UsersList"));

const Users = () => {
    const users = useStore((state) => state.users);
    const isLoading = useStore((state) => state.isLoading);
    const fetchUsers = useStore((state) => state.fetchUsers);
    const clearUsers = useStore((state) => state.clearUsers);

    useEffect(() => {
        fetchUsers();
        return () => {
            clearUsers();
        };
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Users</h1>
            <div className="pt-6 w-full">
                {isLoading ? (
                    <LoadingSpinner className="mt-20" />
                ) : (
                    <Suspense fallback={<LoadingSpinner className="mt-20" />}>
                        <UsersList users={users} />
                    </Suspense>
                )}
            </div>
        </div>
    );
};

export default Users;
