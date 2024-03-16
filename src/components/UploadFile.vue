<script>
export default {
    
}
</script>

<template>
<div>
    <div class="field">
            <div class="file has-name is-boxed is-small is-dark">
            <label class="file-label">
                <!-- <input class="file-input" type="file" name="resume" v-on:change="onChangeFileUpload()"/> -->
                <input class="file-input" type="file" id="file" ref="file" v-on:change="onChangeFileUpload()"/>
                <span class="file-cta">
                <span class="file-icon">
                    <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                    Choose a file…
                </span>
                </span>
                <span class="file-name ">
                    {{ file.name }}
                </span>
            </label>
        </div>
    </div>
    <div>
        <button class="button is-success is-fullwidth " v-on:click="submitForm()">Upload</button>
    </div>
</div>
</template>