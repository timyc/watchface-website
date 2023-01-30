<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { useSettingsStore } from '@/stores/settings';
import aesthetics from '@/data/aesthetics';
import layouts from '@/data/layouts';
import themes from '@/data/themes';
const settingsStore = useSettingsStore();
const importer = (type: string, file: string) => defineAsyncComponent(() => import(`@/components/${type}/${file}.vue`));
const menuOpen = ref(false);
</script>

<template>
  <div :class="{'blur': menuOpen}" style="height:400px;position:sticky;top:0;background:white">
    <nav style="margin:10px">
      <div id="menu-button" class="right d-table" @click="menuOpen = true"><img class="d-cell" src="/icons/menu.png" width="20" /><span
          class="d-cell" style="vertical-align: middle">Menu</span></div>
    </nav>
    <!-- Fitbit outer svg -->
    <div class="center d-abs d-flex" style="margin-left: auto; margin-right: auto; right: 0; left: 0">
      <svg width="250" height="250">
        <rect width="100%" height="100%" rx="50" ry="50" stroke="black" stroke-width="30" fill-opacity="0" />
      </svg>
    </div>
    <!-- Whatever is inside the Fitbit should be added below -->
    <div class="center d-flex"
      :style="{ 'font-family': settingsStore.aesthetic == null ? 'inherit' : `${aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].layout[0]}` }">
      <component
        :is="settingsStore.theme == null ? importer('themes', 'NoTheme') : importer('themes', themes[settingsStore.theme as keyof typeof themes].theme)">
        <component
          :is="settingsStore.layout == null ? importer('layouts', 'NoLayout') : importer('layouts', `${layouts[settingsStore.layout as keyof typeof layouts].type}Layout`)" />
      </component>
    </div>
  </div>

  <!-- Last row for option choosing -->
  <div :class="{'blur': menuOpen}" class="center d-flex" style="flex-direction:column">
    <div class="stepsContainer clickable">
      <li :class="{'stepsItem': true, 'youAreHere': settingsStore.step == 3}" @click="settingsStore.step = 3">
        <div>Layout</div>
      </li>
      <hr />
      <li :class="{'stepsItem': true, 'youAreHere': settingsStore.step == 4}" @click="settingsStore.step = 4">
        <div>Data</div>
      </li>
      <hr />
      <li :class="{'stepsItem': true, 'youAreHere': settingsStore.step == 6}" @click="settingsStore.step = 6">
        <div>Theme</div>
      </li>
      <hr />
      <li :class="{'stepsItem': true, 'youAreHere': settingsStore.step == 8}" @click="settingsStore.step = 8">
        <div>Aesthetic</div>
      </li>
    </div>
    <IntroStep v-if="settingsStore.step == 1" />
    <CheckpointStep :num="1" text="Customize your data" v-if="settingsStore.step == 2" />
    <LayoutStep v-if="settingsStore.step == 3" />
    <StatisticsStep v-if="settingsStore.step == 4" />
    <CheckpointStep :num="2" text="Apply a theme" v-if="settingsStore.step == 5" />
    <ThemesStep v-if="settingsStore.step == 6" />
    <CheckpointStep :num="3" text="Apply an aesthetic" v-if="settingsStore.step == 7" />
    <AestheticStep v-if="settingsStore.step == 8" />
    <ExportStep v-if="settingsStore.step == 9" />
  </div>
  <div class="d-abs w-100" v-if="menuOpen" style="top:0;">
    <div id="menu" class="d-table">
      <img class="d-cell clickable" src="/icons/close.png" width="20" style="margin-left: auto" @click="menuOpen = false" />
      <div class="d-table w-100p">
        <div class="menuOption clickable d-cell" @click="settingsStore.step = 4;menuOpen = false">Data</div>
        <div class="d-cell right" v-if="settingsStore.fields.length > 0"><img src="/icons/checkmark.png" width="20" /></div>
      </div>
      <div class="d-table w-100p">
        <div class="menuOption clickable" @click="settingsStore.step = 6;menuOpen = false">Theme</div>
        <div class="d-cell right" v-if="settingsStore.theme != null"><img src="/icons/checkmark.png" width="20" /></div>
      </div>
      <div class="d-table w-100p">
        <div class="menuOption clickable" @click="settingsStore.step = 3;menuOpen = false">Layout</div>
        <div class="d-cell right" v-if="settingsStore.layout != null"><img src="/icons/checkmark.png" width="20" /></div>
      </div>
      <div class="d-table w-100p">
        <div class="menuOption clickable" @click="settingsStore.step = 8;menuOpen = false">Aesthetic</div>
        <div class="d-cell right" v-if="settingsStore.aestheticFlag == true"><img src="/icons/checkmark.png" width="20" /></div>
      </div>
      <div class="menuOption clickable green" @click="settingsStore.step = 9;menuOpen = false">Export</div>
    </div>
  </div>
</template>

<style scoped>
#menu-button {
  padding: 10px;
  background: #D9D9D9;
  width: 70px;
  margin-left: auto;
  border-radius: 10px;
  cursor: pointer;
}
#menu {
  background: #D9D9D9;
  padding:20px;
  margin-left:auto;
  width:200px;
  height:200px;
}
.menuOption {
  padding: 10px;
}
.blur {
  filter: blur(5px);
}
.stepsContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
.stepsItem {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
}

.stepsItem:hover {
  background: #ebeaea;
}
.youAreHere {
  background: #D9D9D9;
}
</style>