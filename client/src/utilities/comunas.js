export const comunasSantiago = (zone) => {
    const comunasNorte = [
        "Conchalí",
        "Huechuraba",
        "Independencia",
        "Recoleta",
    ];

    const comunasNororiente = [
        "La Reina",
        "Las Condes",
        "Lo Barnechea",
        "Ñuñoa",
        "Providencia",
        "Vitacura",
    ];

    const comunasNorponiente = ["Quinta Normal", "Estación Central"];

    const comunasSur = ["La Cisterna", "San Miguel"];

    const comunasSuroriente = [
        "La Florida",
        "Peñalolén",
        "Macul",
        "Puente Alto",
    ];

    const comunasSurponiente = ["Maipú", "Estación Central", "Cerrillos"];

    const comunasCentro = ["Santiago"];

    switch (zone) {
        case "Norte":
            return comunasNorte;

        case "Nororiente":
            return comunasNororiente;

        case "Norponiente":
            return comunasNorponiente;

        case "Sur":
            return comunasSur;

        case "Suroriente":
            return comunasSuroriente;

        case "Surponiente":
            return comunasSurponiente;

        default:
            return comunasCentro;
    }
};
