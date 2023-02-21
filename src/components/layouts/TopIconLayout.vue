<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import statistics from '@/data/statistics';
import aesthetics from '@/data/aesthetics';
import themes from '@/data/themes';
import layouts from '@/data/layouts';
export default {
    name: 'TopIconLayout',
    props: {
        layout: {
            type: String,
            default: null,
            required: false,
        },
    },
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore, statistics, aesthetics, layouts, themes
        };
    },
}
</script>

<template>
    <!-- Battery icon -->
    <svg width="0.2" height="0.4" x="2.3" y="0.2" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2.33268 2.02449V3.83366H0.166016L0.166016 8.16699H2.33268L2.33268 9.97616C2.33268 10.767 2.98268 11.417 3.77352 11.417L20.381 11.417C21.1827 11.417 21.8327 10.767 21.8327 9.97616V2.03533C21.8327 1.23366 21.1827 0.58366 20.3918 0.58366L3.77352 0.58366C2.98268 0.58366 2.33268 1.23366 2.33268 2.02449Z"
            :fill="settingsStore.aesthetic == null ? 'white' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[2]" />
    </svg>
    <StatisticItemCentered v-if="settingsStore.fields.length == 0 || settingsStore.fields.length >= 1" :stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[0]" :coords="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].stats[0]" />
    <StatisticItemCentered v-if="settingsStore.fields.length == 0 || settingsStore.fields.length >= 3" :stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[2]" :coords="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].stats[2]" />
    <StatisticItemCentered v-if="settingsStore.fields.length == 0 || settingsStore.fields.length >= 2" :stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[1]" :coords="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].stats[1]" />
    <StatisticItemCentered v-if="settingsStore.fields.length == 0 || settingsStore.fields.length >= 4" :stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[3]" :coords="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].stats[3]" />
    <text :x="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].interface[0].x" :y="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].interface[0].y" font-size="0.8px" :fill="settingsStore.aesthetic == null ? (settingsStore.theme == null ? 'white' : themes[settingsStore.theme as keyof typeof themes].default[2]) : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[2]">10:12</text>
    <text font-size="0.15px" :fill="settingsStore.aesthetic == null ? (settingsStore.theme == null ? 'white' : themes[settingsStore.theme as keyof typeof themes].default[2]) : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[2]">
        <tspan :x="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].interface[1].x" :y="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].interface[1].y">Friday, September 14th</tspan>
    </text>
</template>