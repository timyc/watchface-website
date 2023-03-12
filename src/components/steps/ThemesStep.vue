<script setup lang="ts">
import { ref } from 'vue';
import { useSettingsStore } from '@/stores/settings';
import { importer } from '@/helpers/common';
import themes from '@/data/themes';
const settingsStore = useSettingsStore();
const updateSelected = (e: Element) => {
    // remove all other selected classes
    const selected = document.querySelectorAll('.selected');
    selected.forEach((el) => {
        el.classList.remove('selected');
    });
    e.classList.add('selected');
    if (themes[settingsStore.theme as keyof typeof themes].extra.length > 0) {
        modalOpen.value = true;
    }
}
const modalOpen = ref(false);
</script>

<template>
    <div>
        <h2>Choose a theme</h2>
        <div id="themesContainer">
            <div :class="{ 'selected': settingsStore.theme == key }" v-for="theme, key in themes"
                @click="settingsStore.theme = key; updateSelected($event.currentTarget as Element)" v-once>
                <svg width="250" height="250" viewBox="100 50 50 180">
                    <component :is="importer('themes', theme.theme)" />
                    <template v-if="theme.icon != ''">
                        <image :href="`icons/${theme.icon}`" x="40" y="165" width="50%" height="50%" style="filter: drop-shadow(0px 0px 1px white);" />
                    </template>
                </svg>
            </div>
        </div>
        <template v-if="settingsStore.theme != null && modalOpen == true">
            <div class="modal" v-if="themes[settingsStore.theme as keyof typeof themes].extra.length > 0">
                <div class="modal-content">
                    <span class="close" @click="modalOpen = false">&times;</span>
                    <br />
                    <component v-for="extra in themes[settingsStore.theme as keyof typeof themes].extra"
                        :is="importer('extras', extra)" @complete="settingsStore.extraStep++" />
                </div>

            </div>
        </template>
    </div>
    <footer class="d-flex center">
        <ContinueButton
            v-if="settingsStore.theme != null && settingsStore.extraStep >= themes[settingsStore.theme as keyof typeof themes].extra.length"
            :step="2" />
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
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  z-index: 1000;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>