<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
export default {
    name: 'IntroStep',
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore,
        };
    },
    data() {
        return {
            appName: import.meta.env.VITE_APP_NAME,
        }
    }
}
</script>

<template>
    <div>
        <h1>Welcome to {{ appName }}!</h1>
        <div class="step left"><span class="stepNum center">1</span> Customize your data</div>
        <div class="step left"><span class="stepNum center">2</span> Apply your theme</div>
        <div class="step left"><span class="stepNum center">3</span> Customize your aesthetic</div>
        <div class="startBtn" @click="settingsStore.step++">
            Tap to Begin
        </div>
    </div>
</template>

<style scoped>
.startBtn {
    padding: 5px;
    background-color: #481BC9;
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
    background-color: #481BC9;
    color: white;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 20px;
}
</style>