import { defineStore } from 'pinia'
// import {HTTP} from '../http-common'

// import cookie from 'vue-cookies'
import axios from 'axios'

const uploadUrl = "/upload/"
export const useUploadStore = defineStore('upload', {
    state: () => ({


    }),
    // getters: {

    // },

    actions: {
        async uploadFile(formData) {
            let config = { headers: { 'Content-Type': 'multipart/form-data', } }

            const response = await axios.post(
                uploadUrl,
                formData,
                // config,
            
            )
            console.log(response.data)

            }
        },
    }
) 