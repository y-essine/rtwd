const AddButton = ({ onAdd }) => {
    return (
        <div
            className="btn bg-emerald-400/80 hover:bg-emerald-400/60 px-4 py-2 rounded-md cursor-pointer"
            onClick={onAdd}
        >
            +
        </div>
    );
};

export default AddButton;
