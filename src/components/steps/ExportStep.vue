<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
const settingsStore = useSettingsStore();
</script>

<template>
    <div>
        <h2>Export your customized watch face</h2>
        <p>Magic button to call endpoint here</p>
        <textarea v-html="settingsStore.getExport()" style="width: 70vw;height:200px"></textarea>
    </div>
    <footer class="d-flex d-sb">
        <BackButton />
    </footer>
</template>