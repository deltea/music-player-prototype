import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const currentColor = writable("rgb(167 139 250)");
currentColor.subscribe(value => {
  if (!browser) return;
  document.body.style.setProperty("--color-primary", value);
});

export const modes = [
  "pager",
  "gameboy",
  "rabbit",
] as const;
export type Mode = typeof modes[number];
export const currentMode = writable<Mode>("pager");

export const currentModeIndex = writable(0);
currentModeIndex.subscribe(value => {
  currentMode.set(modes[value]);
});
