<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
export default {
    name: 'AestheticStep',
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
        <h2>Apply an aesthetic</h2>
        <p>Aesthetic would be displayed here...</p>
        <div @click="settingsStore.aesthetic = 'Modern'">Click here to continue anyway</div>
    </div>
    <footer class="d-flex d-sb">
        <BackButton :step="2" />
        <ContinueButton v-if="settingsStore.aesthetic != null" />
    </footer>
</template>