import { useState } from "react";
import {
    LineChart,
    Line,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const Chart = () => {
    const data = [
        { name: "Page A", uv: 400, pv: 350, amt: 120 },
        { name: "Page B", uv: 300, pv: 203, amt: 78 },
        { name: "Page C", uv: 300, pv: 400, amt: 150 },
        { name: "Page D", uv: 200, pv: 170, amt: 240 },
        { name: "Page E", uv: 278, pv: 220, amt: 230 },
        { name: "Page F", uv: 189, pv: 88, amt: 300 },
    ];

    const RandomizeData = () => {
        const newData = data.map((item) => {
            item.uv = Math.floor(Math.random() * 4000);
            return item;
        });
        setChartData(newData);
    };

    const [chartData, setChartData] = useState(data);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
                <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#a855f7"
                    strokeWidth={5}
                />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#ff5858"
                    strokeWidth={5}
                />
                <Line
                    type="monotone"
                    dataKey="amt"
                    stroke="#10b981"
                    strokeWidth={5}
                />
                <Tooltip />
                <Legend iconType="cricle" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;
