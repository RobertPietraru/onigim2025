export let places = {
    rapsodia: {
        url: "https://maps.app.goo.gl/bu4MgoKceUY7S3Qd6",
        name: "Hotel Rapsodia/ Maria",
        images: [
            "https://onigim2025.sepi.ro/wp-content/uploads/onigim2025/2025/03/Toamna-598.jpg",
        ],
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
    cornisa: {
        url: "https://maps.app.goo.gl/YpZUrwmdRcNzDzt58",
        name: "Orașul Botoșani/ Cornișa AquaPark & Sports Botosani",
    },
};
export const activityTypes = [
    "Cazare",
    "Festivitate",
    "Workshop",
    "Proba ONI",
    "Excursie",
    "Cină",
    "Mic dejun",
    "Pauză",
];
export type ActivityType = (typeof activityTypes)[number];

export let activities = {
    Cazare: {
        icon: "🏨",
        color: "bg-blue-500",
    },
    Festivitate: {
        icon: "🎉",
        color: "bg-red-500",
    },
    Workshop: {
        icon: "💻",
        color: "bg-green-500",
    },
    "Proba ONI": {
        icon: "🔍",
        color: "bg-purple-500",
    },
    Excursie: {
        icon: "🚶‍♂️",
        color: "bg-orange-500",
    },
    Cină: {
        icon: "🍴",
        color: "bg-yellow-500",
    },
    "Mic dejun": {
        icon: "🥞",
        color: "bg-pink-500",
    },
    "Sesiune de antrenament": {
        icon: "💪",
        color: "bg-purple-500",
    },
    "Masa de prânz": {
        icon: "🍽️",
        color: "bg-green-500",
    },
    "Baraj de selecție": {
        icon: "🔍",
        color: "bg-purple-500",
    },
    "Hatch The Code": {
        icon: "🥚",
        color: "bg-blue-500",
    },
    "Cină festivă": {
        icon: "🍴",
        color: "bg-green-500",
    },
    "Plecarea participanţilor": {
        icon: "🚶‍♂️",
        color: "bg-orange-500",
    },
    "Vânătoare de ouă": {
        icon: "🥚",
        color: "bg-blue-500",
    },

    "Pauză": {
        icon: "☕",
        color: "bg-pink-500",
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
                activity: "Cazarea participanţilor",
                location: places.rapsodia,
                observations:
                    "Consultaţi pe site în zona Centrul de concurs / Cazare repartizarea pe hoteluri",
            },
            {
                start: 15.0,
                end: 15.5,
                activity: "Pauză",
            },
            {
                start: 15.5,
                end: 17.5,
                activity: "Festivitate de deschidere",
                location: places.teatrulMihaiEminescu,
                observations: null,
            },
            {
                start: 17.5,
                end: 18.0,
                activity: "Pauză",
            },
            {
                start: 18.0,
                end: 19.0,
                activity: "Sesiunea de antrenament",
                location: places.casalux,
                observations: null,
            },
            {
                start: 19.0,
                end: 19.5,
                activity: "Pauză",
            },
            {
                start: 19.5,
                activity: "Cină",
                location: places.rapsodia,
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
                activity: "Mic dejun",
                location: places.rapsodia,
                observations: null,
            },

            {
                start: 9.0,
                end: 9.5,
                activity: "Sosire în centrul de concurs",
                location: places.casalux,
                observations: null,
            },

            {
                start: 9.5,
                end: 10.0,
                activity: "Pauză",
            },

            {
                start: 10.0,
                end: 14.0,
                activity: "Proba ONI",
                location: places.casalux,
                observations: null,
            },
            {
                start: 14.0,
                end: 14.5,
                activity: "Pauză",
            },
            {
                start: 14.5,
                end: 16.0,
                activity: "Masa de prânz",
                location: places.rapsodia,
                observations: null,
            },
            {
                start: 16.0,
                end: 17.0,
                activity: "Workshop – Algolymp",
                location: places.rapsodia,
                observations:
                    "La Workshop rezolvăm cu Algolymp problemele de la probă.",
            },
            {
                start: 17.0,
                end: 19.0,
                activity: "🔍🤖Hatch The Code!🥚🐇",
                location: places.parculPrimariei,
                observations:
                    "Vânătoare de ouă cu premii, organizată în Parcul Primăriei.",
            },
            {
                start: 19,
                end: 19.5,
                activity: "Pauză",
            },
            {
                start: 19.5,
                activity: "Cină",
                location: places.rapsodia,
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
                activity: "Mic dejun",
                location: places.rapsodia,
                observations: null,
            },
            {
                start: 9.0,
                end: 13.0,
                activity: "Excursie",
                location: places.vorona,
                observations: null,
            },
            {
                start: 13,
                end: 14.5,
                activity: "Pauză",
            },
            {
                start: 14.5,
                activity: "Masa de prânz",
                location: places.rapsodia,
                observations: null,
            },
            {
                start: 15.5,
                end: 18.0,
                activity: "Festivitate de premiere",
                location: places.teatrulMihaiEminescu,
                observations: null,
            },

            {
                start: 18,
                end: 19.5,
                activity: "Pauză",
            },
            {
                start: 19.5,
                activity: "Cină festivă",
                location: places.rapsodia,
                observations: null,
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
                activity: "Mic dejun",
                location: places.rapsodia,
                observations: null,
            },
            {
                start: 8.5,
                end: 9.0,
                activity: "Sosire în centrul de concurs",
                location: places.casalux,
                observations: null,
            },

            {
                start: 8.5,
                end: 9.5,
                branch: "fara baraj",
                activity: "Pauză",
            },
            {

                start: 9.5,
                end: 13.0,
                branch: "fara baraj",
                activity:
                    "Vizitarea orașului Botoșani / Activitate recreativă la Piscina Cornișa",
                location: places.cornisa,
                observations:
                    "Participanții care nu participă la proba de baraj și doresc să beneficieze de acces pe bază de ecuson la Piscina Cornișa, trebuie să aibă echipament adecvat.",
            },

            {
                start: 13,
                end: 13.5,
                branch: "fara baraj",
                activity:
                    "Pauză",
            },
            {
                start: 9.0,
                branch: "baraj",
                end: 13.0,
                activity:
                    "Barajul de selecţie a lotului naţional de junior",
                location: places.casalux,
                observations: null,
            },

            {
                start: 13,
                end: 13.5,
                branch: "baraj",
                activity:
                    "Pauză",
            },
            {
                start: 13.5,
                activity: "Masa de prânz",
                location: places.rapsodia,
                observations: null,
            },
            {
                start: 19.5,
                activity: "Cină",
                location: places.rapsodia,
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
                activity: "Mic dejun",
                location: places.rapsodia,
                observations: null,
            },

            {
                start: 9.0,
                end: 10.0,
                activity: "Pauză",
            },
            {
                start: 10.0,
                activity: "Plecarea participanţilor",
                location: null,
                observations: null,
            },
        ],
    },
];
