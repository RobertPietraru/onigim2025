<script>
    let embeds = {
        rapsodia:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964.9901145855364!2d26.660965935770726!3d47.74530935744337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734e97d48300001%3A0xb8fdc1b79bfc95fc!2sHotel%20Rapsodia!5e1!3m2!1sen!2sro!4v1743706672808!5m2!1sen!2sro",
        casalux:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1680.5204133309473!2d26.669390986994657!3d47.73368756830001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734e982d34d893b%3A0xab14af3ba30bbd53!2sPensiunea%20%22Casa%20Lux%22!5e1!3m2!1sen!2sro!4v1743706815733!5m2!1sen!2sro",
        mihaiEminescu:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10545.55856353242!2d26.643337500792963!3d47.74611073003121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734e97d217f1483%3A0x40413eb2435b8652!2zVGVhdHJ1bCDigJ5NaWhhaSBFbWluZXNjdeKAnQ!5e1!3m2!1sen!2sro!4v1743707166254!5m2!1sen!2sro",
        parculPrimariei:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2546.621879035425!2d26.65996857605567!3d47.74535337838612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734e97d367450cd%3A0x8dfcbba8039d9bbd!2sParcul%20Prim%C4%83riei!5e1!3m2!1sen!2sro!4v1743707274814!5m2!1sen!2sro",
        vorona: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40866.18595119995!2d26.59099012712378!3d47.591566260310586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734ddbc4a9c7007%3A0xa7e7f5239df00ae0!2s717475%20Vorona!5e1!3m2!1sen!2sro!4v1743707478859!5m2!1sen!2sro",
        cornisa:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.517605483546!2d26.63250653896508!3d47.74179131707506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734e942507a0a2d%3A0x113d4270491a5e52!2zQ29ybmnImWEgV2F0ZXJwYXJrICYg4oCL4oCLU3BvcnRzIEJvdG_ImWFuaQ!5e1!3m2!1sen!2sro!4v1743707529413!5m2!1sen!2sro",
    };
    let activities = [
        {
            date: "14 aprilie 2025",
            activities: [
                {
                    start: "11.00",
                    end: "15.00",
                    activity: "Cazarea participanţilor",
                    map: embeds.rapsodia,
                    location: "Hotel Rapsodia/ Maria",
                    observations:
                        "Consultaţi pe site în zona Centrul de concurs / Cazare repartizarea pe hoteluri",
                },
                {
                    start: "15.30",
                    end: "17.30",
                    activity: "Festivitate de deschidere",
                    map: embeds.mihaiEminescu,
                    location: 'Teatrul "Mihai Eminescu" Botoșani',
                    observations:null,
                },
                {
                    start: "18.00",
                    end: "19.00",
                    activity: "Sesiunea de antrenament",
                    map: embeds.casalux,
                    location: 'Centrul de concurs - Complex "Casa Lux"',
                    observations:null,
                },
                {
                    start: "19.30",
                    activity: "Cină",
                    map: embeds.rapsodia,
                    location: "Hotel Rapsodia/ Maria",
                    observations:null,
                },
            ],
        },
        {
            date: "15 aprilie 2025",
            activities: [
                {
                    start: "7.00",
                    end: "9.00",
                    activity: "Mic dejun",
                    map: embeds.rapsodia,
                    location: "Hotel Rapsodia/ Maria",
                    observations:null,
                },
                {
                    start: "9.00",
                    end: "9.30",
                    activity: "Sosire în centrul de concurs",
                    map: embeds.casalux,
                    location: 'Centrul de concurs- Complex "Casa Lux"',
                    observations:null,
                },
                {
                    start: "10.00",
                    end: "14.00",
                    activity: "Proba ONI",
                    map: embeds.casalux,
                    location: 'Centrul de concurs- Complex "Casa Lux"',
                    observations:null,
                },
                {
                    start: "14.30",
                    end: "16.00",
                    activity: "Masa de prânz",
                    map: embeds.rapsodia,
                    location: "Hotel Rapsodia/ Maria",
                    observations:null,
                },
                {
                    start: "16.00",
                    end: "17.00",
                    activity: "Workshop – Algolymp",
                    map: embeds.rapsodia,
                    location: 'Hotel Rapsodia - Sala "Mihai Eminescu"',
                    observations:
                        "La Workshop rezolvăm cu Algolymp problemele de la probă.",
                },
                {
                    start: "17.00",
                    end: "19.00",
                    activity: "🔍🤖Hatch The Code!🥚🐇",
                    map: embeds.parculPrimariei,
                    location: "Parcul Primăriei",
                    observations:
                        "Vânătoare de ouă cu premii, organizată în Parcul Primăriei.",
                },
                {
                    start: "19.30",
                    activity: "Cină",
                    map: embeds.rapsodia,
                    location: "Hotel Rapsodia/ Maria",
                    observations:null,
                },
            ],
        },
        {
            date: "16 aprilie 2025",
            activities: [
                {
                    start: "7.00",
                    end: "9.00",
                    activity: "Mic dejun",
                    map: embeds.rapsodia,
                    location: "Hotel Rapsodia/ Maria",
                    observations:null,
                },
                {
                    start: "9.00",
                    end: "13.00",
                    activity: "Excursie",
                    map: embeds.vorona,
                    location: "Vorona",
                    observations:null,
                },
                {
                    start: "14.30",
                    activity: "Masa de prânz",
                    map: embeds.rapsodia,
                    location: "Hotel Rapsodia/ Maria",
                    observations:null,
                },
                {
                    start: "15.30",
                    end: "18.00",
                    activity: "Festivitate de premiere",
                    map: embeds.mihaiEminescu,
                    location: 'Teatrul "Mihai Eminescu" Botoșani',
                    observations:null,
                    },
                {
                    start: "19.30",
                    activity: "Cină festivă",
                    map: embeds.rapsodia,
                    location: 'Hotel Rapsodia - Sala "Mihai Eminescu"',
                    observations:null,
                },
            ],
        },
        {
            date: "17 aprilie 2025",
            activities: [
                {
                    start: "7.00",
                    map: embeds.rapsodia,
                    end: "8.30",
                    activity: "Mic dejun",
                    location: "Hotel Rapsodia/ Maria",
                    observations:null,
                },
                {
                    start: "8.30",
                    map: embeds.casalux,
                    end: "9.00",
                    activity: "Sosire în centrul de concurs",
                    location: 'Centrul de concurs - Complex "Casa Lux"',
                    observations:null,
                },
                {
                    start: "9.00",
                    map: embeds.casalux,
                    end: "13.00",
                    activity:
                        "Barajul de selecţie a lotului naţional de junior",
                    location: 'Centrul de concurs - Complex "Casa Lux"',
                    observations:null,
                },
                {
                    start: "9.30",
                    map: embeds.cornisa,
                    end: "13.00",
                    activity:
                        "Vizitarea orașului Botoșani / Activitate recreativă la Piscina Cornișa",
                    location:
                        "Orașul Botoșani/ Cornișa AquaPark & Sports Botosani",
                    observations:
                        "Participanții care nu participă la proba de baraj și doresc să beneficieze de acces pe bază de ecuson la Piscina Cornișa, trebuie să aibă echipament adecvat.",
                },
                {
                    start: "13.30",
                    map: embeds.rapsodia,
                    activity: "Masa de prânz",
                    location: "Hotel Rapsodia",
                    observations:null,
                },
                {
                    start: "19.30",
                    map: embeds.rapsodia,
                    activity: "Cină",
                    location: "Hotel Rapsodia",
                    observations:null,
                },
            ],
        },
        {
            date: "18 aprilie 2025",
            activities: [
                {
                    start: "7.00",
                    end: "9.00",
                    activity: "Mic dejun",
                    map: embeds.rapsodia,
                    location: "Hotel Rapsodia/ Maria",
                    observations:null,
                },
                {
                    start: "10.00",
                    end: "12.00",
                    activity: "Plecarea participanţilor",
                    map: null,
                    observations:null,
                },
            ],
        },
    ];
