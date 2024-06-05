<script lang="ts">
  import { currentMode } from "$lib/stores";

  export let value: number[];
</script>

<div class="border-4 bg-white border-muted dark:border-white rounded-xl w-full h-[12rem] flex flex-col justify-center items-center font-bold text-neutral">
  the
  <span class="text-primary">{$currentMode}</span>
  design
</div>
