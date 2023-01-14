<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import aesthetics from '@/data/aesthetics';
export default {
    name: 'AestheticStep',
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore, aesthetics,
        };
    },
}
</script>

<template>
    <div>
        <h2>Apply an aesthetic</h2>
        <div :class="{'aestheticChoice': true, 'selectedChoice': key == settingsStore.aesthetic}" v-for="aesthetic,key in aesthetics" @click="settingsStore.aesthetic = key" :style="{'font-family': aesthetic.layout[0]}">{{ aesthetic.name }}</div>
    </div>
    <footer class="d-flex d-sb">
        <BackButton :step="2" />
        <ContinueButton v-if="settingsStore.aesthetic != null" />
    </footer>
</template>

<style scoped>
.aestheticChoice {
    width: 80vw;
    padding: 10px;
    background-color: #D9D9D9;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
}

.selectedChoice {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>