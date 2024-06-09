<script lang="ts">
  import { Slider } from "bits-ui";
  import { cn } from "$lib/utils";
  import { currentMode } from "$lib/stores";

  import PaintSelect from "$components/PaintSelect.svelte";
  import Toolbar from "$components/Toolbar.svelte";
  import Display from "$components/Display.svelte";

  let value = [50];
  let isPaintOpen = false;
  let isPowerOn = false;
</script>

<main class="flex flex-col justify-center items-center h-screen bg-white dark:bg-background duration-0 selection:bg-primary selection:text-white text-neutral">
  <div class={cn(
    "relative",
    { "pr-16": $currentMode === "gameboy" },
    { "pr-32": $currentMode === "pager" },
    { "pr-16": $currentMode === "rabbit" },
  )}>
    <!-- The Player -->
    <div class={cn(
      "border-4 bg-white dark:bg-primary border-muted dark:border-primary rounded-xxl p-8 flex items-center z-50 relative",
      {
        "translate-x-8": !isPaintOpen && ($currentMode === "gameboy" || $currentMode === "rabbit"),
        "translate-x-16": !isPaintOpen && $currentMode === "pager",
        "w-gameboy-width h-gameboy-height flex-col gap-8": $currentMode === "gameboy",
        "w-pager-width h-pager-height flex-col gap-8": $currentMode === "pager",
        "w-rabbit-width h-rabbit-height": $currentMode === "rabbit",
      },
    )}>
      <Display
        bind:value
        bind:isPowerOn
      />

      <!-- Top buttons -->
      {#if $currentMode === "pager" || $currentMode === "rabbit"}
        <button
          class="absolute -top-[19.5px] hover:scale-y-110 active:scale-y-75 origin-bottom left-16 w-16 h-4 rounded-t-lg bg-neutral dark:bg-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-neutral dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background"
        ></button>

        <button
          class="absolute -top-[19.5px] hover:scale-y-110 active:scale-y-75 origin-bottom right-16 w-16 h-4 rounded-t-lg bg-neutral dark:bg-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-neutral dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background"
        ></button>
      {/if}

      <!-- Controls -->
      <div class={cn(
        "grow flex flex-col justify-center gap-10",
        { "w-full px-2": $currentMode === "gameboy" || $currentMode === "pager" },
        { "h-full": $currentMode === "rabbit" },
      )}>
        {#if $currentMode === "gameboy"}
          <div class="flex justify-between items-center">
            <!-- Arrows -->
            <div class="grid grid-cols-3 size-[6rem]">
              <div></div>
              <button class="bg-neutral hover:scale-110 active:scale-100 rounded-t-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-neutral dark:focus-visible:ring-neutral focus-visible:ring-offset-2 dark:focus-visible:ring-offset-primary"></button>
              <div></div>
              <button class="bg-neutral hover:scale-110 active:scale-100 rounded-l-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-neutral dark:focus-visible:ring-neutral focus-visible:ring-offset-2 dark:focus-visible:ring-offset-primary"></button>
              <div class="bg-neutral"></div>
              <button class="bg-neutral hover:scale-110 active:scale-100 rounded-r-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-neutral dark:focus-visible:ring-neutral focus-visible:ring-offset-2 dark:focus-visible:ring-offset-primary"></button>
              <div></div>
              <button class="bg-neutral hover:scale-110 active:scale-100 rounded-b-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-neutral dark:focus-visible:ring-neutral focus-visible:ring-offset-2 dark:focus-visible:ring-offset-primary"></button>
              <div></div>
            </div>

            <!-- A/B Buttons -->
            <div class="flex gap-4 rotate-skew -translate-y-4">
              <div class="size-10 relative">
                <button
                  class="size-full rounded-full bg-primary dark:bg-white hover:scale-110 active:scale-100 relative focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-primary"
                ></button>
                <span class="font-bold text-xl text-neutral dark:text-white absolute left-1/2 -translate-x-1/2 -bottom-8">
                  A
                </span>
              </div>

              <div class="size-10 relative">
                <button
                  class="size-full rounded-full bg-primary dark:bg-white hover:scale-110 active:scale-100 relative focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-primary"
                ></button>
                <span class="font-bold text-xl text-neutral dark:text-white absolute left-1/2 -translate-x-1/2 -bottom-8">
                  B
                </span>
              </div>
            </div>
          </div>
        {/if}

        <!-- Tactile slider -->
        <Slider.Root
          bind:value
          let:thumbs
          min={0}
          max={100}
          orientation={$currentMode === "rabbit" ? "vertical" : "horizontal"}
          class={cn(
            "relative flex items-center",
            {
              "w-full": $currentMode === "gameboy" || $currentMode === "pager",
              "h-full flex-col ml-8 my-2": $currentMode === "rabbit",
            },
          )}
        >
          <span class={cn(
            "relative overflow-hidden rounded-full bg-muted dark:bg-white",
            {
              "h-4 w-full": $currentMode === "gameboy" || $currentMode === "pager",
              "w-4 h-full": $currentMode === "rabbit",
            },
          )}>
            <Slider.Range class={cn(
              "absolute bg-primary dark:bg-neutral duration-75",
              {
                "h-full": $currentMode === "gameboy" || $currentMode === "pager",
                "w-full": $currentMode === "rabbit",
              }
            )} />
          </span>

          {#each thumbs as thumb}
            <Slider.Thumb
              {thumb}
              class={cn(
                "block bg-primary dark:bg-neutral rounded-md z-10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary dark:focus-visible:ring-neutral focus-visible:ring-offset-2 dark:focus-visible:ring-offset-primary hover:cursor-pointer duration-75 hover:scale-110 active:scale-100",
                {
                  "w-5 h-8": $currentMode === "gameboy" || $currentMode === "pager",
                  "w-8 h-5": $currentMode === "rabbit",
                }
              )}
            />
          {/each}
        </Slider.Root>
      </div>
    </div>

    <!-- Paint Controls -->
    {#if isPaintOpen}
      <PaintSelect />
    {/if}
  </div>

  <Toolbar
    bind:isPaintOpen
    bind:isPowerOn
  />
</main>
