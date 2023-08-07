<script lang="ts">
import { hexToCSSFilter } from 'hex-to-css-filter';
import aesthetics from '@/data/aesthetics';
import statistics from '@/data/statistics';
import themes from '@/data/themes';
import { useSettingsStore } from '@/stores/settings';
interface Coords {
    x1: string;
    y1: string;
    x2: string;
    y2: string;
}
export default {
    name: 'StatisticItem',
    props: {
        stat: {
            type: Object as unknown as any,
            default: null,
            required: false,
        },
        size: {
            type: String,
            default: "0.15px",
            required: false,
        },
        coords: {
            type: Object as () => Coords,
            required: true,
        },
        // Color that dictates color of this statistic item
        iconColor: {
            type: String,
            required: false,
        },
        textColor: {
            type: String,
            required: false,
        }
    },
    setup() {
        const settingsStore = useSettingsStore();
        return {
            hexToCSSFilter, aesthetics, settingsStore, statistics, themes
        };
    },
    data() {
        return {
            statInfo: this.stat == null ? 'Statistic' : statistics[this.stat.stat as keyof typeof statistics],
        }
    }
}
</script>

<template>
    <svg width="0.4" height="0.4" :x="coords.x1" :y="coords.y1" viewBox="0 0 22 12">
        <image width="100%" height="100%"
            :href="'/icons/' + (stat == null ? 'question' : statistics[stat.stat as keyof typeof statistics].icon) + '.svg'"
            :style="{ 'filter': hexToCSSFilter(iconColor == null ? (settingsStore.theme == null ? '#FFFFFF' : themes[settingsStore.theme as keyof typeof themes].default[2]) : iconColor).filter.slice(0, -1) }" />
    </svg>
    <text :x="coords.x2" :y="coords.y2" dominant-baseline="middle" :text-anchor="parseInt(coords.x1) > 80 ? 'end' : 'start'"
        :fill="settingsStore.iconTextColor == null ? (settingsStore.theme == null ? '#FFFFFF' : themes[settingsStore.theme as keyof typeof themes].default[2]) : settingsStore.iconTextColor"
        :font-size="size">
        {{ //@ts-ignore
            stat == null ? 'Stat' : statistics[stat.stat as keyof typeof statistics].display_methods[stat.mode].text }}
    </text>
</template>