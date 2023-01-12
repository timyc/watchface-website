<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import BackButton from '@/components/buttons/BackButton.vue';
import ContinueButton from '@/components/buttons/ContinueButton.vue';

export default {
    name: "StatisticsStep",
    components: {
        BackButton, ContinueButton,
    },
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore,
        };
    },
    methods: {
        addStatistic(stat: string) {
            this.settingsStore.fields.push({stat: stat, mode: 1});
        }
    },
    data() {
        return {
            nameMap: {
                "sleep": "Sleep",
                "heart_rate": "Heart Rate",
                "steps": "Steps",
                "calories": "Calories",
                "active_zone": "Active Zone Minutes",
                "weather": "Weather",
                "distance": "Distance Travelled",
                "floor_count": "Floor Count"
            }
        }
    }
}
</script>

<template>
    <div>
        <div id="statisticsContainer">
            <h2>Please select the data points you would like to have</h2>
            <div id="statisticsBox">
                <div id="statisticsSelector" v-if="settingsStore.fields.length < 4">Add statistic</div>
                <div id="statisticsChoices">
                    <div v-if="!settingsStore.fields.find(e => e.stat == 'sleep')" @click="addStatistic('sleep')">Sleep</div>
                    <div v-if="!settingsStore.fields.find(e => e.stat == 'heart_rate')" @click="addStatistic('heart_rate')">Heart Rate</div>
                    <div v-if="!settingsStore.fields.find(e => e.stat == 'steps')" @click="addStatistic('steps')">Steps</div>
                    <div v-if="!settingsStore.fields.find(e => e.stat == 'calories')" @click="addStatistic('calories')">Calories</div>
                    <div v-if="!settingsStore.fields.find(e => e.stat == 'active_zone')" @click="addStatistic('active_zone')">Active Zone Minutes</div>
                    <div v-if="!settingsStore.fields.find(e => e.stat == 'weather')" @click="addStatistic('weather')">Weather</div>
                    <div v-if="!settingsStore.fields.find(e => e.stat == 'distance')" @click="addStatistic('distance')">Distance Travelled</div>
                    <div v-if="!settingsStore.fields.find(e => e.stat == 'floor_count')" @click="addStatistic('floor_count')">Floor Count</div>
                </div>
            </div>
            <div class="selectedStat" v-for="item in settingsStore.fields">{{ nameMap[item.stat as keyof typeof nameMap] }}</div>
        </div>
        <footer class="d-flex d-sb">
            <BackButton />
            <ContinueButton v-if="settingsStore.fields.length > 0" />
        </footer>
    </div>
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
    background-color: #D9D9D9;
    border-radius: 5px;
    margin: auto;
    cursor: pointer;
}

.selectedStat {
    width: 80vw;
    padding: 10px;
    background-color: #D9D9D9;
    border-radius: 5px;
    margin: 20px auto;
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