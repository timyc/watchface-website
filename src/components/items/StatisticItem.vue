<script lang="ts">
import { hexToCSSFilter } from 'hex-to-css-filter';
import aesthetics from '@/data/aesthetics';
import { useSettingsStore } from '@/stores/settings';
export default {
    name: 'StatisticItem',
    props: {
        name: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        x1: {
            type: String,
            required: true,
        },
        x2: {
            type: String,
            required: true,
        },
        y1: {
            type: String,
            required: true,
        },
        y2: {
            type: String,
            required: true,
        },
    },
    setup() {
        const settingsStore = useSettingsStore();
        return {
            hexToCSSFilter, aesthetics, settingsStore,
        };
    },
}
</script>

<template>
    <svg width="0.4" height="0.4" :x="x1" :y="y1" viewBox="0 0 22 12" >
        <image width="100%" height="100%" :href="'/icons/' + icon + '.svg'" :style="{'filter': hexToCSSFilter(settingsStore.aesthetic == null ? '#FFFFFF' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[2]).filter.slice(0, -1)}" />
    </svg>
    <text :x="x2" :y="y2" dominant-baseline="middle" :text-anchor="parseInt(x1) > 80 ? 'end' : 'start'" :fill="settingsStore.aesthetic == null ? '#FFFFFF' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[2]" font-size="0.15px">{{ name }}</text>
</template>