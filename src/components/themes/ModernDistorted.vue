<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
import aesthetics from '@/data/aesthetics';
const settingsStore = useSettingsStore();
</script>

<template>
    <svg width="250" height="250" viewBox="0 0 3 3" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <radialGradient id="rgrad">
                <stop offset="5%" :stop-color="settingsStore.aesthetic == null ? '#2CB574' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" />
                <stop offset="95%" :stop-color="settingsStore.aesthetic == null ? 'black' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[1]" />
            </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="black" />
        <rect width="100%" height="50%" y="1.3" rx="1" fill="url('#rgrad')" />
        <slot></slot>
    </svg>
</template>