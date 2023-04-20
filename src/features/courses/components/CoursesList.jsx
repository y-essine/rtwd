import { useEffect } from "react";
import useStore from "@courses/store";
import LoadingSpinner from "@components/ui/loading/LoadingSpinner";
import Table from "@components/ui/table/Table";

const CoursesList = () => {
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
        <>
            {isLoading ? (
                <LoadingSpinner className="mt-20" />
            ) : (
                <Table
                    courses
                    headers={[
                        "course",
                        "details",
                        "price",
                        "users enrolled",
                        "date added",
                    ]}
                    items={courses}
                />
            )}
        </>
    );
};

export default CoursesList;
