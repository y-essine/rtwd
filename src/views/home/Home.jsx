import Card from "@/components/ui/card/Card";
import Scroller from "@/components/ui/scroller/Scroller";
import clsx from "clsx";
import "@/components/ui/scroller/scroller.less";
import LineChart from "@/components/ui/chart/LineChart";
import PieChart from "@/components/ui/chart/PieChart";
import CountUp from "react-countup";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";

const DashboardHome = () => {
    const cards = [
        {
            title: "Products sold",
            value: "1200",
            icon: "shopping-bag",
            color: "bg-purple-500",
        },
        {
            title: "Pending Approvals",
            value: "3000",
            icon: "shopping-bag",
            color: "bg-emerald-500",
        },

        {
            title: "Tickets Open",
            value: "36",
            icon: "ticket",
            color: "bg-red-500",
        },
        {
            title: "Products sold",
            value: "1200",
            icon: "shopping-bag",
            color: "bg-rose-500",
        },

        {
            title: "Sales Today",
            value: "546",
            icon: "price-tag",
            color: "bg-orange-500",
        },
        {
            title: "Pending Approvals",
            value: "3000",
            icon: "shopping-bag",
            color: "bg-emerald-500",
        },
    ];

    const ref = useRef();
    const { events } = useDraggable(ref);

    return (
        <div className="py-6">
            <h1 className="px-6 text-3xl font-bold">Dashboard</h1>
            <div className="mt-10 pl-6">
                <div className="pr-6">
                    <p className="text-sm font-semibold">
                        Pending Approvals {""}
                        <a
                            href="#"
                            className="text-emerald-500 cursor-pointer hover:underline"
                        >
                            Assigned to me
                        </a>
                    </p>
                </div>
                <div className="mt-5">
                    <div
                        className="h-scroller flex gap-5 overflow-x-auto pr-6 cursor-grab"
                        {...events}
                        ref={ref}
                    >
                        {cards.map((card, index) => {
                            return (
                                <div key={index}>
                                    <Card className={clsx(card.color)} w>
                                        <h1 className="font-bold block">
                                            {card.title}
                                        </h1>
                                        <div className="mt-3">
                                            <span className="text-[3rem] font-extrabold">
                                                <CountUp
                                                    end={card.value}
                                                    duration={2}
                                                    delay={0}
                                                    seperator=" "
                                                    useEasing
                                                    enableScrollSpy
                                                />
                                            </span>
                                        </div>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="mt-5 divider px-6"></div>
            <div className="mt-5 px-6">
                <div>
                    <p className="text-sm font-semibold">Expiring HR Records</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:space-x-6">
                    <div className="w-full lg:w-[60%]">
                        <div className="mt-5">
                            <Card className="bg-white/5 !w-full p-8">
                                <h1 className="text-2xl font-semibold">
                                    Sales
                                </h1>
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
                                        className="text-emerald-500 cursor-pointer hover:underline"
                                    >
                                        Sales Dashboard
                                    </a>
                                </p>
                            </Card>
                        </div>
                    </div>
                    {/* <div className="w-1 hidden lg:visible"></div> */}
                    <div className="w-full lg:w-[40%] lg:mt-0 mt-5 lg:mr-0 mr-5">
                        <div className="mt-5">
                            <Card className="bg-white/5 !w-full p-8">
                                <h1 className="text-2xl font-semibold">
                                    Profit
                                </h1>
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
                        <Card className="bg-white/5 !w-full p-8">
                            <h1 className="text-2xl font-semibold">Sales</h1>
                            <p className="mt-3 text-sm font-semibold">
                                Sales by Category (Last 30 days)
                            </p>
                            <div className="mychart mt-8">
                                <PieChart />
                            </div>
                            <p className="mt-3 text-sm font-semibold">
                                For more details, visit the{" "}
                                <a
                                    href="#"
                                    className="text-emerald-500 cursor-pointer hover:underline"
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
