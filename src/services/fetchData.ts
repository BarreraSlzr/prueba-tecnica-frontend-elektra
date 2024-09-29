export const DummyData = {
    user: {
        name: "Emmanuel Barrera",
        avatar: "https://github.com/BarreraSlzr.png",
        type: "Agente Mesa",
    },
    notifications: [{}, {}],
    record: {
        progress: 50,
        date: "19 May, 2010:10:10 AM",
        folioSAC: '111-222-3333',
        folioMV: '12345678',
        registered: true,
        attachments: [
            {
                type: "Identificación",
                data: [
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                ]
            },
            {
                type: "Comprobante",
                data: [
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                ]
            },
            {
                type: "Propiedad",
                data: [
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                ]
            },
            {
                type: "Contrato",
                data: [
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                ]
            },
            {
                type: "Contacto",
                data: [
                    { src: "/placeholder-image.png" },
                    { src: "/placeholder-image.png" },
                ]
            },
            {
                type: "Fotografia",
                data: [
                    { src: "/placeholder-image.png" },
                ]
            },
        ]
    }
};

export type TFetchedData = typeof DummyData;

const fetchInitialData = (): Promise<TFetchedData> => {
    const fetch = Promise;

    return new fetch(
        (resolve) => {
            setTimeout(() => {
                resolve(DummyData);
            }, Math.floor(Math.random() * 2001) + 1000);
        });
};

export default fetchInitialData;