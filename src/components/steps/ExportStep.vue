<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';
import layouts from '@/data/layouts';
const settingsStore = useSettingsStore();
async function zip() {
    JSZipUtils.getBinaryContent('full.zip', function (err: any, data: any) {
        if (err) {
            throw err; // or handle err
        }

        JSZip.loadAsync(data).then(async function (res) {
            await res.file('resources/index.view')!.async('string').then(function (data) {
                // icon coords
                let newLayout = data.replace(/(!y1_1!)/g, `${parseInt(layouts[settingsStore.layout as keyof typeof layouts].stats[0].y1)}%`);
                newLayout = newLayout.replace(/(!y1_2!)/g, `${parseInt(layouts[settingsStore.layout as keyof typeof layouts].stats[1].y1)}%`);
                newLayout = newLayout.replace(/(!y1_3!)/g, `${parseInt(layouts[settingsStore.layout as keyof typeof layouts].stats[2].y1)}%`);
                newLayout = newLayout.replace(/(!y1_4!)/g, `${parseInt(layouts[settingsStore.layout as keyof typeof layouts].stats[3].y1)}%`);
                newLayout = newLayout.replace(/(!x1_1!)/g, `${5 + parseInt(layouts[settingsStore.layout as keyof typeof layouts].stats[0].x1)}%`);
                newLayout = newLayout.replace(/(!x1_2!)/g, `${5 + parseInt(layouts[settingsStore.layout as keyof typeof layouts].stats[1].x1)}%`);
                newLayout = newLayout.replace(/(!x1_3!)/g, `${5 + parseInt(layouts[settingsStore.layout as keyof typeof layouts].stats[2].x1)}%`);
                newLayout = newLayout.replace(/(!x1_4!)/g, `${5 + parseInt(layouts[settingsStore.layout as keyof typeof layouts].stats[3].x1)}%`);
                // time coords
                newLayout = newLayout.replace(/(!x_1!)/g, `${Math.ceil(30 * parseFloat(layouts[settingsStore.layout as keyof typeof layouts].interface[0].x))}%`);
                newLayout = newLayout.replace(/(!y_1!)/g, `${Math.ceil(30 * parseFloat(layouts[settingsStore.layout as keyof typeof layouts].interface[0].y))}%`);
                // date coords
                newLayout = newLayout.replace(/(!x_2!)/g, `${Math.ceil(30 * parseFloat(layouts[settingsStore.layout as keyof typeof layouts].interface[1].x))}%`);
                newLayout = newLayout.replace(/(!y_2!)/g, `${Math.ceil(30 * parseFloat(layouts[settingsStore.layout as keyof typeof layouts].interface[1].y))}%`);
                res.file('resources/index.view', newLayout);
            });
            await res.generateAsync({ type: "blob" }).then(function (content) {
                saveAs(content, "watchface.zip");
            });

        });
    });
}
</script>

<template>
    <div>
        <h2>Export your customized watch face</h2>
        <p @click="zip">Magic button to call endpoint here</p>
        <textarea v-html="settingsStore.getExport()" style="width: 70vw;height:200px"></textarea>
    </div>
    <footer class="d-flex d-sb">
        <BackButton />
    </footer>
</template>