<script lang="ts">
import RetroPurple from '@/components/themes/RetroPurple.vue';
import Interface from '@/components/Interface.vue';
import IntroStep from '@/components/steps/IntroStep.vue';
import CheckpointStep from '@/components/steps/CheckpointStep.vue';
import LayoutStep from '@/components/steps/LayoutStep.vue';
import StatisticsStep from '@/components/steps/StatisticsStep.vue';
import { useSettingsStore } from '@/stores/settings';
export default {
  name: 'HomeView',
  components: {
    RetroPurple, Interface, IntroStep, CheckpointStep, LayoutStep, StatisticsStep,
  },
  setup() {
    const settingsStore = useSettingsStore();
    return {
      settingsStore,
    };
  },
  data() {
    return {
      step: 1,
    }
  }
}
</script>

<template>
  <!-- Fitbit image -->
  <div class="h-50 w-100 d-abs d-flex">
    <img src="@/assets/fitbit.png" draggable="false"
      style="max-height: 100%; max-width: 100%; width: 100%; height: auto; object-fit: contain;" />
  </div>
  <!-- Whatever is inside the Fitbit should be added below -->
  <div class="center h-50 d-flex">
    <RetroPurple>
      <Interface />
    </RetroPurple>
  </div>
  <!-- Last row for option choosing -->
  <div class="center d-flex">
    <IntroStep v-if="settingsStore.step == 1" />
    <CheckpointStep :num="1" text="Customize your data" v-if="settingsStore.step == 2" />
    <LayoutStep v-if="settingsStore.step == 3" />
    <StatisticsStep v-if="settingsStore.step == 4" />
    <CheckpointStep :num="2" text="Apply a theme" v-if="settingsStore.step == 5" />

    <CheckpointStep :num="3" text="Apply an aesthetic" v-if="settingsStore.step == 7" />
  </div>
</template>

<style scoped>
img {
  pointer-events: none;
  user-select: none;
}
</style>