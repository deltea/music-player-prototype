<script lang="ts">
  import { fly } from "svelte/transition";
  import { currentColor } from "$lib/stores";
    import { cn } from "$lib/utils";

  function paint(color: string) {
    currentColor.set(color);
  }

  const colors = {
    "red": "rgb(248 113 113)",
    "orange": "rgb(251 146 60)",
    "yellow": "rgb(251 191 36)",
    "green": "rgb(52 211 153)",
    "blue": "rgb(96 165 250)",
    "purple": "rgb(167 139 250)",
    "stone": "rgb(168 162 158)",
  }
</script>

<div
  class="absolute right-0 top-0 z-0 h-height flex gap-4 py-2 flex-col justify-between"
  transition:fly={{ x: -50, opacity: 100, duration: 200 }}
>
  {#each Object.values(colors) as color}
    <button
      on:click={() => paint(color)}
      style:background-color={color}
      class={cn(
        "rounded-full size-10 hover:scale-110 active:scale-100 relative text-white flex justify-center items-center",
        { "ring-4 ring-white": $currentColor === color },
      )}
    >
      {#if $currentColor === color}
        <iconify-icon icon="mdi:check-bold" class="text-xl"></iconify-icon>
      {/if}
    </button>
  {/each}
</div>
