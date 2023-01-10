import { Pie, PieChart, ResponsiveContainer, Legend } from "recharts";
import "./PieChart.less";

const Chart = () => {
    const data = [
        { name: "Jeans", value: 400, fill: "#a855f7" },
        { name: "Jackets", value: 300, fill: "#ff5858" },
        { name: "Sneakers", value: 750, fill: "#10b981" },
    ];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="50%"
                    outerRadius="70%"
                    label
                    stroke="none"
                />
                <Legend iconType="circle" />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default Chart;
