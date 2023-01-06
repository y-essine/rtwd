import Card from "@/components/ui/card/Card";
import clsx from "clsx";

const DashboardHome = () => {
    const cards = [
        {
            title: "Products sold",
            value: "1,200",
            icon: "shopping-bag",
            color: "bg-purple-500",
        },
        {
            title: "Pending Approvals",
            value: "3,000",
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
            value: "1,200",
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
            value: "3,000",
            icon: "shopping-bag",
            color: "bg-emerald-500",
        },
    ];

    return (
        <div className="px-6 py-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="mt-10">
                <div>
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
                <div className="mt-5 flex flex-wrap gap-5">
                    {cards.map((card, index) => {
                        return (
                            <Card key={index} className={clsx(card.color)}>
                                <h1 className="font-bold">{card.title}</h1>
                            </Card>
                        );
                    })}
                </div>
            </div>
            <div class="mt-5 divider"></div>
            <div class="mt-5">
                <div>
                    <p className="text-sm font-semibold">Expiring HR Records</p>
                </div>
                <div className="mt-5">
                    <Card className="bg-white/5 !w-full p-8">
                        <h1 className="text-2xl font-semibold">30 Days</h1>
                        <p className="mt-3 text-sm font-semibold">
                            Expires in...
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
