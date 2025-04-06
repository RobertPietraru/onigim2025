export let places = {

    salaMihaiEminescu: {
        url: "https://www.hotelrapsodia.ro/index.php?content=sala-eminescu",
        name: "Sala Mihai Eminescu, Etajul 1",
        images: [
            "https://www.hotelrapsodia.ro/images/centru-conferinte.jpg",
            "https://www.hotelrapsodia.ro/images/eminescu/image03.jpg",
        ],
    },

    restaurantRapsodia: {
        url: "https://www.hotelrapsodia.ro/index.php?content=restaurant",
        name: "Restaurantul Rapsodia",
        images: [],
    },
    hotelRapsodia: {
        url: "https://maps.app.goo.gl/bu4MgoKceUY7S3Qd6",
        name: "Hotel Rapsodia",
        images: [
        ],
    },
    hotelMaria: {
        url: "https://maps.app.goo.gl/DMZgQJsVU4V86oZc8",
        name: "Hotel Maria",
    },
    casalux: {
        url: "https://maps.app.goo.gl/Sh56Cctvh3KGPi82A",
        name: 'Centrul de concurs - Complex "Casa Lux"',
    },
    teatrulMihaiEminescu: {
        url: "https://maps.app.goo.gl/sVM9vCB9D19kJCi16",
        name: 'Teatrul "Mihai Eminescu" Botoșani',
    },
    parculPrimariei: {
        url: "https://maps.app.goo.gl/3pFyBkLN3BXvsdci8",
        name: "Parcul Primăriei",
    },
    vorona: {
        url: "https://maps.app.goo.gl/22ozJD6Xup9Lxjk8A",
        name: "Vorona",
    },

    liceuVorona: {
        url: "https://liceulvorona.ro/",
        name: 'Liceul Tehnologic "Stefan cel Mare si Sfant" Vorona',
    },
    manastireaVorona: {
        url: "https://www.manastireavorona.ro/",
        name: 'Manastirea Vorona',
    },


    cornisa: {
        url: "https://maps.app.goo.gl/YpZUrwmdRcNzDzt58",
        name: "Cornișa AquaPark & Sports Botosani",
    },
};

export let activities = {
    accommodation: {
        icon: "🏨",
        color: "bg-blue-500",
        type: "accommodation",
    },
    festivity: {
        icon: "🎉",
        color: "bg-red-500",
        type: "festivity",
    },
    workshop: {
        icon: "💻",
        color: "bg-green-500",
        type: "workshop",
    },
    oni: {
        icon: "🔍",
        color: "bg-purple-500",
        type: "oni",
    },
    trip: {
        icon: "🚶‍♂️",
        color: "bg-orange-500",
        type: "trip",
    },
    dinner: {
        icon: "🍴",
        color: "bg-yellow-500",
        type: "dinner",
    },
    breakfast: {
        icon: "🥞",
        color: "bg-pink-500",
        type: "breakfast",
    },
    training: {
        icon: "💻",
        color: "bg-purple-500",
        type: "training",
    },
    lunch: {
        icon: "🍽️",
        color: "bg-green-500",
        type: "lunch",
    },
    hatchTheCode: {
        icon: "🥚",
        color: "bg-blue-500",
        type: "hatchTheCode",
    },
    departure: {
        icon: "🚶‍♂️",
        color: "bg-orange-500",
        type: "departure",
    },
    eggHunt: {
        icon: "🥚",
        color: "bg-blue-500",
        type: "eggHunt",
    },

    freeTime: {
        icon: "☕",
        color: "bg-pink-500",
        type: "freeTime",
        mainActivity: false,
    },
    transport: {
        icon: "🚌",
        color: "bg-green-500",
        type: "transport",
        mainActivity: false,

    },
};

