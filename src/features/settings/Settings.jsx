import RadioSettings from "./components/RadioSettings";

const Settings = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Settings</h1>
            <div className="pt-6 w-full">
                <RadioSettings />
            </div>
        </div>
    );
};

export default Settings;
