<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
import aesthetics from '@/data/aesthetics';
const settingsStore = useSettingsStore();
</script>

<template>
    <svg width="250" height="250" viewBox="0 0 3 3" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <image :href="settingsStore.customImage == null ? '/bgs/placeholder.jpg' : settingsStore.customImage" width="100%" height="100%" preserveAspectRatio="none" />
        <slot></slot>
    </svg>
</template>