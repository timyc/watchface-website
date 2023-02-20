<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
import aesthetics from '@/data/aesthetics';
const settingsStore = useSettingsStore();
</script>

<template>
    <svg width="250" height="250" viewBox="0 0 3 3" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="100%" height="100%" fill="purple" />
        <rect width="100%" height="83.33%" fill="blue" />
        <rect width="100%" height="66.66%" fill="green" />
        <rect width="100%" height="50%" fill="yellow" />
        <rect width="100%" height="33.33%" fill="orange" />
        <rect width="100%" height="16.66%" fill="red" />
        <slot></slot>
    </svg>
</template>