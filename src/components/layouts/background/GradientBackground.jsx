import "./bg.less";

const Background = () => {
    return (
        <div className="bg-gradient-wrap absolute -z-10 flex justify-center items-center w-[50%] h-full">
            <div className="bg-gradient -z-10"></div>
        </div>
    );
};

export default Background;
