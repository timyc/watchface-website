<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
export default {
    name: 'ThemesStep',
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
        <h2>Choose a theme</h2>
        <!--<p>Themes would be displayed here...</p>
        <div @click="settingsStore.theme = 'RetroPurple'">Click here to continue anyway</div>-->
        <div id="themesContainer">
            <div>

            </div>
        </div>
    </div>
    <footer class="d-flex d-sb">
        <BackButton :step="2" />
        <ContinueButton v-if="settingsStore.theme != null" />
    </footer>
</template>

<style scoped>
#themesContainer {
    display: flex;
    gap: 10px;
    width: 90vw;
    overflow-x: scroll;
    overflow-y: hidden;
}

#themesContainer > div:first-child {
    margin-left: auto;
}

#themesContainer > div:last-child {
    margin-right: auto;
}
</style>