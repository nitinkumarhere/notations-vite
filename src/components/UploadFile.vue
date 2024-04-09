<script>
import { useUploadStore } from '@/stores/upload';
export default {
    data(){
        return {
            file:'',
        }
       
    },
    setup(){
        const uploadStore = useUploadStore()
        return {uploadStore}
    },  
            

    methods: {
        onChangeFileUpload(){
        this.file = this.$refs.file.files[0];
        console.log(this.file)


        },
        async submitForm(){
                console.log("entered submit")
                let formData = new FormData();
                formData.append('file', this.file);
                console.log(formData);
                try {
                    await this.uploadStore.uploadFile(formData,  
                    ).then(function(data){
                    console.log(formData);
                })
                .catch(function(){
                console.log('FAILURE!!');
                });
                } catch(err){
                    console.log(err)
                }

                

            
        },
    }
    
    
}
</script>

<template>
<div>
    <div class="field">
            <div class="file has-name is-boxed is-small is-dark">
            <label class="file-label">
                <input class="file-input" 
                    type="file" 
                    id="file" 
                    ref="file" 
                    v-on:change="onChangeFileUpload()"/>
                <span class="file-cta">
                <span class="file-icon">
                    <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                    Choose a file…
                </span>
                </span>
                <span class="file-name ">
                    {{ file.name }} File
                </span>
            </label>
        </div>
    </div>
    <div>
        <button class="button is-success is-fullwidth " v-on:click="submitForm()">Upload</button>
    </div>
</div>
</template>