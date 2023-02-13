import { defineAsyncComponent } from 'vue';
export const importer = (type: string, file: string) => defineAsyncComponent(() => import(`@/components/${type}/${file}.vue`));