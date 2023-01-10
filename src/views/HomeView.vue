<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
export default {
  name: 'HomeView',
  setup() {
    const settingsStore = useSettingsStore();
    return {
      settingsStore,
    };
  },
}
</script>

<template>
  <!-- Fitbit image -->
  <div class="h-50 w-100 d-abs d-flex">
    <img src="@/assets/fitbit.png"
      style="max-height: 100%; max-width: 100%; width: 100%; height: auto; object-fit: contain;" />
  </div>
  <!-- Whatever is inside the Fitbit should be added below -->
  <div class="center h-50 d-flex">test</div>
  <!-- Last row for option choosing -->
  <div class="h-50 center d-flex">
    last row
  </div>
</template>

<style scoped>
img {
  pointer-events: none;
}
</style>