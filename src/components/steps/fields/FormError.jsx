const FormError = ({ error }) => {
    return (
        <>{error && <p className="text-secondary-color">{error.message}</p>}</>
    );
};

export default FormError;
