import { Suspense, lazy } from "react";
import { useEffect } from "react";
import useStore from "@courses/store";
import LoadingSpinner from "@components/ui/loading/LoadingSpinner";

const CoursesList = lazy(() => import("@courses/components/CoursesList"));

const Courses = () => {
    const courses = useStore((state) => state.courses);
    const isLoading = useStore((state) => state.isLoading);
    const fetchCourses = useStore((state) => state.fetchCourses);
    const clearCourses = useStore((state) => state.clearCourses);

    useEffect(() => {
        fetchCourses();
        return () => {
            clearCourses();
        };
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Courses</h1>
            <div className="pt-6 w-full">
                {isLoading ? (
                    <LoadingSpinner className="mt-20" />
                ) : (
                    <Suspense fallback={<LoadingSpinner className="mt-20" />}>
                        <CoursesList courses={courses} />
                    </Suspense>
                )}
            </div>
        </div>
    );
};

export default Courses;
