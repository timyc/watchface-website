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
    <div class="selectedStat d-table" @click="visible = !visible">
        <span class="d-cell left v-middle" style="width:30px;pointer-events:none"><img src="/icons/expandable.png" width="20" /></span>
        <span class="d-cell left v-middle">{{ statInfo.name }}</span>
        <span class="d-cell right handle"><img src="/icons/draggable.png" width="20" /></span>
    </div>
    <div class="statInfo" v-if="visible">
        <select v-model="settingsStore.fields.filter(e => e.stat == stat)[0].mode">
            <option v-for="method,key of statInfo.display_methods" :value="key">{{ method.name }}</option>
        </select>
        <div class="red clickable" @click="removeStat()" style="margin: 20px">[Remove]</div>
    </div>
</template>

<style scoped>
.statInfo {
    width: 80vw;
    padding: 10px;
    background-color: #878787b6;
    margin: auto auto 10px auto;
}
.selectedStat {
    width: 80vw;
    padding: 10px;
    background-color: #D9D9D9;
    border-radius: 5px;
    margin: 20px auto;
    cursor: pointer;
}
.handle {
    cursor: move;
}
</style>