<script lang="ts">
  import { cn } from "$lib/utils";

  let isDarkMode = true;
  export let isPaintOpen: boolean;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode
    document.documentElement.classList.toggle("dark", isDarkMode);
  }
</script>

<div class="fixed flex flex-col items-center gap-6 top-6 left-6 text-primary dark:text-white">
  <button
    on:click={toggleDarkMode}
    class={cn(
      "hover:scale-110 active:scale-100 outline-none",
      { "rotate-skew": isDarkMode },
    )}
  >
    {#if isDarkMode}
      <iconify-icon icon="mingcute:full-moon-fill" class="text-icon"></iconify-icon>
    {:else}
      <iconify-icon icon="mingcute:sun-fill" class="text-icon"></iconify-icon>
    {/if}
  </button>

  <button
    on:click={() => (isPaintOpen = !isPaintOpen)}
    class="hover:scale-110 active:scale-100 outline-none"
  >
    <iconify-icon icon="mingcute:paint-2-fill" class="text-icon"></iconify-icon>
  </button>
</div>
