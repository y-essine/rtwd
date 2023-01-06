import clsx from "clsx";

const Card = ({ children, className }) => {
    return (
        <div className={clsx("rounded-lg shadow-lg p-4 w-56 h-56", className)}>
            {children}
        </div>
    );
};

export default Card;
