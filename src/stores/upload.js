import axios from "axios";
import { defineStore } from 'pinia'

// import cookie from 'vue-cookies'

const uploadUrl = "http://127.0.0.1:8000/upload/"
export const useUploadStore = defineStore('upload', {
    state: () => ({


    }),
    getters: {

    },

    actions: {
        async uploadFile(context, formData) {
            await axios.post(uploadUrl,
                formData)


        },
    }
    


})  