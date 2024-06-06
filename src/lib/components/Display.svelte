<script lang="ts">
  import { currentMode } from "$lib/stores";

  export let value: number[];
  export let isPowerOn: boolean;
</script>

<div class="border-4 bg-white border-muted dark:border-white rounded-xl w-full h-[12rem]">
  {#if isPowerOn}
    <h1 class="flex justify-center items-center font-bold text-neutral h-full">
      <span>
        <span>slider ~</span>
        <span class="text-primary">{value[0]}%</span>
      </span>
    </h1>
  {:else}
    <h1 class="flex flex-col justify-center items-center font-bold text-neutral h-full">
      the
      <span class="text-primary">{$currentMode}</span>
      design
    </h1>
  {/if}
</div>
