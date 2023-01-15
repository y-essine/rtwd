import { create } from 'zustand';

const usersList = [
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

const useUsersStore = create((set) => ({
    users: [],
    setUsers: (users) => set({ users }),
    removeUser: (id) => set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
    fetchUsers: async () => {
        // fake 2s delay to return usersList
        await new Promise((resolve) => setTimeout(resolve, 2000));
        set({ users: usersList });
    }
}));

export default useUsersStore;
