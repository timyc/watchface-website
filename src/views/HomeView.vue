<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useSettingsStore } from '@/stores/settings';
const settingsStore = useSettingsStore();
const importTheme = (theme: string) => defineAsyncComponent(() => import(`/src/components/themes/${theme}.vue`));
const importLayout = (theme: string) => defineAsyncComponent(() => import(`/src/components/layouts/${theme}.vue`));
</script>

<template>
  <!-- Fitbit image -->
  <div class="center h-50 d-abs d-flex" style="margin-left: auto; margin-right: auto; right: 0; left: 0">
    <!--<img src="@/assets/fitbit.png" draggable="false"
      style="max-height: 100%; max-width: 100%; width: 100%; height: auto; object-fit: contain;" />-->
    <svg width="250" height="250">
      <rect width="100%" height="100%" rx="50" ry="50" stroke="black" stroke-width="30" fill-opacity="0" />
    </svg>
  </div>
  <!-- Whatever is inside the Fitbit should be added below -->
  <div class="center h-50 d-flex">
    <component :is="settingsStore.theme == null ? importTheme('NoTheme') : importTheme(settingsStore.theme)">
      <component :is="settingsStore.layout == null ? importLayout('NoLayout') : importLayout(`${settingsStore.layout}Layout`)" />
    </component>
  </div>
  <!-- Last row for option choosing -->
  <div class="center d-flex">
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
</template>

<style scoped>
img {
  pointer-events: none;
  user-select: none;
}
</style>