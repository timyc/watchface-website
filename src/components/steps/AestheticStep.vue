<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import aesthetics from '@/data/aesthetics';
import themes from '@/data/themes';
export default {
    name: 'AestheticStep',
    setup() {
        const settingsStore = useSettingsStore();
        settingsStore.aestheticFlag = true;
        return {
            settingsStore, aesthetics, themes
        };
    },
}
</script>

<template>
    <div v-if="settingsStore.theme != null">
        <h2>Apply an aesthetic</h2>
        <!--<div :class="{'aestheticChoice': true, 'selectedChoice': key == settingsStore.aesthetic, 'd-table': true}" v-for="aesthetic,key in aesthetics" @click="settingsStore.aesthetic = key" :style="{'font-family': aesthetic.layout[0]}">
            <span class="d-cell left" style="margin-right:auto;vertical-align:middle">{{ aesthetic.name }}</span>
            <span class="d-cell right" style="margin-left:auto"><span class="colorPreview" v-for="color in aesthetic.theme" :style="{'background-color': color}"></span></span>
        </div>
        <div :class="{'aestheticChoice': true, 'selectedChoice': settingsStore.aesthetic == null, 'd-table': true}" @click="settingsStore.aesthetic = null">
            <span class="d-cell left" style="margin-right:auto;vertical-align:middle">Default</span>
            <span class="d-cell right" style="margin-left:auto"><span class="colorPreview" v-for="color in themes[settingsStore.theme as keyof typeof themes].default" :style="{'background-color': color}"></span></span>
        </div>-->
        <template v-if="themes[settingsStore.theme as keyof typeof themes].cc">
            <SelectedColorItem :defaultColor="settingsStore.primaryColor == null ? (settingsStore.theme == null ? '#FFFFFF' : themes[settingsStore.theme as keyof typeof themes].default[0]) : settingsStore.primaryColor" name="Primary Color" @color-update="(val: string) => settingsStore.primaryColor = val" />
            <SelectedColorItem :defaultColor="settingsStore.secondaryColor == null ? (settingsStore.theme == null ? '#FFFFFF' : themes[settingsStore.theme as keyof typeof themes].default[1]) : settingsStore.secondaryColor" name="Secondary Color" @color-update="(val: string) => settingsStore.secondaryColor = val" />
        </template>
        <SelectedColorItem :defaultColor="settingsStore.iconColor == null ? (settingsStore.theme == null ? '#FFFFFF' : themes[settingsStore.theme as keyof typeof themes].default[2]) : settingsStore.iconColor" name="Icon Color" @color-update="(val: string) => settingsStore.iconColor = val" />
        <SelectedColorItem :defaultColor="settingsStore.iconTextColor == null ? (settingsStore.theme == null ? '#FFFFFF' : themes[settingsStore.theme as keyof typeof themes].default[2]) : settingsStore.iconTextColor" name="Icon Text Color" @color-update="(val: string) => settingsStore.iconTextColor = val" />
        <SelectedColorItem :defaultColor="settingsStore.dateColor == null ? (settingsStore.theme == null ? 'white' : themes[settingsStore.theme as keyof typeof themes].default[2]) : settingsStore.dateColor" name="Date Color" @color-update="(val: string) => settingsStore.dateColor = val" />
        <SelectedColorItem :defaultColor="settingsStore.timeColor == null ? (settingsStore.theme == null ? 'white' : themes[settingsStore.theme as keyof typeof themes].default[2]) : settingsStore.timeColor" name="Time Color" @color-update="(val: string) => settingsStore.timeColor = val" />
    </div>
    <div v-else>
        <h2>Choose a theme first</h2>
    </div>
    <footer class="d-flex center">
        <ContinueButton />
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