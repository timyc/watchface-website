<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
import aesthetics from '@/data/aesthetics';
const settingsStore = useSettingsStore();
</script>

<template>
    <svg width="250" height="250" viewBox="0 0 3 3" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <radialGradient id="amongusgrad">
                <stop offset="5%" :stop-color="settingsStore.aesthetic == null ? 'darkred' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" />
                <stop offset="95%" :stop-color="settingsStore.aesthetic == null ? 'red' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[1]" />
            </radialGradient>
        </defs>
        <rect width="100%" height="100%" rx="1" fill="url('#amongusgrad')" />
        <ellipse cx="1.5" cy="1" rx="1" ry="0.5" fill="skyblue" stroke-width="5%" stroke="black" />
        <ellipse cx="1.7" cy="0.8" rx="0.3" ry="0.15" fill="lightcyan" />
        <rect width="5%" height="20%" x="2.7" y="0.3" fill="beige" stroke-width="1%" stroke="black" transform="rotate(45)" />
        <rect width="5%" height="25%" x="-0.6" y="2.4" fill="beige" stroke-width="1%" stroke="black" transform="rotate(-45)" />
        <slot></slot>
    </svg>
</template>