import { forwardRef, useContext, useState } from "react";
import { FormWizardContext } from "../context/FormWizardProvider";
import { pricePackages } from "../utilities/pricePackages";
import ShippingPrice from "./ShippingPrice";

const TabPricing = forwardRef(({ tab }, tabContainerPricing) => {
    const { formatPrice } = useContext(FormWizardContext);
    const [price, setPrice] = useState({
        packageSize: "S",
        packagePrice: 2000,
    });

    const checkPackageSize = (size, priceSize) => {
        setPrice({ ...price, packageSize: size, packagePrice: priceSize });
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
                            checked={price.packageSize === "S"}
                            onChange={(e) => {
                                checkPackageSize(
                                    e.target.value,
                                    pricePackages.sizeS
                                );
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
                            checked={price.packageSize === "M"}
                            onChange={(e) => {
                                checkPackageSize(
                                    e.target.value,
                                    pricePackages.sizeM
                                );
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
                            checked={price.packageSize === "L"}
                            onChange={(e) => {
                                checkPackageSize(
                                    e.target.value,
                                    pricePackages.sizeL
                                );
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
                            checked={price.packageSize === "XL"}
                            onChange={(e) => {
                                checkPackageSize(
                                    e.target.value,
                                    pricePackages.sizeXL
                                );
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

                <ShippingPrice price={formatPrice(price.packagePrice)} />
            </div>
        </div>
    );
});

export default TabPricing;
