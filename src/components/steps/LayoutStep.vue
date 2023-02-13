<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import { importer } from '@/helpers/common';
import layouts from '@/data/layouts';
export default {
    name: 'LayoutStep',
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore, layouts, importer
        };
    },
}
</script>

<template>
    <div>
        <h2>Choose a layout option</h2>
        <div id="layoutContainer">
            <div v-for="layout,key in layouts" :key="key" @click="settingsStore.layout = key" v-once>
                <component
                    :is="importer('themes', 'NoTheme')">
                    <component
                    :is="importer('layouts', `${layouts[key].type}Layout`)" :layout="key" />
                </component>
            </div>
        </div>
    </div>
    <footer class="d-flex center">
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