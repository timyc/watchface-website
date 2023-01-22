<script lang="ts">
import { useSettingsStore } from '@/stores/settings';

export default {
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore,
        }
    },
    mounted() {
        this.settingsStore.extraStep = 1;
    }
}
</script>

<template>
    <div id="amongusPanel">
        <input type="checkbox" id="amongus" v-model="settingsStore.bandaid" />
        <label for="amongus">Show Mouth Band-aid</label>
    </div>
</template>

<style scoped>
#amongusPanel {
    background: lightcoral;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
}
</style>