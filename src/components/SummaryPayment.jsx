const SummaryPayment = ({ title, fieldsPayment }) => {
    return (
        <article>
            <h5 className="text-lg text-secondary-color">{title}</h5>
            <ul className="border-gray-400 text-sm leading-tight [&>li:last-child]:border-b-0 [&>li]:border-b [&>li]:py-2">
                {fieldsPayment.map((item, index) => (
                    <li key={index}>
                        <span className="mr-1 text-title-color">
                            {item.name}:
                        </span>
                        {item.value}
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default SummaryPayment;
