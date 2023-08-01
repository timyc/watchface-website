<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import statistics from '@/data/statistics';
import aesthetics from '@/data/aesthetics';
import themes from '@/data/themes';
import layouts from '@/data/layouts';
export default {
    name: 'BarredTopIconLayout',
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

    <StatisticItemCentered v-if="settingsStore.fields.length == 0 || settingsStore.fields.length >= 1" :stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[0]" :coords="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].stats[0]" />
    <StatisticItemCentered v-if="settingsStore.fields.length == 0 || settingsStore.fields.length >= 3" :stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[2]" :coords="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].stats[2]" />
    <StatisticItemCentered v-if="settingsStore.fields.length == 0 || settingsStore.fields.length >= 2" :stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[1]" :coords="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].stats[1]" />
    <StatisticItemCentered v-if="settingsStore.fields.length == 0 || settingsStore.fields.length >= 4" :stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[3]" :coords="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].stats[3]" />
    <StatisticItemCentered v-if="settingsStore.fields.length == 0 || settingsStore.fields.length >= 5" :stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[4]" :coords="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].stats[4]" />
    <text :x="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].interface[0].x" :y="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].interface[0].y" font-size="0.8px" :fill="settingsStore.timeColor == null ? (settingsStore.theme == null ? 'white' : themes[settingsStore.theme as keyof typeof themes].default[2]) : settingsStore.timeColor">10</text>
    <text :x="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].interface[0].x" :y="parseFloat(layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].interface[0].y) + 1 " font-size="0.8px" :fill="settingsStore.timeColor == null ? (settingsStore.theme == null ? 'white' : themes[settingsStore.theme as keyof typeof themes].default[2]) : settingsStore.timeColor">12</text>
    <text font-size="0.15px" :fill="settingsStore.dateColor == null ? (settingsStore.theme == null ? 'white' : themes[settingsStore.theme as keyof typeof themes].default[2]) : settingsStore.dateColor">
        <tspan :x="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].interface[1].x" :y="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].interface[1].y">Sunday,</tspan>
        <tspan :x="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].interface[2].x" :y="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].interface[2].y">May 30th</tspan>
    </text>
</template>