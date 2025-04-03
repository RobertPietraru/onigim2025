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
                },
                {
                    start: "18.00",
                    end: "19.00",
                    activity: "Sesiunea de antrenament",
                    map: embeds.casalux,
                    location: 'Centrul de concurs - Complex "Casa Lux"',
                },
                {
                    start: "19.30",
                    activity: "Cină",
                    map: embeds.rapsodia,
                    location: "Hotel Rapsodia/ Maria",
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
                },
                {
                    start: "9.00",
                    end: "9.30",
                    activity: "Sosire în centrul de concurs",
                    map: embeds.casalux,
                    location: 'Centrul de concurs- Complex "Casa Lux"',
                },
                {
                    start: "10.00",
                    end: "14.00",
                    activity: "Proba ONI",
                    map: embeds.casalux,
                    location: 'Centrul de concurs- Complex "Casa Lux"',
                },
                {
                    start: "14.30",
                    end: "16.00",
                    activity: "Masa de prânz",
                    map: embeds.rapsodia,
                    location: "Hotel Rapsodia/ Maria",
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
                },
                {
                    start: "9.00",
                    end: "13.00",
                    activity: "Excursie",
                    map: embeds.vorona,
                    location: "Vorona",
                },
                {
                    start: "14.30",
                    activity: "Masa de prânz",
                    map: embeds.rapsodia,
                    location: "Hotel Rapsodia/ Maria",
                },
                {
                    start: "15.30",
                    end: "18.00",
                    activity: "Festivitate de premiere",
                    map: embeds.mihaiEminescu,
                    location: 'Teatrul "Mihai Eminescu" Botoșani',
                },
                {
                    start: "19.30",
                    activity: "Cină festivă",
                    map: embeds.rapsodia,
                    location: 'Hotel Rapsodia - Sala "Mihai Eminescu"',
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
                },
                {
                    start: "8.30",
                    map: embeds.casalux,
                    end: "9.00",
                    activity: "Sosire în centrul de concurs",
                    location: 'Centrul de concurs - Complex "Casa Lux"',
                },
                {
                    start: "9.00",
                    map: embeds.casalux,
                    end: "13.00",
                    activity:
                        "Barajul de selecţie a lotului naţional de junior",
                    location: 'Centrul de concurs - Complex "Casa Lux"',
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
                },
                {
                    start: "19.30",
                    map: embeds.rapsodia,
                    activity: "Cină",
                    location: "Hotel Rapsodia",
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
                },
                {
                    start: "10.00",
                    end: "12.00",
                    activity: "Plecarea participanţilor",
                    map: null,
                },
            ],
        },
    ];
</script>

<div class="timeline-container">
    {#each activities as day}
        <div class="day-container">
            <h2 class="date">{day.date}</h2>
            <div class="activities">
                {#each day.activities as activity}
                    <div class="activity-row">
                        <div class="timeline">
                            <div class="time">
                                {activity.start}{activity.end
                                    ? ` - ${activity.end}`
                                    : ""}
                            </div>
                            <div class="line"></div>
                            <div class="dot"></div>
                        </div>
                        {#if activity.map}
                            <div class="map">
                                <iframe
                                    title="Map"
                                    src={activity.map}
                                    width="600"
                                    height="450"
                                    style="border:0;"
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        {/if}
                        <div class="content">
                            <h3>{activity.activity}</h3>
                            <p class="location">{activity.location}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .timeline-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2.5rem;
        font-family:
            system-ui,
            -apple-system,
            sans-serif;
    }

    .day-container {
        margin-bottom: 4rem;
        background: white;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .date {
        color: #2c3e50;
        font-size: 2rem;
        margin-bottom: 2.5rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #f0f2f5;
    }

    .activity-row {
        display: flex;
        margin-bottom: 2.5rem;
        transition: transform 0.2s ease;
    }

    .activity-row:hover {
        transform: translateX(8px);
    }

    .timeline {
        width: 200px;
        position: relative;
        padding-right: 2.5rem;
    }

    .time {
        color: #5a6c7d;
        font-weight: 600;
        font-size: 1.1rem;
    }

    .line {
        position: absolute;
        top: 24px;
        bottom: -24px;
        right: 7px;
        width: 2px;
        background: #e0e6ed;
    }

    .dot {
        position: absolute;
        top: 8px;
        right: 0;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #3498db;
        box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.2);
        transition: transform 0.2s ease;
    }

    .activity-row:hover .dot {
        transform: scale(1.2);
    }

    .content {
        flex: 1;
        padding: 0 1.5rem;
    }

    .content h3 {
        color: #2c3e50;
        margin: 0 0 0.75rem 0;
        font-size: 1.3rem;
        font-weight: 600;
    }

    .location {
        color: #64748b;
        margin: 0 0 0.75rem 0;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .location::before {
        content: "📍";
        font-size: 1rem;
    }

    .observations {
        color: #94a3b8;
        font-style: italic;
        margin: 0.75rem 0 0 0;
        font-size: 1rem;
        padding: 0.75rem;
        background: #f8fafc;
        border-radius: 6px;
        border-left: 3px solid #3498db;
    }

    .activity-row:last-child .line {
        display: none;
    }
</style>
