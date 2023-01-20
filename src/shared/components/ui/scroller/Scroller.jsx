import clsx from "clsx";
import { Children, useEffect, useState } from "react";
import "./scroller.less";
import Card from "@components/ui/card/Card";

const Scroller = (children, className, items) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        console.log(items);
    });

    let x = ["scroller"];

    if (isScrolled) {
        x.push("scroller--active");
    }

    return (
        <div className={clsx(className)}>
            {Children.toArray(items).map((card, index) => {
                return (
                    <div key={index}>
                        <Card className={clsx(card.color)} h w>
                            <h1 className="font-bold block">{card.title}</h1>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
};

export default Scroller;
