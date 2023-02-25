<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import { ColorPicker } from 'vue-accessible-color-picker';
export default {
    name: 'SelectedColorItem',
    components: {
        ColorPicker
    },
    emits: ['colorUpdate'],
    props: {
        name: {
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
        colorChange(colorData: any) {
            this.$emit('colorUpdate', colorData.cssColor);
        },
    }
}
</script>

<template>
    <div :class="{'selectedColor': true, 'd-table': true, 'flatBottom': visible}" @click="visible = !visible">
        <span class="d-cell left v-middle" style="width:30px;pointer-events:none"><img src="/icons/expandable.png" width="20" /></span>
        <span class="d-cell left v-middle">{{ name }}</span>
        <span class="d-cell right handle"><img src="/icons/draggable.png" width="20" /></span>
    </div>
    <div class="colorInfo" v-if="visible">
        <ColorPicker class="m-auto" :visible-formats="['hex']" alpha-channel="hide" @color-change="colorChange" />
    </div>
</template>

<style scoped>
.colorInfo {
    width: 80vw;
    padding: 10px;
    background-color: #878787b6;
    margin: -20px auto 10px auto;
}
.selectedColor {
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
</style>