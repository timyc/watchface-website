<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
const settingsStore = useSettingsStore();
</script>

<template>
    <svg width="240" height="240" viewBox="0 0 3 3" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="100%" height="100%" :fill="settingsStore.primaryColor == null ? '#6C6C6C' : settingsStore.primaryColor" />
        <image href="/bgs/mickey_mouse.png" width="50%" height="80%" y="0.5" x="1.4" preserveAspectRatio="none" />
        <slot></slot>
    </svg>
</template>