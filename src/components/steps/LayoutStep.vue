<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import BackButton from '@/components/buttons/BackButton.vue';
import ContinueButton from '@/components/buttons/ContinueButton.vue';
export default {
    name: 'LayoutStep',
    components: {
        BackButton, ContinueButton,
    },
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore,
        };
    },
}
</script>

<template>
    <div>
        <h2>Choose a layout option</h2>
        <div id="layoutContainer">
            <div @click="settingsStore.layout = 'Top'">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="100" height="100" fill="#F0F0F0" />
                    <circle cx="10%" cy="10%" r="3" fill="red" />
                    <text x="25%" y="10%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="10%" cy="20%" r="3" fill="red" />
                    <text x="25%" y="20%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="65%" cy="10%" r="3" fill="red" />
                    <text x="80%" y="10%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="65%" cy="20%" r="3" fill="red" />
                    <text x="80%" y="20%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                </svg>
            </div>
            <div @click="settingsStore.layout = 'Bottom'">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="100" height="100" fill="#F0F0F0" />
                    <circle cx="10%" cy="90%" r="3" fill="red" />
                    <text x="25%" y="90%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="10%" cy="80%" r="3" fill="red" />
                    <text x="25%" y="80%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="65%" cy="90%" r="3" fill="red" />
                    <text x="80%" y="90%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="65%" cy="80%" r="3" fill="red" />
                    <text x="80%" y="80%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                </svg>
            </div>
            <div @click="settingsStore.layout = 'Corner'">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="100" height="100" fill="#F0F0F0" />
                    <circle cx="10%" cy="10%" r="3" fill="red" />
                    <text x="25%" y="10%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="10%" cy="90%" r="3" fill="red" />
                    <text x="25%" y="90%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="90%" cy="10%" r="3" fill="red" />
                    <text x="75%" y="10%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="90%" cy="90%" r="3" fill="red" />
                    <text x="75%" y="90%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                </svg>
            </div>
            <div @click="settingsStore.layout = 'RightList'">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="100" height="100" fill="#F0F0F0" />
                    <circle cx="90%" cy="90%" r="3" fill="red" />
                    <text x="75%" y="90%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="90%" cy="80%" r="3" fill="red" />
                    <text x="75%" y="80%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="90%" cy="70%" r="3" fill="red" />
                    <text x="75%" y="70%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="90%" cy="60%" r="3" fill="red" />
                    <text x="75%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                </svg>
            </div>
            <div @click="settingsStore.layout = 'LeftList'">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="100" height="100" fill="#F0F0F0" />
                    <circle cx="10%" cy="90%" r="3" fill="red" />
                    <text x="25%" y="90%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="10%" cy="80%" r="3" fill="red" />
                    <text x="25%" y="80%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="10%" cy="70%" r="3" fill="red" />
                    <text x="25%" y="70%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                    <circle cx="10%" cy="60%" r="3" fill="red" />
                    <text x="25%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="gray" font-size="5px">Statistic</text>
                </svg>
            </div>
        </div>
        <div class="d-flex d-sb">
            <BackButton />
            <ContinueButton v-if="settingsStore.layout != null" />
        </div>
        
    </div>
</template>

<style scoped>
#layoutContainer {
    display: flex;
    gap: 10px;
    width: 90vw;
    overflow-x: scroll;
    overflow-y: hidden;
}
</style>