<script lang="ts">
    import { Separator } from "$lib/components/ui/separator";
    import { Button } from "$lib/components/ui/button";
    import { program, activityTypes, activities } from "./program";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Alert from "$lib/components/ui/alert";

    let active_branch: "baraj" | "fara baraj" = $state("baraj");
    let active_day = $state(program[0].date.toString());

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
</script>

<main class="flex flex-col gap-4">
    <h1
        class="text-slate-800 text-2xl sm:text-3xl lg:text-4xl pb-4 border-b-2 border-slate-100 px-4"
    >
        PROGRAMUL OLIMPIADEI NAŢIONALE DE INFORMATICĂ GIMNAZIU Botoșani, 14-18
        aprilie 2025
    </h1>

    <Tabs.Root value={active_day.toString()}>
        <Tabs.List class="overflow-x-auto flex mx-4">
            {#each days as day}
                <Tabs.Trigger
                    class="flex-1 min-w-fit px-4"
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
        class="flex flex-col pt-4 md:pt-0 md:flex-row {act.activity !== 'Pauză'
            ? 'bg-muted md:bg-inherit'
            : ''}  md:hover:bg-muted transition-all duration-200"
    >
        <div
            class="relative w-full md:w-32 text-slate-600 font-semibold text-base sm:text-lg flex flex-row justify-between px-4 items-center md:items-start "
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
                class="w-2 mt-2 {act.activity !== 'Pauză' ? 'bg-blue-500' : ''}"
            />
        </div>

        <div class="px-4 flex-1 lg:px-6 pb-12 md:pb-0 md:min-h-40">
            <h3
                class="text-slate-800 mb-2 sm:mb-3 text-lg sm:text-xl font-semibold flex items-center gap-2"
            >
                <span
                    >{activities[act.activity as keyof typeof activities]
                        ?.icon || "📅"}</span
                >
                <span>{act.activity}</span>
            </h3>
            {#if act.location}
                <a
                    href={act.location.url}
                    class="text-slate-500 hover:text-slate-800 hover:underline active:text-slate-800 cursor-pointer mb-2 sm:mb-3 text-base sm:text-lg flex items-center gap-2 tap-highlight-transparent"
                >
                    <span>📍</span>
                    <span>{act.location.name}</span>
                </a>
            {/if}

            {#if "branch" in act && act.activity !== "Pauză"}
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

            {#if act.observations}
                <Alert.Root
                    variant="default"
                    class="bg-blue-50 border-blue-200"
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
        </div>
    </div>
{/snippet}

{#snippet Indicator()}
    <div
        class="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(52,152,219,0.2)] transition-transform duration-200 group-hover:scale-120"
    ></div>
{/snippet}