export let program = [
    {
        date: 14,
        day: "Luni",
        activities: [
            {
                start: 11.0,
                end: 15.0,
                activity: {
                    ...activities.accommodation,
                    label: "Cazarea participanţilor",
                },
                locations: [places.hotelRapsodia, places.hotelMaria],

                observations:
                    "Consultaţi pe site în zona Centrul de concurs / Cazare repartizarea pe hoteluri",
            },
            {
                start: 15.0,
                end: 15.5,
                activity: {
                    ...activities.transport,
                    label: 'Accesul la teatrul "Mihai Eminescu"',
                },
            },
            {
                start: 15.5,
                end: 17.5,
                activity: {
                    ...activities.festivity,
                    label: "Festivitate de deschidere",
                },
                locations: [places.teatrulMihaiEminescu],
                observations: null,
            },
            {
                start: 17.5,
                end: 18.0,
                activity: {
                    ...activities.transport,
                    label: "Din parcarea magazinului Elvila Botosani, se face deplasarea cu autocarul spre centrul de concurs",
                },
            },
            {
                start: 18.0,
                end: 19.0,
                activity: {
                    ...activities.training,
                    label: "Sesiunea de antrenament",
                },
                locations: [places.casalux],
                observations: null,
            },
            {
                start: 19.0,
                end: 19.5,
                activity: {
                    ...activities.transport,
                    label: "Deplasare din centrul de concurs spre Hotel Rapsodia/Maria/Belvedere",
                },
            },
            {
                start: 19.5,
                activity: {
                    ...activities.dinner,
                    label: "Cină",
                },
                locations: [places.hotelRapsodia, places.hotelMaria],
                observations: null,
            },
        ],
    },
    {
        date: 15,
        day: "Marți",
        activities: [
            {
                start: 7.0,
                end: 9.0,
                activity: {
                    ...activities.breakfast,
                    label: "Mic dejun",
                },
                locations: [places.hotelRapsodia, places.hotelMaria],
                observations: null,
            },

            {
                start: 9.0,
                end: 9.5,
                activity: {
                    ...activities.transport,
                    label: "Deplasare spre centrul de concurs",
                },
                locations: [places.casalux],
                observations: null,
            },

            {
                start: 9.5,
                end: 10.0,
                activity: {
                    ...activities.transport,
                    label: "Sosirea în centrul de concurs",
                    mainActivity: true,
                },
            },

            {
                start: 10.0,
                end: 14.0,
                activity: {
                    ...activities.oni,
                    label: "Proba ONI",
                },
                branch: "elev",
                locations: [places.casalux],
                observations: null,
            },

            {
                start: 10.0,
                end: 14.0,
                activity: {
                    ...activities.training,
                    label: "Alternativ - workshop pentru profesori in incinta complexului Casa lux",
                },
                branch: "profesor",
                locations: [places.casalux],
                observations: null,
            },

            {
                start: 14.0,
                end: 14.5,
                activity: {
                    ...activities.transport,
                    label: "Intoarcerea de la concurs spre hoteluri",
                },
            },
            {
                start: 14.5,
                end: 16.0,
                activity: {
                    ...activities.dinner,
                    label: "Masa de prânz",
                },
                locations: [places.hotelRapsodia, places.hotelMaria],
                observations: null,
            },
            {
                start: 16.0,
                end: 17.0,
                activity: {
                    ...activities.training,
                    label: "Workshop - Algolymp",
                },
                locations: [places.hotelRapsodia],
                innerLocations: [places.salaMihaiEminescu],
                observations:
                    "La Workshop rezolvăm cu Algolymp problemele de la probă.",
            },
            {
                start: 17.0,
                end: 19.0,
                activity: {
                    ...activities.hatchTheCode,
                    label: "🔍🤖Hatch The Code!🥚🐇",
                },
                files: [
                    {
                        name: "Hatch The Code.pdf",
                        url: "/hatch_the_code.pdf",
                    },
                ],
                locations: [places.parculPrimariei],
                observations:
                    "Vânătoare de ouă cu premii, organizată în Parcul Primăriei.",
            },
            {
                start: 19,
                end: 19.5,
                activity: {
                    ...activities.freeTime,
                    mainActivity: false,
                    label: null, 
                },
            },
            {
                start: 19.5,
                activity: {
                    ...activities.dinner,
                    label: "Cină",
                },
                locations: [places.hotelRapsodia, places.hotelMaria],
                observations: null,
            },
        ],
    },
    {
        date: 16,
        day: "Miercuri",
        activities: [
            {
                start: 7.0,
                end: 9.0,
                activity: {
                    ...activities.breakfast,
                    label: "Mic dejun",
                },
                locations: [places.hotelRapsodia, places.hotelMaria],
                observations: null,
            },
            {
                start: 9.5,
                end: 13.0,
                activity: {
                    ...activities.trip,
                    label: 'Excursie tematică - ”Târgul de artă populară botoșăneană” pe ruta Botoșani - Vorona și retur', // (Plecarea )
                },
                locations: [places.vorona, places.liceuVorona, places.manastireaVorona],
                observations: "Plecare la ora 09.30 din Parcarea ”Magazin Elvila” Botoșani și revenire în aceeași parcare la orele 13,00-13,30",
            },
            {
                start: 13,
                end: 14.5,
                activity: {
                    ...activities.freeTime,
                    label: null, // Lasam gri doar, fara text pauza
                },
            },
            {
                start: 14.5,
                activity: {
                    ...activities.dinner,
                    label: "Masa de prânz",
                },
                locations: [places.hotelRapsodia, places.hotelMaria],
                observations: null,
            },
            {
                start: 15.5,
                end: 18.0,
                activity: {
                    ...activities.festivity,
                    label: "Festivitate de premiere",
                },
                locations: [places.teatrulMihaiEminescu],
                observations: null,
            },

            {
                start: 18,
                end: 19.5,
                activity: {
                    ...activities.freeTime,
                    label: null
                },
            },
            {
                start: 19.5,
                activity: {
                    ...activities.dinner,
                    label: "Cină festivă",
                },
                locations: [places.hotelRapsodia],
                innerLocations: [places.salaMihaiEminescu, places.restaurantRapsodia],
            },
        ],
    },
    {
        date: 17,
        day: "Joi",
        activities: [
            {
                start: 7.0,
                end: 8.5,
                activity: {
                    ...activities.breakfast,
                    label: "Mic dejun",
                },
                locations: [places.hotelRapsodia, places.hotelMaria],
                observations: null,
            },
            {
                start: 8.5,
                end: 9.0,
                activity: {
                    ...activities.transport,
                    label: "Sosire în centrul de concurs",
                    mainActivity: false,

                },
                branch: "baraj",
                observations: null,
            },
            {
                start: 8.5,
                end: 9.5,
                branch: "fara baraj",
                activity: {
                    ...activities.freeTime,
                    label: null,
                },
            },
            {

                start: 9.5,
                end: 13.0,
                branch: "fara baraj",
                activity: {
                    ...activities.trip,
                    label: "Vizitarea orașului Botoșani / Activitate recreativă la Piscina Cornișa",
                },
                locations: [places.cornisa],
                observations:
                    "Participanții care nu participă la proba de baraj și doresc să beneficieze de acces pe bază de ecuson la Piscina Cornișa, trebuie să aibă echipament adecvat.",
            },

            {
                start: 13,
                end: 13.5,
                branch: "fara baraj",
                activity: {
                    ...activities.freeTime,
                    label: null,
                },
            },
            {
                start: 9.0,
                branch: "baraj",
                end: 13.0,
                activity: {
                    ...activities.oni,
                    label: "Barajul de selecţie a lotului naţional de juniori",
                },
                locations: [places.casalux],
                observations: null,
            },

            {
                start: 13,
                end: 13.5,
                branch: "baraj",
                activity: {
                    ...activities.freeTime,
                    label: null,
                },
            },
            {
                start: 13.5,
                activity: {
                    ...activities.dinner,
                    label: "Masa de prânz",
                },
                locations: [places.hotelRapsodia, places.hotelMaria],
                observations: null,
            },
            {
                start: 19.5,
                activity: {
                    ...activities.dinner,
                    label: "Cină",
                },
                locations: [places.hotelRapsodia],
                observations: null,
            },
        ],
    },
    {
        date: 18,
        day: "Vineri",
        activities: [
            {
                start: 7.0,
                end: 9.0,
                activity: {
                    ...activities.breakfast,
                    label: "Mic dejun",
                },
                locations: [places.hotelRapsodia],
                observations: null,
            },
            {
                start: 10.0,
                activity: {
                    ...activities.departure,
                    label: "Plecarea participanţilor",
                },
                locations: [],
                observations: null,
            },
        ],
    },
];
