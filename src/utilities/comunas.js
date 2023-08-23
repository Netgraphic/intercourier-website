export const comunasSantiago = (zone) => {
    const comunasNorte = [
        "Conchalí",
        "Huechuraba",
        "Independencia",
        "Recoleta",
        "Quilicura",
        "Renca",
    ];
    const comunasNororiente = [
        "La Reina",
        "Las Condes",
        "Lo Barnechea",
        "Ñuñoa",
        "Providencia",
        "Vitacura",
    ];
    const comunasNorponiente = [
        "Cerro Navia",
        "Lo Prado",
        "Pudahuel",
        "Quinta Normal",
        "Renca",
        "Estación Central",
    ];
    const comunasSur = [
        "El Bosque",
        "La Cisterna",
        "Lo Espejo",
        "Pedro Aguirre Cerda",
        "San Joaquín",
        "San Miguel",
        "San Ramón",
        "San Bernardo",
    ];
    const comunasSuroriente = [
        "La Florida",
        "Peñalolén",
        "Macul",
        "Puente Alto",
    ];
    const comunasSurponiente = ["Maipú", "Estación Central", "Cerrillos"];

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
            return ["Santiago"];
    }
};
