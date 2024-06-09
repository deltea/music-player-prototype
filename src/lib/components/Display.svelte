<script lang="ts">
  import { currentMode } from "$lib/stores";
  import { cn } from "$lib/utils";

  export let value: number[];
  export let isPowerOn: boolean;

  let state = "home";
</script>

<div class={cn(
  "border-4 bg-white border-muted dark:border-primary rounded-xl relative",
  {
    "w-full h-[12rem]": $currentMode === "gameboy" || $currentMode === "pager",
    "h-full w-full": $currentMode === "rabbit",
  },
)}>
  {#if isPowerOn}
    {#if state === "music"}
      <h1 class="flex gap-2 justify-center items-center font-bold text-neutral h-full">
        <span>music</span>
        <iconify-icon icon="mingcute:music-2-fill"></iconify-icon>
      </h1>
    {:else if state === "videos"}
      <h1 class="flex gap-2 justify-center items-center font-bold text-neutral h-full">
        <span>videos</span>
        <iconify-icon icon="mingcute:tv-2-fill"></iconify-icon>
      </h1>
    {:else if state === "camera"}
      <h1 class="flex gap-2 justify-center items-center font-bold text-neutral h-full">
        <span>camera</span>
        <iconify-icon icon="mingcute:camera-2-fill"></iconify-icon>
      </h1>
    {:else if state === "gallery"}
      <h1 class="flex gap-2 justify-center items-center font-bold text-neutral h-full">
        <span>gallery</span>
        <iconify-icon icon="mingcute:photo-album-2-fill"></iconify-icon>
      </h1>
    {:else}
      <!-- Home -->
      <div class="h-full flex items-center justify-evenly">
        <button
          on:click={() => (state = "music")}
          class="inline-flex flex-col items-center gap-2 font-bold"
        >
          <iconify-icon icon="mingcute:music-2-fill" class="text-4xl"></iconify-icon>
          <span>music</span>
        </button>

        <button
          on:click={() => (state = "videos")}
          class="inline-flex flex-col items-center gap-2 font-bold"
        >
          <iconify-icon icon="mingcute:tv-2-fill" class="text-4xl"></iconify-icon>
          <span>videos</span>
        </button>

        <button
          on:click={() => (state = "camera")}
          class="inline-flex flex-col items-center gap-2 font-bold"
        >
          <iconify-icon icon="mingcute:camera-2-fill" class="text-4xl"></iconify-icon>
          <span>camera</span>
        </button>

        <button
          on:click={() => (state = "gallery")}
          class="inline-flex flex-col items-center gap-2 font-bold"
        >
          <iconify-icon icon="mingcute:photo-album-2-fill" class="text-4xl"></iconify-icon>
          <span>gallery</span>
        </button>
      </div>
    {/if}

    <!-- Back button -->
    {#if state !== "home"}
      <button
        on:click={() => (state = "home")}
        class="absolute top-1 left-1 hover:scale-110 active:scale-100 flex justify-center items-center text-primary"
      >
        <iconify-icon icon="mingcute:arrow-left-circle-fill" class="text-2xl"></iconify-icon>
      </button>
    {/if}
  {:else}
    <h1 class="flex flex-col justify-center items-center font-bold text-neutral h-full">
      the
      <span class="flex">
        <span class="text-primary">
          {#if $currentMode === "gameboy"}
            <span>gameboy</span>
          {:else if $currentMode === "pager"}
            <span>pager</span>
          {:else}
            <span>rabbit r1</span>
          {/if}
        </span>
        <span>-inspired</span>
      </span>
      design
    </h1>
  {/if}
</div>
