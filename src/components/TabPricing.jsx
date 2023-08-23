import { forwardRef, useState } from "react";

import { comunasSantiago } from "../utilities/comunas";

const TabPricing = forwardRef(({ tab }, tabContainerPricing) => {
    const [packageSize, setPackageSize] = useState("S");
    const [comunas, setComunas] = useState([]);

    const zones = [
        "Centro",
        "Norte",
        "Nororiente",
        "Norponiente",
        "Sur",
        "Suroriente",
        "Surponiente",
    ];

    const checkPackageSize = (size) => {
        setPackageSize(size);
    };

    return (
        <div
            className={`container absolute top-0 px-5 transition-all duration-200 ease-in-out ${
                tab === 3 ? "visible opacity-100" : "invisible opacity-0"
            }`}
        >
            <div
                ref={tabContainerPricing}
                className="container relative -top-8 mx-auto rounded-xl bg-white px-8 py-5"
            >
                <h3 className="mb-5 text-2xl leading-tight text-title-color">
                    Verifique cuánto costará su envío
                </h3>

                <p className="mb-5 text-xl leading-none">
                    Seleccione el tamaño de su paquete
                </p>

                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="w-full">
                        <input
                            id="package-s"
                            className="peer hidden"
                            type="radio"
                            name="package-size"
                            value="S"
                            checked={packageSize === "S"}
                            onChange={(e) => {
                                checkPackageSize(e.target.value);
                            }}
                        />
                        <label
                            htmlFor="package-s"
                            className="flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-secondary-color px-3 py-5 text-lg text-secondary-color peer-checked:bg-main-color peer-checked:text-white peer-checked:[&>div>span>svg]:stroke-white"
                        >
                            <div className="text-center">
                                <span className="text-7xl">S</span>
                                <div className="text-xs">
                                    Tamaño máximo: 20 x 10 x 10 cm
                                </div>
                                <div className="mt-2 text-xs">
                                    Peso máximo: 2 Kg
                                </div>
                            </div>
                        </label>
                    </div>

                    <div className="w-full">
                        <input
                            id="package-m"
                            className="peer hidden"
                            type="radio"
                            name="package-size"
                            value="M"
                            checked={packageSize === "M"}
                            onChange={(e) => {
                                checkPackageSize(e.target.value);
                            }}
                        />
                        <label
                            htmlFor="package-m"
                            className="flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-secondary-color px-3 py-5 text-lg text-secondary-color peer-checked:bg-main-color peer-checked:text-white peer-checked:[&>div>span>svg]:stroke-white"
                        >
                            <div className="text-center">
                                <span className="text-7xl">M</span>
                                <div className="text-xs">
                                    Tamaño máximo: 20 x 10 x 10 cm
                                </div>
                                <div className="mt-2 text-xs">
                                    Peso máximo: 2 Kg
                                </div>
                            </div>
                        </label>
                    </div>

                    <div className="w-full">
                        <input
                            id="package-l"
                            className="peer hidden"
                            type="radio"
                            name="package-size"
                            value="L"
                            checked={packageSize === "L"}
                            onChange={(e) => {
                                checkPackageSize(e.target.value);
                            }}
                        />
                        <label
                            htmlFor="package-l"
                            className="flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-secondary-color px-3 py-5 text-lg text-secondary-color peer-checked:bg-main-color peer-checked:text-white peer-checked:[&>div>span>svg]:stroke-white"
                        >
                            <div className="text-center">
                                <span className="text-7xl">L</span>
                                <div className="text-xs">
                                    Tamaño máximo: 20 x 10 x 10 cm
                                </div>
                                <div className="mt-2 text-xs">
                                    Peso máximo: 2 Kg
                                </div>
                            </div>
                        </label>
                    </div>

                    <div className="w-full">
                        <input
                            id="package-xl"
                            className="peer hidden"
                            type="radio"
                            name="package-size"
                            value="XL"
                            checked={packageSize === "XL"}
                            onChange={(e) => {
                                checkPackageSize(e.target.value);
                            }}
                        />
                        <label
                            htmlFor="package-xl"
                            className="flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-secondary-color px-3 py-5 text-lg text-secondary-color peer-checked:bg-main-color peer-checked:text-white peer-checked:[&>div>span>svg]:stroke-white"
                        >
                            <div className="text-center">
                                <span className="text-7xl">XL</span>
                                <div className="text-xs">
                                    Tamaño máximo: 20 x 10 x 10 cm
                                </div>
                                <div className="mt-2 text-xs">
                                    Peso máximo: 2 Kg
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="mb-2 mt-8">
                    <label className="mb-2 block text-xl">
                        Seleccione sector
                    </label>
                    <select
                        className="w-full rounded border border-main-color bg-white px-2 py-1 text-gray-500 focus:outline-secondary-color"
                        onChange={(e) =>
                            setComunas(comunasSantiago(e.target.value))
                        }
                    >
                        <option value="">Seleccionar</option>
                        {zones.map((zone, index) => (
                            <option key={index} value={zone}>
                                {zone}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-2 mt-4">
                    <label className="mb-2 block text-xl">
                        Seleccione comuna
                    </label>
                    <select className="w-full rounded border border-main-color bg-white px-2 py-1 text-gray-500 focus:outline-secondary-color">
                        <option value="">Seleccionar</option>
                        {comunas.map((comuna, index) => (
                            <option key={index} value={comuna}>
                                {comuna}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-2 mt-8 w-full border-t-2 border-secondary-color pt-2 text-2xl text-secondary-color">
                    Total envío: <span>$10.000</span>
                </div>
            </div>
        </div>
    );
});

export default TabPricing;
