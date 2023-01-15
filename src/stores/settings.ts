import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settingsStore", {
    state: () => ({
        layout: null as unknown as string,
        theme: null as unknown as string,
        aesthetic: null as unknown as string,
        fields: [] as any[],
        step: 1,
    }),
    actions: {
        getExport() {
            return JSON.stringify({
                layout: this.layout,
                theme: this.theme,
                aesthetic: this.aesthetic,
                fields: this.fields,
            });
        }
    },
});