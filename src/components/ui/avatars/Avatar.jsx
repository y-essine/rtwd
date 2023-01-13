import clsx from "clsx";

const Avatar = ({ className, size, src, title, hover }) => {
    return (
        <div
            className={clsx(
                "cursor-pointer",
                className,
                hover && "hover:drop-shadow-md hover:drop-shadow-accent"
            )}
        >
            <img
                className="mask mask-squircle w-full h-full"
                src={src || "/git.jpg"}
                alt={title || "user" + " avatar"}
            ></img>
        </div>
    );
};

export default Avatar;
