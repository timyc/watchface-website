<!-- 
  This is the Main Page of the web application, the HTML, CSS, and overall organization of the web app is located in this file.
-->

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
// Helper Functions
import { importer } from "@/helpers/common";

// Settings Store
import { useSettingsStore } from "@/stores/settings";

// Data
import aesthetics from "@/data/aesthetics";
import layouts from "@/data/layouts";
import themes from "@/data/themes";

// Variable Initialization
const settingsStore = useSettingsStore();
const menuOpen = ref(false);

</script>

<template>
  <!-- Navbar at Top of Screen -->
  <nav class="nav-bar">
    <div class="menuOption clickable" :class="{completeMenuOption: settingsStore.layout != null}" @click="settingsStore.step = 3;">
      Layout
    </div>
    <div class="menuOption clickable d-cell" :class="{completeMenuOption: settingsStore.fields.length > 0}"  @click="settingsStore.step = 4;">
      Data
    </div>
    <div class="menuOption clickable" :class="{completeMenuOption: settingsStore.theme != null}"  @click="settingsStore.step = 6;">
      Theme
    </div>
    <div class="menuOption clickable" :class="{completeMenuOption: settingsStore.aestheticFlag == true}"  @click="settingsStore.step = 8;">
      Aesthetic
    </div>
    <div class="menuOption clickable"  @click="settingsStore.step = 9;">
      Export
    </div>
  </nav>

  <div style="height: 400px;position: sticky;top: 0;background: white; z-index: 500;">
    <!-- The Black Border of the Fitbit Preview -->
    <div class="center d-abs d-flex" style="margin-left: auto; margin-right: auto; right: 0; left: 0">
      <svg width="250" height="250">
        <rect width="100%" height="100%" rx="50" ry="50" stroke="black" stroke-width="30" fill-opacity="0" />
      </svg>
    </div>
    <!-- 
      Actual Contents of the Fitbit Preview
      - The contents of the fitbit preview are rendered as SVGs
      - The layout settings are stored in a file in data/layout.ts
      - the layouts are then rendered here somehow with an importer function
    -->
    <div class="center d-flex"
      :style="{ 'font-family': settingsStore.aesthetic == null ? 'inherit' : `${aesthetics[settingsStore.aesthetic as keyof typeof aesthetics].layout[0]}` }">
      <component
        :is="settingsStore.theme == null ? importer('themes', 'NoTheme') : importer('themes', themes[settingsStore.theme as keyof typeof themes].theme)">
        <component
          :is="settingsStore.layout == null ? importer('layouts', 'NoLayout') : importer('layouts', `${layouts[settingsStore.layout as keyof typeof layouts].type}Layout`)" />
      </component>
    </div>
  </div>

  <!-- 
    - This div essentially contains each "step" that is shown to users
    - This div only renders the currently selected step depending on settingsStore.step
  -->
  <div :class="{ blur: menuOpen }" class="center d-flex" style="flex-direction: column">
    <CheckpointStep :num="1" text="Customize your data" v-if="settingsStore.step == 2" />
    <LayoutStep v-if="settingsStore.step == 3" />
    <StatisticsStep v-if="settingsStore.step == 4" />
    <CheckpointStep :num="2" text="Apply a theme" v-if="settingsStore.step == 5" />
    <ThemesStep v-if="settingsStore.step == 6" />
    <CheckpointStep :num="3" text="Apply an aesthetic" v-if="settingsStore.step == 7" />
    <AestheticStep v-if="settingsStore.step == 8" />
    <ExportStep v-if="settingsStore.step == 9" />
  </div>

</template>

<!-- CSS -->
<style scoped>
  /* Navbar */
  .nav-bar{
    /* Flex Box */
    display: flex;
    justify-content: space-between;

    /* Margins */
    margin-left: 12rem;
    margin-right: 12rem;
    margin-top: 2rem;
  }

  .menuOption {
    /* Border for Debugging */
    /* border: 1px solid red; */

    /* Fonts / Font Size */
    font-size: 1.8em;
    padding: 10px;
  }

  .completeMenuOption{
    /* Fonts */
    color: white;
    background-color: black;
  }

#menu-button {
  padding: 10px;
  background: #d9d9d9;
  width: 70px;
  margin-left: auto;
  border-radius: 10px;
  cursor: pointer;
}

#menu {
  background: #d9d9d9;
  padding: 20px;
  margin-left: auto;
  width: 200px;
  height: 200px;
}

.blur {
  filter: blur(5px);
}

.stepsContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.stepsItem {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
}

.stepsItem:hover {
  background: #ebeaea;
}

.youAreHere {
  background: #d9d9d9;
}
</style>
