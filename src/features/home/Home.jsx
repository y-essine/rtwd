import { Suspense, lazy } from "react";
const CardsList = lazy(() => import("@home/components/cards/CardsList"));
const SalesCharts = lazy(() => import("@home/components/sales/SalesCharts"));
import GradientBackground from "@components/layouts/background/GradientBackground";
import Card from "@components/ui/card/Card";
import LoadingSpinner from "@components/ui/loading/LoadingSpinner";

const DashboardHome = () => {
    return (
        <div className="py-6">
            {/* <GradientBackground /> */}
            <h1 className="px-6 text-3xl font-bold">Dashboard</h1>
            <div className="mt-10 pl-6">
                <div className="pr-6">
                    <p className="text-sm font-semibold">
                        Pending Approvals {""}
                        <a
                            href="#"
                            className="text-accent-light cursor-pointer hover:underline"
                        >
                            Assigned to me
                        </a>
                    </p>
                </div>
                <div className="mt-5">
                    <Suspense fallback={<LoadingSpinner />}>
                        <CardsList />
                    </Suspense>
                </div>
            </div>
            <div className="mt-5 divider px-6"></div>
            <div className="mt-5 px-6">
                <div>
                    <p className="text-sm font-semibold">Expiring HR Records</p>
                </div>
                <Suspense fallback={<LoadingSpinner />}>
                    <SalesCharts />
                </Suspense>
            </div>
            <div className="mt-5 divider px-6"></div>
            <div className="mt-5 px-6">
                <div>
                    <div>
                        <p className="text-sm font-semibold">
                            Expiring HR Records
                        </p>
                    </div>
                    <div className="mt-5">
                        <Card className="bg-secondary !w-full p-8">
                            <h1 className="text-2xl font-semibold">Sales</h1>
                            <p className="mt-3 text-sm font-semibold">
                                Sales by Category (Last 30 days)
                            </p>
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
            </div>
        </div>
    );
};

export default DashboardHome;
