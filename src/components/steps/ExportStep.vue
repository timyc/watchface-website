<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';
const settingsStore = useSettingsStore();
function zip() {
    JSZipUtils.getBinaryContent('full.zip', function (err: any, data: any) {
        if (err) {
            throw err; // or handle err
        }

        JSZip.loadAsync(data).then(async function (res) {
            // change app/index.js with regex
            await res.file('app/index.js')!.async('string').then(function (data) {
                let newFile = data.replace(/(clock.granularity = )(.+)(;)/g, '$1' + settingsStore.layout + '$3');
                res.file('app/index.js', newFile);
                // download new zip file
                res.generateAsync({ type: "blob" }).then(function (content) {
                    // see FileSaver.js
                    saveAs(content, "watchface.zip");
                });
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