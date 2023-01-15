import useUsersStore from "./users";

const useStore = () => {
    return {
        users: useUsersStore(),
    };
}

export default useStore;
