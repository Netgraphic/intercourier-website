import { forwardRef } from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

const TabShipping = forwardRef(({ tab }, tabContainer2) => {
    const backTemplate = (handlePrevious) => {
        return (
            <button
                className="mr-2 rounded-3xl border-2 border-main-color px-8 py-2 text-main-color"
                onClick={handlePrevious}
            >
                Anterior
            </button>
        );
    };

    const nextTemplate = (handleNext) => {
        return (
            <button
                className="rounded-3xl border-2 border-main-color bg-main-color px-8 py-2 text-white"
                onClick={handleNext}
            >
                Siguiente
            </button>
        );
    };

    const finishTemplate = (handleComplete) => {
        return (
            <button
                className="rounded-3xl border-2 border-main-color bg-main-color px-8 py-2 text-white"
                onClick={handleComplete}
            >
                Finalizar
            </button>
        );
    };

    return (
        <div
            className={`container absolute top-0 px-5 transition-all duration-200 ease-in-out ${
                tab === 2 ? "visible opacity-100" : "invisible opacity-0"
            }`}
        >
            <div
                ref={tabContainer2}
                className="container relative -top-8 mx-auto rounded-xl bg-white px-5"
            >
                <form>
                    <FormWizard
                        stepSize="xs"
                        color="#d15e49"
                        backButtonTemplate={backTemplate}
                        nextButtonTemplate={nextTemplate}
                        finishButtonTemplate={finishTemplate}
                    >
                        <FormWizard.TabContent>
                            <h3 className="text-left">Tipo de orden</h3>
                            <div className="w-full">
                                <input
                                    id="order-website"
                                    type="radio"
                                    name="order-type"
                                    className=""
                                />
                                <label htmlFor="order-website">
                                    Hacer orden en el sitio web
                                </label>
                            </div>
                            <div className="w-full">
                                <input
                                    id="order-whatsapp"
                                    type="radio"
                                    name="order-type"
                                    className=""
                                />
                                <label htmlFor="order-whatsapp">
                                    Hacer orden vía Whatsapp
                                </label>
                            </div>
                            <div className="w-full">
                                <input
                                    id="order-instagram"
                                    type="radio"
                                    name="order-type"
                                    className=""
                                />
                                <label htmlFor="order-instagram">
                                    Hacer orden vía Instagram
                                </label>
                            </div>
                        </FormWizard.TabContent>

                        <FormWizard.TabContent>
                            <h3 className="text-left">
                                Información del remitente
                            </h3>
                        </FormWizard.TabContent>

                        <FormWizard.TabContent>
                            <h3 className="text-left">
                                Información del destinatario
                            </h3>
                        </FormWizard.TabContent>

                        <FormWizard.TabContent>
                            <h3 className="text-left">
                                Información del paquete
                            </h3>
                        </FormWizard.TabContent>

                        <FormWizard.TabContent>
                            <h3 className="text-left">Tipo de pago</h3>
                        </FormWizard.TabContent>

                        <FormWizard.TabContent>
                            <h3 className="text-left">Resumen de la orden</h3>
                        </FormWizard.TabContent>
                    </FormWizard>
                </form>
            </div>
        </div>
    );
});

export default TabShipping;
