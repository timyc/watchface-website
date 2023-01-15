<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
export default {
    name: 'SelectedStatItem',
    props: {
        statInfo: {
            type: Object as any,
            required: true,
        },
        stat: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            visible: false,
        }
    },
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore,
        };
    },
    methods: {
        removeStat() {
            this.settingsStore.fields = this.settingsStore.fields.filter(e => e.stat != this.stat);
        }
    }
}
</script>

<template>
    <div class="selectedStat" @click="visible = !visible">{{ statInfo.name }}</div>
    <div class="statInfo" v-if="visible">
        <select v-model="settingsStore.fields.filter(e => e.stat == stat)[0].mode">
            <option v-for="method,key of statInfo.display_methods" :value="key">{{ method.name }}</option>
        </select>
        <div class="red clickable" @click="removeStat()">[Remove]</div>
    </div>
</template>

<style scoped>
.statInfo {
    width: 80vw;
    padding: 10px;
    background-color: #d9d9d9b6;
    margin-bottom: 10px;
}
.selectedStat {
    width: 80vw;
    padding: 10px;
    background-color: #D9D9D9;
    border-radius: 5px;
    margin: 20px auto;
    cursor: pointer;
}
</style>