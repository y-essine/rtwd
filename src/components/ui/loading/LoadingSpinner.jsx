import clsx from "clsx";

const LoadingSpinner = ({ className }) => {
    return (
        <div className={clsx(className, "flex justify-center w-full h-full")}>
            <div className="w-12 h-12 border-[6px] border-secondary border-t-accent-light rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;
