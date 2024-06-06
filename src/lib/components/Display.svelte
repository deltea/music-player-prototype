<script lang="ts">
  import { currentMode } from "$lib/stores";
    import { cn } from "$lib/utils";

  export let value: number[];
  export let isPowerOn: boolean;
</script>

<div class={cn(
  "border-4 bg-white border-muted dark:border-white rounded-xl",
  {
    "w-full h-[12rem]": $currentMode === "gameboy" || $currentMode === "pager",
    "h-full w-full": $currentMode === "rabbit",
  },
)}>
  {#if isPowerOn}
    <h1 class="flex gap-2 justify-center items-center font-bold text-neutral h-full">
      <span>slider</span>
      <iconify-icon icon="mingcute:arrow-right-fill" class="text-base"></iconify-icon>
      <span class="text-primary">{value[0]}%</span>
    </h1>
  {:else}
    <h1 class="flex flex-col justify-center items-center font-bold text-neutral h-full">
      the
      <span class="flex">
        <span class="text-primary">{$currentMode}</span>
        <span>-inspired</span>
      </span>
      design
    </h1>
  {/if}
</div>
