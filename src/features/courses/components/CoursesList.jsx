import Table from "@components/ui/table/Table";

const CoursesList = ({ courses }) => {
    return (
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
    );
};

export default CoursesList;
