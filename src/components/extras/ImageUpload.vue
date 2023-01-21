<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
export default {
    data() {
        return {
            file: null as unknown as any,
        }
    },
    setup() {
        const settingsStore = useSettingsStore();
        return {
            settingsStore,
        }
    },
    methods: {
        onFileChange(e: any) {
            let files = e.target.files || e.dataTransfer.files;
            this.file = files;
        },
        async uploadToImgur() {
            if (this.file == null) {
                return;
            }
            let formData = new FormData();
            formData.append('image', this.file[0]);
            let upload = await fetch('https://api.imgur.com/3/image', {
                method: 'POST',
                headers: {
                    Authorization: `Client-ID ${import.meta.env.VITE_IMGUR_CLIENT_ID}`,
                },
                body: formData,
            });
            let response = await upload.json();
            let img = await fetch(response.data.link);
            let imgBlob = await img.blob();
            this.settingsStore.customImage = URL.createObjectURL(imgBlob);
        }
    }
}
</script>

<template>
    upload images here
    <input type="file" v-on:change="onFileChange" />
    <button @click="uploadToImgur">Upload</button>
</template>