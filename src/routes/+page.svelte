<script lang="ts">
  import { Slider } from "bits-ui";
  import { cn } from "$lib/utils";

  let volume = [100];
  let isDarkMode = true;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode
    document.documentElement.classList.toggle("dark", isDarkMode);
  }
</script>

<button
  on:click={toggleDarkMode}
  class={cn(
    "fixed left-6 top-6 text-primary dark:text-white hover:scale-110 active:scale-100 outline-none",
    { "rotate-skew": isDarkMode },
  )}
>
  {#if isDarkMode}
    <iconify-icon icon="mingcute:full-moon-fill" class="text-[2.5rem]"></iconify-icon>
  {:else}
    <iconify-icon icon="mingcute:sun-fill" class="text-[2.5rem]"></iconify-icon>
  {/if}
</button>

<main class="flex justify-center items-center h-screen bg-white dark:bg-neutral-800">
  <div class="border-4 dark:bg-primary border-muted dark:border-primary h-[30rem] w-[20rem] rounded-xxl p-8 flex flex-col gap-8 items-center">
    <!-- Screen content -->
    <div class="bg-muted dark:bg-white rounded-xl w-full h-[12rem]">
    </div>

    <!-- Controls -->
    <div class="w-full flex-grow flex flex-col justify-center gap-10">
      <div class="flex justify-between items-center">
        <!-- Arrows -->
        <div class="grid grid-cols-3 size-[6rem]">
          <div></div>
          <button class="bg-background hover:scale-110 active:scale-100 rounded-t-lg"></button>
          <div></div>

          <button class="bg-background hover:scale-110 active:scale-100 rounded-l-lg"></button>
          <div class="bg-background"></div>
          <button class="bg-background hover:scale-110 active:scale-100 rounded-r-lg"></button>

          <div></div>
          <button class="bg-background hover:scale-110 active:scale-100 rounded-b-lg"></button>
          <div></div>
        </div>

        <!-- A/B Buttons -->
        <div class="flex gap-4 rotate-skew">
          <button class="rounded-full bg-primary dark:bg-white size-10 hover:scale-110 active:scale-100 relative"></button>
          <button class="rounded-full bg-primary dark:bg-white size-10 hover:scale-110 active:scale-100 relative"></button>
        </div>
      </div>

      <!-- Volume Control -->
      <Slider.Root
        bind:value={volume}
        let:thumbs
        min={0}
        max={100}
        class="relative flex w-full items-center"
      >
        <span class="relative h-3 w-full grow overflow-hidden rounded-full bg-muted dark:bg-white">
          <Slider.Range class="absolute h-full bg-primary dark:bg-white" />
        </span>

        {#each thumbs as thumb}
          <Slider.Thumb
            {thumb}
            class="block w-5 h-8 bg-primary dark:bg-white rounded-md z-10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-primary hover:cursor-pointer"
          />
        {/each}
      </Slider.Root>
    </div>
  </div>
</main>
