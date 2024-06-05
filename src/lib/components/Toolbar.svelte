<script lang="ts">
    import { currentMode, currentModeIndex, modes } from "$lib/stores";
  import { cn } from "$lib/utils";
  import { onMount } from "svelte";

  export let isPaintOpen: boolean;
  export let isPowerOn: boolean;

  let isDarkMode = true;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode
    document.documentElement.classList.toggle("dark", isDarkMode);
  }

  onMount(() => {
    document.documentElement.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "p":
          isPaintOpen = !isPaintOpen;
          break;
        case "d":
          toggleDarkMode();
          break;
      }
    });
  });
</script>

<div class="flex items-center gap-8 mt-8 text-primary dark:text-white text-icon">
  <button
    on:click={toggleDarkMode}
    class={cn(
      "hover:scale-110 active:scale-100 flex justify-center items-center",
      { "rotate-skew": isDarkMode },
    )}
  >
    {#if isDarkMode}
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m.5 12a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M8 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m6.5-4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"/></g></svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094l-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12m-8 5a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083l.707.707a1 1 0 0 1-1.32 1.497l-.094-.083l-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"/></g></svg>
    {/if}
  </button>

  <button
    on:click={() => (isPaintOpen = !isPaintOpen)}
    class="hover:scale-110 active:scale-100 flex justify-center items-center"
  >
    <iconify-icon icon="mingcute:paint-2-fill"></iconify-icon>
  </button>

  <button
    on:click={() => {
      currentModeIndex.update(value => (value + 1) % modes.length);
    }}
    class="hover:scale-110 active:scale-100 flex justify-center items-center"
  >
    <iconify-icon icon="mingcute:refresh-1-fill"></iconify-icon>
  </button>
</div>
