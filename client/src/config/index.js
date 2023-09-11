const isLocalHost = Boolean(
    window.location.hostname === "localhost" ||
        window.location.hostname === "[::1]" ||
        window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
);

export const apiLink = isLocalHost
    ? "http://localhost:5000/apiFlow"
    : "https://intercourier.netlify.app/apiFlow";
