const FormError = ({ error }) => {
    return (
        <>
            {error && (
                <p className="mt-1 text-sm text-secondary-color">
                    {error.message}
                </p>
            )}
        </>
    );
};

export default FormError;
