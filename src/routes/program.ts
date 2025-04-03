export let embeds = {
    rapsodia:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.49505729276814!2d26.660965935770726!3d47.74530935744337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734e97d48300001%3A0xb8fdc1b79bfc95fc!2sHotel%20Rapsodia!5e1!3m2!1sen!2sro!4v1743706672808!5m2!1sen!2sro",
    casalux:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.2602066654737!2d26.669390986994657!3d47.73368756830001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734e982d34d893b%3A0xab14af3ba30bbd53!2sPensiunea%20%22Casa%20Lux%22!5e1!3m2!1sen!2sro!4v1743706815733!5m2!1sen!2sro",
    mihaiEminescu:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.0073559917137!2d26.661765384136892!3d47.74437933454903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734e97d217f1483%3A0x40413eb2435b8652!2zVGVhdHJ1bCDigJ5NaWhhaSBFbWluZXNjdeKAnQ!5e1!3m2!1sen!2sro!4v1743708337350!5m2!1sen!2sro",
    parculPrimariei:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1273.3109395177125!2d26.65996857605567!3d47.74535337838612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734e97d367450cd%3A0x8dfcbba8039d9bbd!2sParcul%20Prim%C4%83riei!5e1!3m2!1sen!2sro!4v1743707274814!5m2!1sen!2sro",
    vorona: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20433.092975599975!2d26.59099012712378!3d47.591566260310586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734ddbc4a9c7007%3A0xa7e7f5239df00ae0!2s717475%20Vorona!5e1!3m2!1sen!2sro!4v1743707478859!5m2!1sen!2sro",
    cornisa:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1680.2588027417773!2d26.63250653896508!3d47.74179131707506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734e942507a0a2d%3A0x113d4270491a5e52!2zQ29ybmnImWEgV2F0ZXJwYXJrICYg4oCL4oCLU3BvcnRzIEJvdG_ImWFuaQ!5e1!3m2!1sen!2sro!4v1743707529413!5m2!1sen!2sro",
};
export const activityTypes = [
    "Cazare",
    "Festivitate",
    "Workshop",
    "Proba ONI",
    "Excursie",
    "Cină",
    "Mic dejun",
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
};

