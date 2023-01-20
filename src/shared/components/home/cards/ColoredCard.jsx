import CountUp from "react-countup";
import Card from "@components/ui/card/Card";
import clsx from "clsx";

const ColoredCard = ({ title, value, color }) => {
    return (
        <Card className={clsx(color, "w-64")}>
            <h1 className="font-bold block">{title}</h1>
            <div className="mt-3">
                <span className="text-[3rem] font-extrabold">
                    <CountUp
                        end={value}
                        duration={2}
                        delay={0}
                        seperator=" "
                        useEasing
                        enableScrollSpy
                    />
                </span>
            </div>
        </Card>
    );
};

export default ColoredCard;
