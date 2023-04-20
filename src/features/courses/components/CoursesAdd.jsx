const CourseAdd = () => {
    return (
        <div>
            <h1 className="text-xl font-bold">Add course</h1>
            <div className="mt-6 flex flex-col gap-4">
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-3 outline-none bg-secondary rounded-md"
                    />
                </div>
                <div>
                    <textarea
                        type="text"
                        placeholder="Description"
                        className="p-3 outline-none bg-secondary rounded-md w-96"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Category"
                        className="p-3 outline-none bg-secondary rounded-md"
                    />
                </div>
                <div className="flex gap-3 items-center text-darker-t">
                    <input
                        type="number"
                        min={1}
                        placeholder="Duration"
                        className="p-3 outline-none bg-secondary rounded-md w-28"
                    />
                    <div>Week(s)</div>
                </div>
                <div className="flex gap-3 items-center text-darker-t">
                    <input
                        type="number"
                        min={1}
                        placeholder="Price"
                        className="p-3 outline-none bg-secondary rounded-md w-20"
                    />
                    <div>TND</div>
                </div>
                <div>
                    <button className="py-3 px-6 rounded-md flex items-center bg-emerald-500/80 hover:bg-emerald-500/60">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseAdd;
