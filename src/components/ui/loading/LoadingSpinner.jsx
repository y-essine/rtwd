const LoadingSpinner = () => {
    return (
        <div className="flex justify-center w-full h-full">
            <div className="w-12 h-12 border-[6px] border-secondary border-t-accent-light rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;
