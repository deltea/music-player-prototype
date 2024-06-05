import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const currentColor = writable("rgb(251 191 36)");
currentColor.subscribe(value => {
  if (!browser) return;
  document.body.style.setProperty("--color-primary", value);
});
