import { lazy } from "react";

import Card from "@components/ui/card/Card";

const LineChart = lazy(() => import("@components/ui/chart/LineChart"));
const PieChart = lazy(() => import("@components/ui/chart/PieChart"));

const SalesCharts = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between lg:space-x-6">
            <div className="w-full lg:w-[60%]">
                <div className="mt-5">
                    <Card className="bg-secondary !w-full p-8">
                        <h1 className="text-2xl font-semibold">Sales</h1>
                        <p className="mt-3 text-sm font-semibold">
                            Sales by Category (Last 30 days)
                        </p>
                        <div className="mychart mt-8">
                            <LineChart />
                        </div>
                        <p className="mt-3 text-sm font-semibold">
                            For more details, visit the{" "}
                            <a
                                href="#"
                                className="text-accent-light cursor-pointer hover:underline"
                            >
                                Sales Dashboard
                            </a>
                        </p>
                    </Card>
                </div>
            </div>
            {/* <div className="w-1 hidden lg:visible"></div> */}
            <div className="w-full lg:w-[40%] lg:mt-0 lg:mr-0 mr-5">
                <div className="mt-5">
                    <Card className="bg-secondary !w-full p-8">
                        <h1 className="text-2xl font-semibold">Profit</h1>
                        <p className="mt-3 text-sm font-semibold">
                            Profit by margin
                        </p>
                        <div className="mychart mt-8">
                            <PieChart />
                        </div>
                        <p className="mt-3 text-sm font-semibold">
                            Values are in USD
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SalesCharts;
