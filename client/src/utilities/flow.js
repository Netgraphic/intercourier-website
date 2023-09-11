import { apiLink } from "../config";

export const flow = () => {
    return {
        createOrder: async (email, amount) => {
            const data = {
                email,
                amount,
            };

            let formBody = [];

            for (let property in data) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(data[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }

            formBody = formBody.join("&");

            try {
                const res = await fetch(apiLink + "/create_order", {
                    mode: "cors",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: formBody,
                });
                const data = await res.json();
                return data.redirect;
            } catch (error) {
                console.log(error.message);
            }
        },
    };
};
