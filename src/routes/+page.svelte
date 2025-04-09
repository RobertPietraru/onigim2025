<script lang="ts">
    import { Separator } from "$lib/components/ui/separator";
    import { Button } from "$lib/components/ui/button";
    import { program, activities } from "./program";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Alert from "$lib/components/ui/alert";
    import { onMount } from "svelte";

    let active_branch: "baraj" | "fara baraj" | "profesor" | "elev" =
        $state("elev");
    let active_day = $state(program[0].date.toString());
    $inspect(active_branch);

    let days = $derived(
        program.map((day) => {
            return {
                ...day,
                activities: day.activities.filter((act) => {
                    if (!("branch" in act)) {
                        return true;
                    }
                    return active_branch == act.branch;
                }),
            };
        }),
    );

    onMount(() => {
        setTimeout(() => {
            const height = document.body.scrollHeight;
            parent.postMessage({ iframeHeight: height }, "*");
        }, 100);
    });
</script>

<main class="flex flex-col gap-4 bg-[#f0f0f0]">

    <Tabs.Root
        value={active_day.toString()}
        onValueChange={() => {
            setTimeout(() => {
                const height = document.body.scrollHeight;
                parent.postMessage({ iframeHeight: height }, "*");
            }, 100);
        }}
    >
        <Tabs.List class="overflow-x-auto flex mx-4">
            {#each days as day}
                <Tabs.Trigger
                    class="flex-1 min-w-fit px-4"
                    onclick={() => {
                        if (day.date == 16) {
                            active_branch = "elev";
                            return;
                        }

                        if (day.date == 17) {
                            active_branch = "baraj";
                            return;
                        }
                        active_branch = "elev";
                    }}
                    value={day.date.toString()}
                >
                    <span class="hidden md:inline">
                        {day.day}, {day.date} aprilie 2025
                    </span>
                    <span class="md:hidden">
                        {day.day}
                    </span>
                </Tabs.Trigger>
            {/each}
        </Tabs.List>

        {#each days as day}
            <Tabs.Content value={day.date.toString()}>
                <h2
                    class="text-slate-800 text-2xl sm:text-3xl lg:text-4xl sm:mb-10 pb-4 border-b-2 border-slate-100 px-4"
                >
                    <span>{day.day}, {day.date} Aprilie 2025</span>
                </h2>
                {#each day.activities as activity}
                    {@render Activity(activity)}
                {/each}
            </Tabs.Content>
        {/each}
    </Tabs.Root>
</main>

{#snippet Activity(act: (typeof program)[number]["activities"][number])}
    <div
        class="flex flex-col pt-4 md:pt-0 md:flex-row {!(
            'mainActivity' in act.activity && !act.activity.mainActivity
        )
            ? 'bg-muted md:bg-inherit'
            : ''}  md:hover:bg-muted transition-all duration-200"
    >
        <div
            class="relative w-full md:w-32 text-slate-600 font-semibold text-base sm:text-lg flex flex-row justify-between px-4 items-center md:items-start"
        >
            <span
                >{act.start
                    ?.toFixed(2)
                    .replace(".", ":")
                    .replace("50", "30")}</span
            >

            {#if act.end}
                <Separator
                    orientation="horizontal"
                    class="flex-1 h-[4px] mx-4 md:hidden"
                />
            {/if}
            {#if act.end}
                <span class="md:hidden"
                    >{act.end
                        .toFixed(2)
                        .replace(".", ":")
                        .replace("50", "30")}</span
                >
            {/if}
        </div>
        <div class="scale-0 md:scale-100">
            <div
                class="mt-3 absolute -translate-y-1/2 left-1/2 -translate-x-1/2 z-10"
            >
                {@render Indicator()}
            </div>
            <Separator
                orientation="vertical"
                class="w-2 mt-2 {!('mainActivity' in act.activity) ||
                act.activity.mainActivity
                    ? 'bg-blue-500'
                    : ''}"
            />
        </div>

        <div class="px-4 flex-1 lg:px-6 pb-6 md:pb-0 md:min-h-20">
            <h3
                class="text-slate-800 mb-2 sm:mb-3 text-lg sm:text-xl font-semibold flex items-center gap-2"
            >
                {#if act.activity.label}
                    <span
                        >{activities[
                            act.activity.type as keyof typeof activities
                        ]?.icon || "📅"}</span
                    >
                    <span>{act.activity.label}</span>
                {/if}
            </h3>
            {#if act.locations && act.locations.length > 0}
                {#each act.locations as location}
                    <a
                        href={location.url}
                        class="text-slate-500 hover:text-slate-800 hover:underline active:text-slate-800 cursor-pointer mb-2 sm:mb-3 text-base sm:text-lg flex items-center gap-2 tap-highlight-transparent"
                    >
                        <span>📍</span>
                        <span>{location.name}</span>
                    </a>
                {/each}
            {/if}

            {#if "innerLocations" in act && act.innerLocations && act.innerLocations.length > 0}
                {#each act.innerLocations as location}
                    <a
                        href={location.url}
                        class="text-slate-500 hover:text-slate-800 hover:underline active:text-slate-800 cursor-pointer mb-2 sm:mb-3 text-base sm:text-lg flex items-center gap-2 tap-highlight-transparent pl-4 border-l-2 border-slate-200"
                    >
                        <span>️</span>
                        <span>{location.name}</span>
                    </a>
                {/each}
            {/if}

            {#if "branch" in act && act.activity.type !== "freeTime" && (!("mainActivity" in act.activity) || act.activity.mainActivity) && ["baraj", "fara baraj"].includes(active_branch)}
                <Button
                    variant="outline"
                    class="my-2"
                    onclick={() => {
                        if (active_branch == "baraj") {
                            active_branch = "fara baraj";
                        } else {
                            active_branch = "baraj";
                        }
                    }}
                >
                    <span>
                        {active_branch == "baraj" ? "🏝️" : "👨‍💻"}
                    </span>
                    <span
                        >{active_branch == "baraj"
                            ? "Vezi activitățile alternative"
                            : "Vezi programul probei de baraj"}</span
                    >
                </Button>
            {/if}

            {#if "branch" in act && act.activity.type !== "freeTime" && ["profesor", "elev"].includes(active_branch)}
                <Button
                    variant="outline"
                    class="my-2"
                    onclick={() => {
                        if (active_branch == "profesor") {
                            active_branch = "elev";
                        } else {
                            active_branch = "profesor";
                        }
                    }}
                >
                    <span>
                        {active_branch == "profesor" ? "👨‍💻" : "👨‍🏫"}
                    </span>
                    <span
                        >{active_branch == "profesor"
                            ? "Vezi programul elevilor"
                            : "Vezi programul profesorilor"}</span
                    >
                </Button>
            {/if}

            {#if "files" in act && act.files && act.files.length > 0}
                <Separator orientation="horizontal" class="my-2" />
                {#each act.files as file}
                    <a
                        href={file.url}
                        class="text-slate-500 hover:text-slate-800 hover:underline active:text-slate-800 cursor-pointer mb-2 sm:mb-3 text-base sm:text-lg flex items-center gap-2 tap-highlight-transparent"
                    >
                        <span>📄</span>
                        <span>{file.name}</span>
                    </a>
                {/each}
            {/if}

            {#if act.observations}
                <Alert.Root
                    variant="default"
                    class="bg-blue-50 border-blue-200 max-w-2xl"
                >
                    <Alert.Title
                        class="text-blue-900 font-semibold flex items-center gap-2"
                    >
                        <span>ℹ️</span>
                        <span>Observații importante</span>
                    </Alert.Title>
                    <Alert.Description class="text-blue-800 mt-2">
                        {act.observations}
                    </Alert.Description>
                </Alert.Root>
            {/if}
            <div class="md:h-4"></div>
        </div>
    </div>
{/snippet}

{#snippet Indicator()}
    <div
        class="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(52,152,219,0.2)] transition-transform duration-200 group-hover:scale-120"
    ></div>
{/snippet}
