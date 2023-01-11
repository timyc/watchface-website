import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settingsStore", {
    state: () => ({
        layout: null as unknown as string,
        theme: null as unknown as string,
        aesthetic: null as unknown as string,
        fields: [] as any[],
        step: 1,
    }),
});