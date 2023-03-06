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
    <div :class="{'selectedStat': true, 'd-table': true, 'flatBottom': visible}" @click="visible = !visible">
        <span class="d-cell left v-middle" style="width:30px;pointer-events:none"><img src="/icons/expandable.png" width="20" /></span>
        <span class="d-cell left v-middle">{{ statInfo.name }}</span>
        <span class="d-cell right handle"><img src="/icons/draggable.png" width="20" /></span>
    </div>
    <div class="statInfo" v-if="visible">
        <select v-model="settingsStore.fields.filter(e => e.stat == stat)[0].mode">
            <option v-for="method,key of statInfo.display_methods" :value="key">{{ method.name }}</option>
        </select>
        <div class="removeBtn clickable" @click="removeStat()" style="margin: 20px auto">Remove</div>
    </div>
</template>

<style scoped>
.statInfo {
    width: 80vw;
    padding: 10px;
    background-color: #878787b6;
    margin: -20px auto 10px auto;
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
.flatBottom {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.removeBtn {
    width: 30%;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: red;
    color: white;
}
</style>