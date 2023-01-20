import { useRef } from "react";

const TableHeader = ({ header, footer, headers, handleCheckbox }) => {
    const allCheckedRef = useRef();

    return (
        <>
            {(header && !footer && (
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input
                                    ref={allCheckedRef}
                                    type="checkbox"
                                    className="checkbox"
                                    onChange={(e) =>
                                        handleCheckbox(allCheckedRef)
                                    }
                                />
                            </label>
                        </th>
                        {headers.map((h, index) => (
                            <th key={index}>{h}</th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
            )) ||
                (footer && !header && (
                    <tfoot>
                        <tr>
                            <th></th>
                            {headers.map((h, index) => (
                                <th key={index}>{h}</th>
                            ))}
                            <th></th>
                        </tr>
                    </tfoot>
                ))}
        </>
    );
};

export default TableHeader;