</script>
<div class="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-10 font-sans">
    <h1 class="text-slate-800 text-4xl mb-10 pb-4 border-b-2 border-slate-100">PROGRAMUL OLIMPIADEI NAŢIONALE DE INFORMATICĂ GIMNAZIU Botoșani, 14-18 aprilie 2025</h1>
    {#each activities as day}
        <div class="mb-8 sm:mb-16 bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-md">
            <h2 class="text-slate-800 text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-10 pb-4 border-b-2 border-slate-100">
                <span>{day.date}</span>
                <div></div>
            </h2>
            <div>
                {#each day.activities as activity}
                    <div class="flex flex-col lg:flex-row mb-8 sm:mb-10 transition-transform duration-200 hover:translate-x-2">
                        <div class="w-full lg:w-[200px] relative pr-10 mb-4 lg:mb-0">
                            <div class="text-slate-600 font-semibold text-base sm:text-lg">
                                <span>{activity.start}</span>
                                {#if activity.end}
                                    <span>→</span>
                                    <span>{activity.end}</span>
                                {/if}
                            </div>
                            <div class="hidden lg:block absolute top-6 -bottom-6 right-[7px] w-0.5 bg-slate-200"></div>
                            <div>
                                <div class="hidden lg:block absolute top-2 right-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(52,152,219,0.2)] transition-transform duration-200 group-hover:scale-120"></div>
                                <div></div>
                            </div>
                        </div>
                        <div class="flex-1 px-0 lg:px-6">
                            <h3 class="text-slate-800 mb-2 sm:mb-3 text-lg sm:text-xl font-semibold">{activity.activity}</h3>
                            <p class="text-slate-500 mb-2 sm:mb-3 text-base sm:text-lg flex items-center gap-2">
                                <span>📍</span>
                                <span>{activity.location}</span>
                            </p>
                            {#if activity.observations}
                                <div class="text-slate-400 italic mt-2 sm:mt-3 text-sm sm:text-base p-3 bg-slate-50 rounded-md border-l-[3px] border-blue-500">
                                    <span>ℹ️</span>
                                    <p>{activity.observations}</p>
                                </div>
                            {/if}
                        </div>

                        {#if activity.map}
                            <div class="map w-full lg:w-auto mt-4 lg:mt-0">
                                <div class="map-container relative overflow-hidden pt-[56.25%] lg:pt-0 lg:h-[450px] lg:w-[600px]">
                                    <iframe
                                        title="Map"
                                        src={activity.map}
                                        class="absolute top-0 left-0 w-full h-full border-0"
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>
