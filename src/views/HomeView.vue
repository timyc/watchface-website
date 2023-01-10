<script lang="ts">
import RetroPurple from '@/components/themes/RetroPurple.vue';
import Interface from '@/components/Interface.vue';
import { useSettingsStore } from '@/stores/settings';
export default {
  name: 'HomeView',
  components: {
    RetroPurple, Interface,
  },
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
  <div class="h-50 center d-flex">
    last row
  </div>
</template>

<style scoped>
img {
  pointer-events: none;
  user-select: none;
}
</style>