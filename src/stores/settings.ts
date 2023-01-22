import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settingsStore", {
    state: () => ({
        layout: null as unknown as string,
        theme: null as unknown as string,
        aesthetic: null as unknown as string,
        customImage: null as unknown as string,
        placeholderImage: null as unknown as string,
        errorText: '',
        fields: [] as any[],
        step: 1,
        extraStep: 0,
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