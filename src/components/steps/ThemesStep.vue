<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useSettingsStore } from '@/stores/settings';
import themes from '@/data/themes';
const settingsStore = useSettingsStore();
const importer = (type: string, file: string) => defineAsyncComponent(() => import(`@/components/${type}/${file}.vue`));
</script>

<template>
    <div>
        <h2>Choose a theme</h2>
        <div id="themesContainer">
            <div :class="{ 'selected': settingsStore.theme == theme.theme }" v-for="theme in themes">
                <svg width="250" height="250" viewBox="100 50 50 180" @click="settingsStore.theme = theme.theme">
                    <component :is="importer('themes', theme.theme)" />
                </svg>
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

#themesContainer>div:first-child {
    margin-left: auto;
}

#themesContainer>div:last-child {
    margin-right: auto;
}

.test {
    border: 10px solid black;
}
</style>