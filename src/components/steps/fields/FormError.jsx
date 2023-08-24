const FormError = ({ error }) => {
    return (
        <>
            {error && (
                <p className="text-sm text-secondary-color">{error.message}</p>
            )}
        </>
    );
};

export default FormError;
