<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import statistics from '@/data/statistics';
import tooltips from '@/data/tooltips';
import layouts from '@/data/layouts';
import draggable from 'vuedraggable';

export default {
    name: "StatisticsStep",
    components: {
        draggable,
    },
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore, statistics, layouts, tooltips
        };
    },
    methods: {
        addStatistic(stat: string, mode: string) {
            this.settingsStore.fields.push({ stat: stat, mode: mode });
        }
    },
}
</script>

<template>
    <div>
        <div id="statisticsContainer">
            <h2>Please select the data points you would like to have</h2>
            <div id="statisticsBox"
                v-if="settingsStore.fields.length < (settingsStore.layout != null ? layouts[settingsStore.layout as keyof typeof layouts].statCount : 0)">
                <div id="statisticsSelector">Add statistic</div>
                <div id="statisticsChoices">
                    <template v-for="value, index in statistics" :key="value.name">
                        <div 
                            class="statistic-item"
                            v-if="!settingsStore.fields.find(e => e.stat == index)"
                            @click="addStatistic(index, Object.keys(value.display_methods)[0])">
                            {{ value.name }}
                            <div class="tooltip">
                                {{tooltips[index]}}
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <draggable v-model="settingsStore.fields" item-key="stat" handle=".handle">
                <template #item="{ element }">
                    <div>
                        <SelectedStatItem :stat="element.stat"
                            :statInfo="statistics[element.stat as keyof typeof statistics]" />
                    </div>
                </template>
            </draggable>
        </div>
    </div>
    <footer class="d-flex center">
        <ContinueButton :step="2" />
    </footer>
</template>

<style scoped>
/* Tool Tip */
.statistic-item {
  /* position: relative; */
}

.tooltip{
    /* Positoning */
    position: absolute;
    top: 0;
    right: -6rem;

    /* Sizing */
    width: 8rem;

    /* Display */
    display: none;

    /* Color */
    background-color: #f9f9f9;
    color: #000;

    /* Padding */
    padding: 0.2rem;

    /* Border / Shadow */
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.statistic-item:hover .tooltip {
    /* On hover, display the tooltip */
    display: block;
}

.statistic-item:hover {
    /* On hover of an individual statistics item, change background color */
    background-color: #D8D8D8;
}

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

#statisticsChoices>div {
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
}

#statisticsBox {
    z-index: 100;
}

#statisticsBox:hover #statisticsChoices {
    display: block;
}
</style>