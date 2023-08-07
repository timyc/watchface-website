import { defineStore } from "pinia";

export interface field {
    stat: string,
    mode: string,
}

export const useSettingsStore = defineStore("settingsStore", {
    state: () => ({
        layout: 'none',
        theme: null as unknown as string,
        aesthetic: null as unknown as string | null,
        primaryColor: null as unknown as string,
        secondaryColor: null as unknown as string,
        iconColor: null as unknown as string,
        iconTextColor: null as unknown as string,
        dateColor: null as unknown as string,
        timeColor: null as unknown as string,
        customImage: null as unknown as string,
        placeholderImage: null as unknown as string,
        bandaid: true,
        errorText: '',
        fields: [] as field[],
        step: 3,
        extraStep: 0,
        aestheticFlag: false,
        // We will have an array here that contains colors, this allows us to dynamically store individual colors of icons for the multicolored modern theme
        uniqueIconColor: [] as string[],
    }),
    actions: {
        getExport() {
            return JSON.stringify({
                layout: this.layout,
                theme: this.theme,
                aesthetic: this.aesthetic ?? 'default',
                fields: this.fields,
                primaryColor: this.primaryColor,
                secondaryColor: this.secondaryColor,
                iconColor: this.iconColor,
                iconTextColor: this.iconTextColor,
                dateColor: this.dateColor,
                timeColor: this.timeColor,
                extras: {bandaid: this.bandaid, customImage: this.customImage},
            });
        }
    },
});