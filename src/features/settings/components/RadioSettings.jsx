import { useState } from "react";
import { RadioGroup, Switch } from "@headlessui/react";

const plans = [
    {
        name: "Startup",
        ram: "12GB",
        cpus: "6 CPUs",
        disk: "160 GB SSD disk",
    },
    {
        name: "Business",
        ram: "16GB",
        cpus: "8 CPUs",
        disk: "512 GB SSD disk",
    },
    {
        name: "Enterprise",
        ram: "32GB",
        cpus: "12 CPUs",
        disk: "1024 GB SSD disk",
    },
];

const RadioSettings = () => {
    const [selected, setSelected] = useState(plans[0]);
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="w-full px-4 py-16">
            <div className="flex justify-center">
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? "bg-accent" : "bg-lighter"}
                          relative inline-flex h-[25px] w-[49px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2`}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${
                            enabled ? "translate-x-6" : "translate-x-0"
                        }
                pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out mt-[1px] ml-[1px]`}
                    />
                </Switch>
            </div>
            <div className="mx-auto w-full max-w-md mt-10">
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">
                        Server size
                    </RadioGroup.Label>
                    <div className="space-y-2">
                        {plans.map((plan) => (
                            <RadioGroup.Option
                                key={plan.name}
                                value={plan}
                                className={({ active, checked }) =>
                                    `${
                                        active
                                            ? "ring-2 ring-transparent ring-offset-2 ring-offset-darker-t"
                                            : ""
                                    }
                  ${checked ? "bg-accent bg-opacity-75 " : "bg-secondary"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${
                                                            checked
                                                                ? "text-white"
                                                                : "text-accent"
                                                        }`}
                                                    >
                                                        {plan.name}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`inline ${
                                                            checked
                                                                ? "text-sky-100"
                                                                : "text-gray-500"
                                                        }`}
                                                    >
                                                        <span>
                                                            {plan.ram}/
                                                            {plan.cpus}
                                                        </span>{" "}
                                                        <span aria-hidden="true">
                                                            &middot;
                                                        </span>{" "}
                                                        <span>{plan.disk}</span>
                                                    </RadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="shrink-0 text-white">
                                                    <CheckIcon className="h-6 w-6" />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    );
};

const CheckIcon = (props) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default RadioSettings;
