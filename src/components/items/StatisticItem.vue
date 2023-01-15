<script lang="ts">
import { hexToCSSFilter } from 'hex-to-css-filter';
import aesthetics from '@/data/aesthetics';
import statistics from '@/data/statistics';
import { useSettingsStore } from '@/stores/settings';
export default {
    name: 'StatisticItem',
    props: {
        stat: {
            type: Object as unknown as any,
            default: null,
            required: false,
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
            hexToCSSFilter, aesthetics, settingsStore, statistics
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
    <svg width="0.4" height="0.4" :x="x1" :y="y1" viewBox="0 0 22 12" >
        <image width="100%" height="100%" :href="'/icons/' + (stat == null ? 'question' : statistics[stat.stat as keyof typeof statistics].icon) + '.svg'" :style="{'filter': hexToCSSFilter(settingsStore.aesthetic == null ? '#FFFFFF' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[2]).filter.slice(0, -1)}" />
    </svg>
    <text :x="x2" :y="y2" dominant-baseline="middle" :text-anchor="parseInt(x1) > 80 ? 'end' : 'start'" :fill="settingsStore.aesthetic == null ? '#FFFFFF' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[2]" font-size="0.15px">
    {{ //@ts-ignore 
        stat == null ? 'Statistic' : statistics[stat.stat as keyof typeof statistics].display_methods[stat.mode].text }}
    </text>
</template>