import { create } from "zustand";
import courseService from "@courses/service";
import { mountStoreDevtool } from "simple-zustand-devtools";

const useCourseStore = create((set) => ({
    courses: [],
    isLoading: false,
    isLoaded: false,
    setCourses: (courses) => set({ courses }),
    removeCourses: (id) =>
        set((state) => ({
            courses: state.courses.filter((user) => user._id !== id),
        })),
    fetchCourses: async () => {
        set({ isLoading: true });
        const req = await courseService
            .getAll()
            .then((data) => {
                set({
                    courses: data.courses,
                    isLoading: false,
                    isLoaded: true,
                });
                console.log("courses", data.courses);
            })
            .catch((err) => {
                set({ isLoading: false });
                throw err;
            });
    },
    clearCourses: () => set({ courses: [] }),
}));

// mount store
mountStoreDevtool("courses", useCourseStore);

export default useCourseStore;
