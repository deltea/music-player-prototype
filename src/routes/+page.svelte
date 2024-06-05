<script lang="ts">
  import { Slider } from "bits-ui";
  import { cn } from "$lib/utils";
  import { currentMode } from "$lib/stores";

  import PaintSelect from "$components/PaintSelect.svelte";
  import Toolbar from "$components/Toolbar.svelte";

  let value = [50];
  let isPaintOpen = false;
  let isPowerOn = false;
</script>

<main class="flex flex-col justify-center items-center h-screen bg-white dark:bg-background duration-0 selection:bg-primary selection:text-white">
  <div class={cn(
    "relative",
    { "pr-16": $currentMode === "gameboy" },
    { "pr-32": $currentMode === "pager" },
  )}>
    <!-- The Player -->
    <div class={cn(
      "border-4 bg-white dark:bg-primary border-muted dark:border-primary rounded-xxl p-8 flex flex-col gap-8 items-center z-50 relative",
      {
        "translate-x-8": !isPaintOpen && $currentMode === "gameboy",
        "translate-x-16": !isPaintOpen && $currentMode === "pager",
        "w-gameboy-width h-gameboy-height": $currentMode === "gameboy",
        "w-pager-width h-pager-height": $currentMode === "pager",
      },
    )}>
      <!-- Screen content -->
      <div class="border-4 bg-white border-muted dark:border-white rounded-xl w-full h-[12rem] flex flex-col justify-center items-center font-bold text-neutral">
        the
        <span class="text-primary">{$currentMode}</span>
        design
      </div>

      <!-- Pager design buttons -->
      {#if $currentMode === "pager"}
        <button
          class="absolute -top-[23.5px] hover:scale-110 active:scale-100 origin-bottom left-16 w-16 h-6 rounded-t-lg bg-neutral dark:bg-white"
        ></button>
        <button
          class="absolute -top-[23.5px] hover:scale-110 active:scale-100 origin-bottom right-16 w-16 h-6 rounded-t-lg bg-neutral dark:bg-white"
        ></button>
      {/if}

      <!-- Controls -->
      <div class="w-full flex-grow flex flex-col justify-center gap-10">
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
            <div class="flex gap-4 rotate-skew">
              <button
                class="rounded-full bg-primary dark:bg-white size-10 hover:scale-110 active:scale-100 relative focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-primary"
              ></button>
              <button
                class="rounded-full bg-primary dark:bg-white size-10 hover:scale-110 active:scale-100 relative focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-primary"
              ></button>
            </div>
          </div>
        {/if}

        <!-- Tactile slider -->
        <Slider.Root
          bind:value={value}
          let:thumbs
          min={0}
          max={100}
          class="relative flex w-full items-center"
        >
          <span class="relative h-4 w-full grow overflow-hidden rounded-full bg-muted dark:bg-white">
            <Slider.Range class="absolute h-full bg-primary dark:bg-neutral duration-75" />
          </span>

          {#each thumbs as thumb}
            <Slider.Thumb
              {thumb}
              class="block w-5 h-8 bg-primary dark:bg-neutral rounded-md z-10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary dark:focus-visible:ring-neutral focus-visible:ring-offset-2 dark:focus-visible:ring-offset-primary hover:cursor-pointer duration-75 hover:scale-110 active:scale-100"
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
