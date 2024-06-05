<script lang="ts">
  import { cn } from "$lib/utils";

  let isDarkMode = true;
  export let isPaintOpen: boolean;
  export let isPowerOn: boolean;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode
    document.documentElement.classList.toggle("dark", isDarkMode);
  }
</script>

<div class="flex items-center gap-8 mt-8 text-primary dark:text-white text-icon">
  <button
    on:click={() => (isPowerOn = !isPowerOn)}
    class={cn(
      "hover:scale-110 active:scale-100 outline-none",
      isPowerOn ? "text-primary" : "text-muted dark:text-white",
    )}
  >
    <iconify-icon icon="mingcute:power-fill"></iconify-icon>
  </button>

  <button
    on:click={toggleDarkMode}
    class={cn(
      "hover:scale-110 active:scale-100 outline-none",
      { "rotate-skew": isDarkMode },
    )}
  >
    {#if isDarkMode}
      <iconify-icon icon="mingcute:full-moon-fill"></iconify-icon>
    {:else}
      <iconify-icon icon="mingcute:sun-fill"></iconify-icon>
    {/if}
  </button>

  <button
    on:click={() => (isPaintOpen = !isPaintOpen)}
    class="hover:scale-110 active:scale-100 outline-none"
  >
    <iconify-icon icon="mingcute:paint-2-fill"></iconify-icon>
  </button>

  <button
    class="hover:scale-110 active:scale-100 outline-none"
  >
    <iconify-icon icon="mingcute:save-2-fill"></iconify-icon>
  </button>
</div>
