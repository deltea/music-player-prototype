import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const currentColor = writable("rgb(248 113 113)");
currentColor.subscribe(value => {
  if (!browser) return;
  document.body.style.setProperty("--color-primary", value);
});

export const modes = [
  "gameboy",
  "pager",
  "rabbit",
] as const;
export type Mode = typeof modes[number];
export const currentMode = writable<Mode>("gameboy");

export const currentModeIndex = writable(0);
currentModeIndex.subscribe(value => {
  currentMode.set(modes[value]);
});
