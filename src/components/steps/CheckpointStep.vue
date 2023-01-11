<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
export default {
    name: 'CheckpointStep',
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore,
        };
    },
    props: {
        num: {
            type: Number,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    }
}
</script>

<template>
    <div class="ovalSplash">
        <div class="bigStepNum">
            {{ num }}
        </div>
        <h2 class="white">{{ text }}</h2>
        <div class="continueBtn" @click="settingsStore.step++">Continue</div>
    </div>
</template>

<style scoped>
.continueBtn {
  padding: 5px;
  background: white;
  color: #481BC9;
  border-radius: 5px;
  cursor: pointer;
  max-width: 50%;
  margin: auto;
}
.bigStepNum {
  border-radius: 50%;
  background-color: white;
  color: #481BC9;
  display: inline-block;
  font-size: 30px;
  width: 50px;
  height: 50px;
  margin: auto;
}
.ovalSplash {
  border-radius: 50%;
  background-color: #481BC9;
  width: 500px;
  max-width: 80vw;
  height: 300px;
  padding: 30px;
  display: flex;
  flex-direction: column;
}
</style>