import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

const useUserStore = create((set) => ({
    user: {},
    isLoading: false,
    isLoaded: false,
    setUser: (user) => set({ user }),
    fetchUser: async (id) => {
        set({ isLoading: true });
        const req = await userService.get(id).then((data) => {
            set({ user: data, isLoading: false, isLoaded: true });
        }).catch((err) => {
            set({ isLoading: false });
            throw err;
        });
    }
}));

mountStoreDevtool('user', useUserStore);

export default useUserStore;
