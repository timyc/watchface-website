<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import statistics from '@/data/statistics';
import aesthetics from '@/data/aesthetics';
export default {
    name: 'LeftListLayout',
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore, statistics, aesthetics,
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
    <StatisticItem v-if="settingsStore.fields.length == 0 || settingsStore.fields.length >= 1" :stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[0]" x1="5%" x2="15%" y1="53%" y2="60%" />
    <StatisticItem v-if="settingsStore.fields.length == 0 || settingsStore.fields.length >= 3" :stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[2]" x1="5%" x2="15%" y1="73%" y2="80%" />
    <StatisticItem v-if="settingsStore.fields.length == 0 || settingsStore.fields.length >= 2" :stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[1]" x1="5%" x2="15%" y1="63%" y2="70%" />
    <StatisticItem v-if="settingsStore.fields.length == 0 || settingsStore.fields.length >= 4" :stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[3]" x1="5%" x2="15%" y1="83%" y2="90%" />
    <text x="0.3" y="0.8" font-size="0.5px" :fill="settingsStore.aesthetic == null ? 'white' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[2]">10:12</text>
    <text font-size="0.25px" :fill="settingsStore.aesthetic == null ? 'white' : aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].theme[2]">
        <tspan x="0.3" y="1.25">Friday, September</tspan>
        <tspan x="0.3" y="1.55">14th</tspan>
    </text>
</template>