<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import statistics from '@/data/statistics';
import draggable from 'vuedraggable';

export default {
    name: "StatisticsStep",
    components: {
        draggable,
    },
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore, statistics,
        };
    },
    methods: {
        addStatistic(stat: string, mode: string) {
            this.settingsStore.fields.push({stat: stat, mode: mode});
        }
    },
}
</script>

<template>
    <div>
        <div id="statisticsContainer">
            <h2>Please select the data points you would like to have</h2>
            <div id="statisticsBox" v-if="settingsStore.fields.length < 4">
                <div id="statisticsSelector">Add statistic</div>
                <div id="statisticsChoices">
                    <template v-for="value,index in statistics" :key="value.name">
                        <div v-if="!settingsStore.fields.find(e => e.stat == index)" @click="addStatistic(index, Object.keys(value.display_methods)[0])">{{ value.name }}</div>
                    </template>
                </div>
            </div>
            <draggable 
            v-model="settingsStore.fields" 
            item-key="stat">
                <template #item="{element}">
                    <div>
                        <SelectedStatItem :stat="element.stat" :statInfo="statistics[element.stat as keyof typeof statistics]" />
                    </div>
                </template>
            </draggable>
        </div>
    </div>
    <footer class="d-flex d-sb">
        <BackButton />
        <ContinueButton v-if="settingsStore.fields.length > 0" />
    </footer>
</template>

<style scoped>
#statistics {
    display: flex;
    gap: 10px;
    width: 90vw;
    overflow-x: scroll;
    overflow-y: hidden;
}

#statisticsSelector {
    width: 80vw;
    padding: 10px;
    background-color: #3b984b;
    border-radius: 5px;
    margin: auto;
    cursor: pointer;
}

#statisticsChoices {
    display: none;
    position: absolute;
    width: 80vw;
    background-color: white;
}

#statisticsChoices > div {
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
}

#statisticsBox {
    z-index:100;
}

#statisticsBox:hover #statisticsChoices {
    display: block;
}
</style>