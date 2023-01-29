import { defineStore } from "pinia";

export interface field {
    stat: string,
    mode: string,
}

export const useSettingsStore = defineStore("settingsStore", {
    state: () => ({
        layout: null as unknown as string,
        theme: null as unknown as string,
        aesthetic: null as unknown as string | null,
        customImage: null as unknown as string,
        placeholderImage: null as unknown as string,
        bandaid: true,
        errorText: '',
        fields: [] as field[],
        step: 1,
        extraStep: 0,
        aestheticFlag: false,
    }),
    actions: {
        getExport() {
            return JSON.stringify({
                layout: this.layout,
                theme: this.theme,
                aesthetic: this.aesthetic ?? 'default',
                fields: this.fields,
                extras: {bandaid: this.bandaid, customImage: this.customImage},
            });
        }
    },
});