export let program = [
    {
        date: "14 aprilie 2025",
        activities: [
            {
                start: 11.0,
                end: 15.0,
                activity: "Cazarea participanţilor",
                map: embeds.rapsodia,
                location: "Hotel Rapsodia/ Maria",
                observations:
                    "Consultaţi pe site în zona Centrul de concurs / Cazare repartizarea pe hoteluri",
            },
            {
                start: 15.3,
                end: 17.3,
                activity: "Festivitate de deschidere",
                map: embeds.mihaiEminescu,
                location: 'Teatrul "Mihai Eminescu" Botoșani',
                observations: null,
            },
            {
                start: 18.0,
                end: 19.0,
                activity: "Sesiunea de antrenament",
                map: embeds.casalux,
                location: 'Centrul de concurs - Complex "Casa Lux"',
                observations: null,
            },
            {
                start: 19.3,
                activity: "Cină",
                map: embeds.rapsodia,
                location: "Hotel Rapsodia/ Maria",
                observations: null,
            },
        ],
    },
    {
        date: "15 aprilie 2025",
        activities: [
            {
                start: 7.0,
                end: 9.0,
                activity: "Mic dejun",
                map: embeds.rapsodia,
                location: "Hotel Rapsodia/ Maria",
                observations: null,
            },
            {
                start: 9.0,
                end: 9.3,
                activity: "Sosire în centrul de concurs",
                map: embeds.casalux,
                location: 'Centrul de concurs- Complex "Casa Lux"',
                observations: null,
            },
            {
                start: 10.0,
                end: 14.0,
                activity: "Proba ONI",
                map: embeds.casalux,
                location: 'Centrul de concurs- Complex "Casa Lux"',
                observations: null,
            },
            {
                start: 14.3,
                end: 16.0,
                activity: "Masa de prânz",
                map: embeds.rapsodia,
                location: "Hotel Rapsodia/ Maria",
                observations: null,
            },
            {
                start: 16.0,
                end: 17.0,
                activity: "Workshop – Algolymp",
                map: embeds.rapsodia,
                location: 'Hotel Rapsodia - Sala "Mihai Eminescu"',
                observations:
                    "La Workshop rezolvăm cu Algolymp problemele de la probă.",
            },
            {
                start: 17.0,
                end: 19.0,
                activity: "🔍🤖Hatch The Code!🥚🐇",
                map: embeds.parculPrimariei,
                location: "Parcul Primăriei",
                observations:
                    "Vânătoare de ouă cu premii, organizată în Parcul Primăriei.",
            },
            {
                start: 19.3,
                activity: "Cină",
                map: embeds.rapsodia,
                location: "Hotel Rapsodia/ Maria",
                observations: null,
            },
        ],
    },
    {
        date: "16 aprilie 2025",
        activities: [
            {
                start: 7.0,
                end: 9.0,
                activity: "Mic dejun",
                map: embeds.rapsodia,
                location: "Hotel Rapsodia/ Maria",
                observations: null,
            },
            {
                start: 9.0,
                end: 13.0,
                activity: "Excursie",
                map: embeds.vorona,
                location: "Vorona",
                observations: null,
            },
            {
                start: 14.3,
                activity: "Masa de prânz",
                map: embeds.rapsodia,
                location: "Hotel Rapsodia/ Maria",
                observations: null,
            },
            {
                start: 15.3,
                end: 18.0,
                activity: "Festivitate de premiere",
                map: embeds.mihaiEminescu,
                location: 'Teatrul "Mihai Eminescu" Botoșani',
                observations: null,
            },
            {
                start: 19.3,
                activity: "Cină festivă",
                map: embeds.rapsodia,
                location: 'Hotel Rapsodia - Sala "Mihai Eminescu"',
                observations: null,
            },
        ],
    },
    {
        date: "17 aprilie 2025",
        activities: [
            {
                start: 7.0,
                map: embeds.rapsodia,
                end: 8.3,
                activity: "Mic dejun",
                location: "Hotel Rapsodia/ Maria",
                observations: null,
            },
            {
                start: 8.3,
                map: embeds.casalux,
                end: 9.0,
                activity: "Sosire în centrul de concurs",
                location: 'Centrul de concurs - Complex "Casa Lux"',
                observations: null,
            },
            {
                free:
                {
                    start: 9.3,
                    map: embeds.cornisa,
                    end: 13.0,
                    activity:
                        "Vizitarea orașului Botoșani / Activitate recreativă la Piscina Cornișa",
                    location:
                        "Orașul Botoșani/ Cornișa AquaPark & Sports Botosani",
                    observations:
                        "Participanții care nu participă la proba de baraj și doresc să beneficieze de acces pe bază de ecuson la Piscina Cornișa, trebuie să aibă echipament adecvat.",
                },
                busy: {
                    start: 9.0,
                    map: embeds.casalux,
                    end: 13.0,
                    activity:
                        "Barajul de selecţie a lotului naţional de junior",
                    location: 'Centrul de concurs - Complex "Casa Lux"',
                    observations: null,
                },
            },

            {
                start: 13.3,
                map: embeds.rapsodia,
                activity: "Masa de prânz",
                location: "Hotel Rapsodia",
                observations: null,
            },
            {
                start: 19.3,
                map: embeds.rapsodia,
                activity: "Cină",
                location: "Hotel Rapsodia",
                observations: null,
            },
        ],
    },
    {
        date: "18 aprilie 2025",
        activities: [
            {
                start: 7.0,
                end: 9.0,
                activity: "Mic dejun",
                map: embeds.rapsodia,
                location: "Hotel Rapsodia/ Maria",
                observations: null,
            },
            {
                start: 10.0,
                end: 12.0,
                activity: "Plecarea participanţilor",
                location: "Botosani",
                map: null,
                observations: null,
            },
        ],
    },
];