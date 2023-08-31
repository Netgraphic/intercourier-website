import { forwardRef, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from "./icons/SearchIcon";
import { FormWizardContext } from "../context/FormWizardProvider";

import { sistrack } from "../utilities/sistrack";

const TabTracking = forwardRef(({ tab }, tabContainerTracking) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [orderDetails, setOrderDetails] = useState(undefined);

    const { setHeight, viewTracking, setViewTracking } =
        useContext(FormWizardContext);
    const { url, headers, tracking } = sistrack();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (viewTracking && orderDetails !== undefined) {
            setHeight(tabContainerTracking.current.clientHeight - 60);
        }
    }, [viewTracking, orderDetails]);

    const checkStatus = (array, status) => {
        let active = array.find((element) => element.shipping_status == status);

        if (active === undefined) return false;

        return true;
    };

    const onSubmit = async (data) => {
        const { trackingCode } = data;
        setLoading(true);

        await tracking(
            url.tracking + trackingCode.toUpperCase(),
            headers,
            setError,
            setOrderDetails
        );

        setLoading(false);
        setViewTracking(true);
    };

    return (
        <>
            <div
                className={`absolute top-0 w-full px-5 transition-all duration-200 ease-in-out ${
                    tab === 1 ? "visible opacity-100" : "invisible opacity-0"
                }`}
            >
                {!viewTracking || orderDetails === undefined ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative -top-8 mx-auto flex w-full justify-between rounded-xl border-4 border-main-color bg-white p-2 text-gray-500 md:w-2/5">
                            <input
                                type="text"
                                placeholder="Ingrese código de seguimiento..."
                                className="w-4/5 border-none px-3 uppercase outline-none placeholder:normal-case focus:ring-transparent md:text-lg"
                                {...register("trackingCode", {
                                    required: {
                                        value: true,
                                        message: "Código requerido",
                                    },
                                })}
                            />
                            <button
                                type="submit"
                                className="inline-block h-[42px] w-[55px] rounded-xl bg-main-color p-2 text-center"
                            >
                                {loading ? (
                                    <Spinner className="-mt-1 h-6 w-6 fill-secondary-color" />
                                ) : (
                                    <SearchIcon />
                                )}
                            </button>
                            {errors.trackingCode && (
                                <div className="absolute left-0 top-[68px]">
                                    <p className="rounded-lg bg-secondary-color px-3 py-1 text-sm text-white">
                                        {errors.trackingCode.message}
                                    </p>
                                </div>
                            )}
                            {error && (
                                <div className="absolute left-0 top-[68px]">
                                    <p className="rounded-lg bg-secondary-color px-3 py-1 text-sm text-white">
                                        El código ingresado no existe
                                    </p>
                                </div>
                            )}
                        </div>
                    </form>
                ) : (
                    <div
                        ref={tabContainerTracking}
                        className="container relative -top-8 mx-auto rounded-xl border-4 border-main-color bg-white p-2"
                    >
                        <button
                            className="relative w-full rounded-xl bg-main-color p-3 text-xl text-white transition-all duration-200 ease-in-out hover:bg-secondary-color"
                            onClick={() => {
                                setHeight(0);
                                setViewTracking(false);
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                className="absolute left-4 top-3.5 text-2xl"
                            />
                            {orderDetails.order_id}
                        </button>

                        <div className="mt-5 px-8 pb-10">
                            <h3 className="mb-5 text-xl text-title-color">
                                Estado:
                                <span className="ml-2 inline-block">
                                    {
                                        orderDetails.steps_records[0]
                                            .shipping_status
                                    }
                                </span>
                            </h3>

                            <div className="container">
                                <ul className="timeline">
                                    <li className="active-tl">Por Enviar</li>
                                    <li
                                        className={`${
                                            checkStatus(
                                                orderDetails.steps_records,
                                                "En Tránsito"
                                            ) && "active-tl"
                                        }`}
                                    >
                                        En Tránsito
                                    </li>
                                    {orderDetails.steps_records[0]
                                        .shipping_status === "Entregado" ? (
                                        <li
                                            className={`${
                                                checkStatus(
                                                    orderDetails.steps_records,
                                                    "Entregado"
                                                ) && "delivered-tl"
                                            }`}
                                        >
                                            Entregado
                                        </li>
                                    ) : (
                                        <li
                                            className={`${
                                                checkStatus(
                                                    orderDetails.steps_records,
                                                    "No Entregado"
                                                ) && "not-delivered-tl"
                                            }`}
                                        >
                                            No Entregado
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <h3 className="mb-1 text-xl text-title-color">
                                Detalles del envío:
                            </h3>
                            <ul className="text-sm leading-tight [&>li:last-child]:border-0 [&>li]:border-b [&>li]:border-gray-400 [&>li]:py-2">
                                {orderDetails.steps_records.map(
                                    (detail, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center justify-between"
                                        >
                                            <div className="w-3/5">
                                                <time className="block">
                                                    {detail.created_at}
                                                </time>
                                                {detail.step_subtitle}
                                            </div>
                                            <div className="w-1/5">
                                                {detail.shipping_status}
                                            </div>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
});

export default TabTracking;
