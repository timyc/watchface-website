<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import aesthetics from '@/data/aesthetics';
export default {
    name: 'AestheticStep',
    setup() {
        const settingsStore = useSettingsStore();
        settingsStore.aestheticFlag = true;
        return {
            settingsStore, aesthetics,
        };
    },
}
</script>

<template>
    <div>
        <h2>Apply an aesthetic</h2>
        <div :class="{'aestheticChoice': true, 'selectedChoice': key == settingsStore.aesthetic, 'd-table': true}" v-for="aesthetic,key in aesthetics" @click="settingsStore.aesthetic = key" :style="{'font-family': aesthetic.layout[0]}">
            <span class="d-cell left" style="margin-right:auto;vertical-align:middle">{{ aesthetic.name }}</span>
            <span class="d-cell right" style="margin-left:auto"><span class="colorPreview" v-for="color in aesthetic.theme" :style="{'background-color': color}"></span></span>
        </div>
        <div :class="{'aestheticChoice': true, 'selectedChoice': settingsStore.aesthetic == null, 'd-table': true}" @click="settingsStore.aesthetic = null">
            <span class="d-cell left" style="margin-right:auto;vertical-align:middle">Default</span>
        </div>
    </div>
    <footer class="d-flex d-sb">
        <BackButton :step="2" />
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
.colorPreview {
    display: inline-block;
    width: 20px;
    border: 1px solid black;
    height: 20px;
    margin: 0 5px;
}
</style>