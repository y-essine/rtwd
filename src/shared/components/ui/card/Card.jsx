import clsx from "clsx";

const Card = ({ children, className, w, h }) => {
    return (
        <div
            className={clsx(
                "rounded-lg shadow-lg p-4",
                className,
                w && "w-56",
                h && "h-56"
            )}
        >
            {children}
        </div>
    );
};

export default Card;
