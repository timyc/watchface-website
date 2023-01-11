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
  <div class="h-50 center d-flex">
    <div v-if="step == 1">
      <h1>Welcome to SmartBuild!</h1>
      <div class="step left"><span class="stepNum center">1</span> Customize your data</div>
      <div class="step left"><span class="stepNum center">2</span> Apply your theme</div>
      <div class="step left"><span class="stepNum center">3</span> Customize your aesthetic</div>
      <div class="startBtn">
        Tap to Begin
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  pointer-events: none;
  user-select: none;
}
.startBtn {
  padding: 5px;
  background-color: blue;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.step {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #f0f0f0;
}
.stepNum {
  /* make circular */
  border-radius: 50%;
  background-color: blue;
  color: white;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
</style>