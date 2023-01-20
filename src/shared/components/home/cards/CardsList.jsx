import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";
import ColoredCard from "./ColoredCard";
import "@components/ui/scroller/scroller.less";

const CardsList = () => {
    const cards = [
        {
            title: "Products sold",
            value: "1200",
            icon: "shopping-bag",
            color: "bg-purple-700",
        },
        {
            title: "Pending Approvals",
            value: "3000",
            icon: "shopping-bag",
            color: "bg-emerald-600",
        },

        {
            title: "Tickets Open",
            value: "36",
            icon: "ticket",
            color: "bg-red-600",
        },
        {
            title: "Products sold",
            value: "1200",
            icon: "shopping-bag",
            color: "bg-rose-600",
        },

        {
            title: "Sales Today",
            value: "546",
            icon: "price-tag",
            color: "bg-orange-600",
        },
        {
            title: "Pending Approvals",
            value: "3000",
            icon: "shopping-bag",
            color: "bg-emerald-600",
        },
    ];

    const ref = useRef();
    const { events } = useDraggable(ref);

    return (
        <div
            className="h-scroller flex gap-5 overflow-x-auto pr-6 cursor-grab w-full"
            {...events}
            ref={ref}
        >
            {cards.map((card, index) => (
                <div key={index}>
                    <ColoredCard {...card} />
                </div>
            ))}
        </div>
    );
};

export default CardsList;
