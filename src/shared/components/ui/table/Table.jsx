import { useRef, useState, useEffect, useMemo } from "react";
import TableHeader from "./TableHeader";
import "./table.less";
import UserRow from "@users/components/table/UserRow";
import TableSearch from "./TableSearch";
import AddButton from "./actions/AddButton";
import CourseRow from "@/features/courses/components/table/CourseRow";

const Table = ({ headers, items, users, courses, noAdd }) => {
    const [isAllChecked, setAllChecked] = useState(false);
    const [search, setSearch] = useState("");

    let allCheckedRef = useRef();

    const selectAll = (ref) => {
        allCheckedRef = ref;
        const checked = allCheckedRef.current.checked;
        setAllChecked(checked);
    };

    useMemo(() => {
        const mycheckboxes = document.querySelectorAll(".checkbox-select");
        if (!isAllChecked) {
            mycheckboxes.forEach((c) => {
                c.checked = false;
            });
        } else {
            mycheckboxes.forEach((c) => {
                c.checked = true;
            });
        }
    }, [isAllChecked]);

    const handleChange = (e) => {
        // const checked = e.target.checked;
        // if (!checked) {
        //     allCheckedRef.current.checked = false;
        // }
    };

    const handleSearch = (value) => {
        setSearch(value);
    };

    const getItems = () => {
        if (!search.trim()) return items;

        let filtered = items.filter((u) => {
            return Object.keys(u).some((key) => {
                if (typeof u[key] === "string") {
                    return u[key].toLowerCase().includes(search);
                }
                return false;
            });
        });
        return filtered;
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <TableSearch placeholder="Search..." onSearch={handleSearch} />
                {!noAdd && <AddButton />}
            </div>
            <div className="overflow-x-auto w-full overflow-hidden">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <TableHeader
                        header
                        headers={headers}
                        handleCheckbox={selectAll}
                    />
                    <tbody>
                        {users &&
                            getItems().map((item, index) => (
                                <UserRow key={index} user={item} />
                            ))}
                        {courses &&
                            getItems().map((item, index) => (
                                <CourseRow key={index} course={item} />
                            ))}
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th></th>
                            {headers.map((h, index) => (
                                <th key={index}>{h}</th>
                            ))}
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Table;
