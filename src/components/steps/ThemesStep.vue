<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { useSettingsStore } from '@/stores/settings';
import themes from '@/data/themes';
const settingsStore = useSettingsStore();
const importer = (type: string, file: string) => defineAsyncComponent(() => import(`@/components/${type}/${file}.vue`));
</script>

<template>
    <div>
        <h2>Choose a theme</h2>
        <div id="themesContainer">
            <div :class="{ 'selected': settingsStore.theme == key }" v-for="theme,key in themes">
                <svg width="250" height="250" viewBox="100 50 50 180" @click="settingsStore.theme = key;settingsStore.extraStep = 0">
                    <component :is="importer('themes', theme.theme)" />
                </svg>
            </div>
        </div>
        <template v-if="settingsStore.theme != null">
            <div v-if="themes[settingsStore.theme as keyof typeof themes].extra.length > 0">
                <div class="notice">
                    <h3>Attention</h3>
                    <p>The theme you chose requires additional configurations. Please complete them below.</p>
                </div>
                <component v-for="extra in themes[settingsStore.theme as keyof typeof themes].extra"
                    :is="importer('extras', extra)" @complete="settingsStore.extraStep++" />
            </div>
        </template>
    </div>
    <footer class="d-flex d-sb">
        <BackButton :step="2" />
        <ContinueButton v-if="settingsStore.theme != null && settingsStore.extraStep >= themes[settingsStore.theme as keyof typeof themes].extra.length" />
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
.notice {
    background-color: aquamarine;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
}
</style>