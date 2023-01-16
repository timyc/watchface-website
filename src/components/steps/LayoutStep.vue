<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import layouts from '@/data/layouts';
export default {
    name: 'LayoutStep',
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore, layouts
        };
    },
}
</script>

<template>
    <div>
        <h2>Choose a layout option</h2>
        <div id="layoutContainer">
            <div v-for="layout,key in layouts" :key="key" :class="{'selected': settingsStore.layout == key}" @click="settingsStore.layout = key">
                <svg width="200" height="200" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="100" height="100" fill="gray" />
                    <StatisticItem :stat="null" :coords="layouts[key].stats[0]" />
                    <StatisticItem :stat="null" :coords="layouts[key].stats[2]" />
                    <StatisticItem :stat="null" :coords="layouts[key].stats[1]" />
                    <StatisticItem :stat="null" :coords="layouts[key].stats[3]" />
                </svg>
            </div>
        </div>
    </div>
    <footer class="d-flex d-sb">
        <BackButton :step="2" />
        <ContinueButton v-if="settingsStore.layout != null" />
    </footer>
</template>

<style scoped>
#layoutContainer {
    display: flex;
    gap: 10px;
    width: 90vw;
    overflow-x: scroll;
    overflow-y: hidden;
}

#layoutContainer > div:first-child {
    margin-left: auto;
}

#layoutContainer > div:last-child {
    margin-right: auto;
}
</style>