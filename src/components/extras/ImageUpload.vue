<script lang="ts">
import { useSettingsStore } from '@/stores/settings';
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';
export default {
    data() {
        return {
            file: null as unknown as any,
            canUpload: true,
        }
    },
    components: {
        Cropper
    },
    emits: ['complete'],
    setup() {
        const settingsStore = useSettingsStore();
        if (settingsStore.customImage == null) {
            settingsStore.extraStep = 0;
        }
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
            this.canUpload = false;
            this.settingsStore.errorText = '';
            if (this.file == null) {
                this.canUpload = true;
                return;
            }
            let formData = new FormData();
            formData.append('image', this.file[0]);
            await fetch('https://api.imgur.com/3/image', {
                method: 'POST',
                headers: {
                    Authorization: `Client-ID ${import.meta.env.VITE_IMGUR_CLIENT_ID}`,
                },
                body: formData,
            }).then(async (res) => {
                if (res.status != 200) throw new Error('Failed to upload image to Imgur.');
                let response = await res.json();
                let img = await fetch(response.data.link);
                let imgBlob = await img.blob();
                this.settingsStore.placeholderImage = URL.createObjectURL(imgBlob);
                this.settingsStore.customImage = this.settingsStore.placeholderImage;
                this.canUpload = true;
                this.$emit('complete');
            }).catch((err) => {
                console.log(err);
                this.settingsStore.errorText = err;
                this.canUpload = true;
            });
        },
        onCrop({coordinates, canvas} : any) {
            this.settingsStore.customImage = canvas.toDataURL();
        }
    }
}
</script>

<template>
    <div id="imageUploader">
        <h2>Custom Image</h2>
        <p>Upload an image to use as your background.</p>
        <div v-if="!canUpload">Please wait...</div>
        <div class="red" v-html="settingsStore.errorText"></div>
        <input type="file" v-on:change="onFileChange" />
        <div :class="{'clickable': true,'uploadBtn': true, 'disabledBtn':!canUpload}" @click="uploadToImgur">Upload</div>
        <template v-if="settingsStore.placeholderImage != null">
            <h3>You may crop your image</h3>
            <cropper @change="onCrop" class="cropper" :src="settingsStore.placeholderImage" :stencil-props="{aspectRatio: 10/10}"></cropper>
        </template>
        
    </div>
</template>

<style scoped>
#imageUploader {
    background: lightgray;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
}
.uploadBtn {
    background: #1e90ff;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin: 10px 0;
}

.disabledBtn {
    background: gray;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin: 10px 0;
    cursor: not-allowed;
}
</style>