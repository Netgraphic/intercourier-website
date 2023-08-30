// Tokens Sistrack
//1|fiShVDJmuPkTLntRPYra5k7MFYvVEdSFzGTOqnMU
//2|L7W6tRv9iBKAXc5KoGctVLp9YnsJs2nk4rIf1CvB

export const sistrack = () => {
    return {
        url: {
            tracking: new URL("https://intercourier.sistrack.net/api/order/"),
            createSender: new URL(
                "https://intercourier.sistrack.net/api/sender/create"
            ),
            createRecipient: new URL(
                "https://intercourier.sistrack.net/api/recipient/create"
            ),
            createOrder: new URL(
                "https://intercourier.sistrack.net/api/order/create"
            ),
        },
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 1|fiShVDJmuPkTLntRPYra5k7MFYvVEdSFzGTOqnMU",
        },
        tracking: async (url, headers, setError, setOrderDetails) => {
            const res = await fetch(url, {
                method: "GET",
                headers,
            });

            const order = await res.json();
            setOrderDetails(order.data);

            if (order.data === undefined) {
                setError(true);
            } else {
                setError(false);
            }
        },
        create: async (url, headers, body) => {
            const res = await fetch(url, {
                method: "POST",
                headers,
                body: JSON.stringify(body),
            });

            const data = await res.json();
            console.log(data);
            return data.id;
        },
        createTrackingCode: () => {
            const chars = "0123456789";
            const longitude = 10;
            let id = "IC";

            for (let i = 0; i < longitude; i++) {
                const randomIndex = Math.floor(Math.random() * chars.length);
                id += chars.charAt(randomIndex);
            }

            return id;
        },
    };
};
