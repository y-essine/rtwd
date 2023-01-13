import clsx from "clsx";

const Avatar = ({ className, size, src, title }) => {
    return (
        <div
            className={clsx(
                "mask mask-squircle bg-secondary cursor-pointer",
                className
            )}
        >
            <img
                className="w-full h-full hover:scale-110"
                src={src || "/git.jpg"}
                alt={title || "user" + " avatar"}
            ></img>
        </div>
    );
};

export default Avatar;
