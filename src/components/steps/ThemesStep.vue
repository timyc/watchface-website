<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import BackButton from '../buttons/BackButton.vue';
import ContinueButton from '../buttons/ContinueButton.vue';
export default {
    name: 'ThemesStep',
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
        <h2>Choose a theme</h2>
        <p>Themes would be displayed here...</p>
        <div @click="settingsStore.theme = 'RetroPurple'">Click here to continue anyway</div>
    </div>
    <footer class="d-flex d-sb">
        <BackButton :step="2" />
        <ContinueButton v-if="settingsStore.theme != null" />
    </footer>
</template>