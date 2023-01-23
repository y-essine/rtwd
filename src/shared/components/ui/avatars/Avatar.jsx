import clsx from "clsx";

const Avatar = ({ className, size, src, title, hover }) => {
    return (
        <div className={clsx("cursor-pointer mask mask-squircle", className)}>
            <img
                className={clsx("w-full h-full", hover && "hover:scale-110")}
                src={src || "/git.jpg"}
                alt={title || "user" + " avatar"}
                width={20}
                height={20}
            ></img>
        </div>
    );
};

export default Avatar;
