<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
export default {
    name: 'ContinueButton',
    setup() {
        const settingsStore = useSettingsStore();
        return {
        settingsStore,
        };
    },
    props: {
        step: {
            type: Number,
            default() {
                return 1;
            }
        },
    },
}
</script>

<template>
    <div class="right contBtn" @click="settingsStore.step += step">Continue</div>
</template>

<style scoped>
.contBtn {
    padding: 15px;
    background: #2CB574;
    font-weight: bold;
    border-radius: 20px;
    max-width: 200px;
    width: 100%;
    cursor: pointer;
    text-align: center;
    color: white;
}
</style>