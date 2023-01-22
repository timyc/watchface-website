<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
import aesthetics from '@/data/aesthetics';
const settingsStore = useSettingsStore();
const defaults = ["darkviolet", "black","#FFFFFF"];
</script>

<template>
    <svg width="250" height="250" viewBox="0 0 3 3" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient id="grad" gradientTransform="rotate(90)">
                <stop offset="5%" :stop-color="settingsStore.aesthetic == null ? 'black' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[1]" />
                <stop offset="95%" :stop-color="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" />
            </linearGradient>
        </defs>
        <rect width="100%" height="100%" rx="1" fill="url('#grad')" />
        <circle cx="15%" cy="20%" r="0.03" fill="white" />
        <circle cx="45%" cy="15%" r="0.03" fill="white" />
        <circle cx="60%" cy="35%" r="0.03" fill="white" />
        <circle cx="30%" cy="30%" r="0.03" fill="white" />
        <circle cx="80%" cy="20%" r="0.03" fill="white" />
        <line x1="50%" y1="50%" x2="0%" y2="80%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />
        <line x1="50%" y1="50%" x2="0%" y2="60%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />
        <line x1="50%" y1="50%" x2="0%" y2="40%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />
        <line x1="50%" y1="50%" x2="0%" y2="20%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />


        <line x1="50%" y1="50%" x2="20%" y2="0%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />
        <line x1="50%" y1="50%" x2="40%" y2="0%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />
        <line x1="50%" y1="50%" x2="60%" y2="0%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />
        <line x1="50%" y1="50%" x2="80%" y2="0%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />


        <line x1="50%" y1="50%" x2="100%" y2="20%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />
        <line x1="50%" y1="50%" x2="100%" y2="40%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />
        <line x1="50%" y1="50%" x2="100%" y2="60%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />
        <line x1="50%" y1="50%" x2="100%" y2="80%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />


        <line x1="50%" y1="50%" x2="20%" y2="100%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />
        <line x1="50%" y1="50%" x2="40%" y2="100%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />
        <line x1="50%" y1="50%" x2="60%" y2="100%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />
        <line x1="50%" y1="50%" x2="80%" y2="100%" :stroke="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" stroke-width="0.01" />
        <svg width="250" height="250">
            <rect width="100%" height="0.01" x="0" y="0.25" class="item" :fill="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" />
            <rect width="100%" height="0.01" x="0" y="0.5" class="item" :fill="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" />
            <rect width="100%" height="0.01" x="0" y="0.75" class="item" :fill="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" />
            <rect width="100%" height="0.01" x="0" y="1" class="item" :fill="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" />
            <rect width="100%" height="0.01" x="0" y="1.25" class="item" :fill="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" />

            <rect width="100%" height="0.01" x="0" y="1.5" class="item" :fill="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" />
            <rect width="100%" height="0.01" x="0" y="1.75" class="item" :fill="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" />
            <rect width="100%" height="0.01" x="0" y="2" class="item" :fill="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" />
            <rect width="100%" height="0.01" x="0" y="2.25" class="item" :fill="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" />
            <rect width="100%" height="0.01" x="0" y="2.5" class="item" :fill="settingsStore.aesthetic == null ? 'darkviolet' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[0]" />
        </svg>
        <slot></slot>
    </svg>
</template>