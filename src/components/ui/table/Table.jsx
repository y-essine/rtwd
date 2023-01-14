import { useRef, useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import "./table.less";
import UserRow from "./users/UserRow";

const Table = ({ headers, items, users }) => {
    const [isAllChecked, setAllChecked] = useState(false);
    let allCheckedRef = useRef();

    const selectAll = (ref) => {
        allCheckedRef = ref;
        const checked = allCheckedRef.current.checked;
        setAllChecked(checked);
    };

    useEffect(() => {
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

    return (
        <div className="overflow-x-auto w-full overflow-hidden">
            <table className="table w-full">
                {/* <!-- head --> */}
                <TableHeader
                    header
                    headers={headers}
                    handleCheckbox={selectAll}
                />
                <tbody>
                    {/* <!-- row 1 --> */}
                    {items.map(
                        (item, index) =>
                            users && <UserRow key={index} user={item} />
                    )}
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
    );
};

export default Table;
