<script lang="ts">
    import { Separator } from "$lib/components/ui/separator";
    import { Button } from "$lib/components/ui/button";
    import { program, activityTypes, activities } from "./program";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Alert from "$lib/components/ui/alert";

    let active_branch = $state("baraj");
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

<div class="p-4 sm:p-6 lg:p-10 font-sans">
    <h1
        class="text-slate-800 text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 lg:mb-10 pb-4 border-b-2 border-slate-100"
    >
        PROGRAMUL OLIMPIADEI NAŢIONALE DE INFORMATICĂ GIMNAZIU Botoșani, 14-18
        aprilie 2025
    </h1>

    <Tabs.Root value={active_day.toString()}>
        <Tabs.List class="w-full overflow-x-auto flex">
            {#each days as day}
                <Tabs.Trigger
                    class="flex-1 min-w-fit px-4"
                    value={day.date.toString()}
                >
                    <span class="hidden sm:inline">
                        {day.day}, {day.date} aprilie 2025
                    </span>
                    <span class="sm:hidden">
                        {day.day}
                    </span>
                </Tabs.Trigger>
            {/each}
        </Tabs.List>

        {#each days as day}
            <Tabs.Content value={day.date.toString()}>
                <div
                    class="sm:mb-16 bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-md relative"
                >
                    <h2
                        class="text-slate-800 text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-10 pb-4 border-b-2 border-slate-100"
                    >
                        <span>{day.day}, {day.date} Aprilie 2025</span>
                    </h2>
                    <div class="relative">
                        {#each day.activities as activity, index}
                            {@render Activity(
                                activity,
                                day.activities[index + 1],
                            )}
                        {/each}
                    </div>
                </div>
            </Tabs.Content>
        {/each}
    </Tabs.Root>
</div>

{#snippet Activity(
    act: (typeof program)[number]["activities"][number],
    nextActivity: (typeof program)[number]["activities"][number],
)}
    <div
        class="flex flex-col lg:flex-row hover:bg-muted transition-all duration-200"
    >
        <div class="relative pr-10 w-32">
            <div
                class="text-slate-600 font-semibold text-base sm:text-lg flex flex-col justify-between h-full"
            >
                <span
                    >{act.start
                        ?.toFixed(2)
                        .replace(".", ":")
                        .replace("50", "30")}</span
                >
                {#if act.end && act.end !== nextActivity?.start}
                    {console.log(act.end, nextActivity?.start)}
                    <span class="mb-8"
                        >{act.end
                            .toFixed(2)
                            .replace(".", ":")
                            .replace("50", "30")}</span
                    >
                {/if}
            </div>
        </div>
        <div class="relative">
            <div
                class="mt-3 absolute -translate-y-1/2 left-1/2 -translate-x-1/2 z-10"
            >
                {@render Indicator()}
            </div>
            <Separator
                orientation="vertical"
                class="w-2   mt-2 {act.activity !== 'Pauză'
                    ? 'bg-blue-500'
                    : ''}"
            />
        </div>

        <div
            class="flex-1 px-0 lg:px-6 {act.activity === 'Pauză'
                ? 'flex flex-col justify-center min-h-40'
                : ''}"
        >
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
                    class="text-slate-500 mb-2 sm:mb-3 text-base sm:text-lg flex items-center gap-2"
                >
                    <span>📍</span>
                    <span>{act.location.name}</span>
                </a>
            {/if}

            {#if act.observations}
                <Alert.Root variant="default" class="bg-blue-50 border-blue-200">
                    <Alert.Title class="text-blue-900 font-semibold flex items-center gap-2">
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
