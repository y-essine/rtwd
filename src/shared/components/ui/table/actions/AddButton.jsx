const AddButton = ({ onAdd }) => {
    return (
        <div
            className="btn bg-secondary/50 hover:bg-secondary text-darker-t"
            onClick={onAdd}
        >
            +
        </div>
    );
};

export default AddButton;
