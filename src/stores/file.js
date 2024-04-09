import { defineStore } from "pinia"
import axios from 'axios'
import { toRaw } from "vue"

const filesUrl = "/files/"


export const useFileStore = defineStore('file', {
    state: ()=> {
        return {
            files:[],
            file,
        }    
       
    },
    persist:true,

    actions: {
        async fetchFiles() {
            try{
                this.loading = true
                const results = await axios.get(filesUrl).then()
                const avar = await results
                console.log("in FetchFiles", avar.data.results )
                this.files = []
                this.files = toRaw(await avar.data.results)
                // this.state.songs= this.songs
                console.log("again", toRaw(this.files), this.getSongList())
                // return this.songs
            } catch(error) {
                return error
                } finally {
                    this.loading = false
                  }
        }
    },

    getters: {
        getSongList(state) {
            // this.fetchFiles();
            // this.fetchfiles();
            // state.files = [] 
            
            console.log("in getters", toRaw(state.files))
            return toRaw(state.files)
        },
        getFilebyID(state, id) {
            const songArray = toRaw(state.files )
            console.log("in getFileByID",songArray)
            store.file = toRaw(state.files).find(element => element.tags[0].id)            
            return toRaw(state.file)

        }
    },

})

