import clsx from "clsx";

const Avatar = ({ className, size, src, title }) => {
    return (
        <div
            className={clsx(
                "rounded-full bg-secondary cursor-pointer",
                className
            )}
        >
            <img
                className="w-full h-full rounded-full hover:scale-110"
                src={src || "/public/git.jpg"}
                alt={title || "user" + " avatar"}
            ></img>
        </div>
    );
};

export default Avatar;
