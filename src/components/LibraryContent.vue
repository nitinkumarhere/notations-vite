
<script >
import {useFileStore} from '../stores/file'
import { mapState, mapWritableState, mapActions, mapStores } from 'pinia'
// import { computed } from 'vue'
import { toRaw } from 'vue'
// import { storeToRefs } from "pinia";
// import SheetMusic from "../components/SheetMusic.vue"
// const fileStore = storeToRefs( useFileStore())
// const {getSongList} = storeToRefs(useFileStore())
import { RouterLink, RouterView } from 'vue-router';
export default {
    // props = ['f'],
    // const { data: songs, } = storeToRefs(useFileStore),
    // ...RouterLink.props,   
    // components : { SheetMusic},
    data(){
        return {
            // fileSource: "",
            // fileTags: Object,
            // songfiles:null,
            // songList : null
            // files:Object
            // songs: this.files
            // songs:[],
            // files : [], 
            // songs: [],
            // files: 'this.fileStore.fetchFiles()'
        }
    },
    

    setup(){
        const fileStore = useFileStore()
            return {fileStore}
        // const props = defineProps(['f'])
		// console.log(props)
    }, 



    mounted(){
        // this.getFiles()
        this.fileStore.fetchFiles()
        // this.songs = [] 
        // this.files = this.fileStore.getSongList 
        // console.log( "in mounted", this.fileStore.getSongList())
        // this.files = this.songs
    },
    
 
    computed: {
        ...mapState(useFileStore, {files:toRaw('files'),},), 
   
    },
   
    methods: {
        setFileSource(file){
            this.fileSource = file.file.replace("/files", "")
            // var audio = new Audio(this.fileSource)
            // audio.play()
            // this.fileTags = file.tags[0]
        },
        // getFiles(){
            // this.files = this.fileStore.fetchFiles()
            // this.files = this.fileStore.songList

        // }

        // ...mapActions(useFileStore, ["fetchFiles"]),

    },
}
</script>


<template>
    <div>
        <div class="table-container">
        <table class="table is-narrow is-striped is-hoverable is-bordered">
            <thead>
                <tr>
                    <th><abbr title="Track">Track</abbr></th>
                    <th>Title</th>
                    <!-- <th><abbr title="Scale">Scale</abbr></th> -->
                    <th><abbr title="Artist">Artist</abbr></th>
                    <th><abbr title="Album">Album</abbr></th>
                    <th><abbr title="Length">Length</abbr></th>
                </tr>
            </thead>
            <tfoot>
                <tr> 
                    <th><abbr title="Track">Track</abbr></th>
                    <th>Title</th>
                    <!-- <th><abbr title="Scale">Scale</abbr></th> -->
                    <th><abbr title="Artist">Artist</abbr></th>
                    <th><abbr title="Album">Album</abbr></th>
                    <th><abbr title="Length">Length</abbr></th>
                </tr>
            </tfoot>
            <!-- {{files}} -->

    <!-- <h1>This is debugging</h1> -->
                <tbody v-for="f in files"  class="">
                <!-- v-bind:key="f.tags[0].id" -->
                 <!-- >/ -->
                    <!-- {{ f.tags[0].id }} -->
                    <!-- {{ console.log(key, "in lib")}} -->
                    <tr>
                        
                        <td v-if="f.tags[0]">
                            <RouterLink :to="{path:'/sheetmuic/{:f}',name:'Notations', params:{f: f.tags[0].id }, props:true, component:SheetMusic}">
                                {{f.tags[0].track }}
                            </RouterLink>
                        </td>
                        <td v-else></td>
                        <td v-if="f.tags[0]">
                            <RouterLink :to="{path:'/sheetmuic/{:f}',name:'Notations', params:{f: f.tags[0].id }, props:true, component:SheetMusic}">

                                {{f.tags[0].title }}
                        </RouterLink>

                        </td>
                        <td v-else>{{f.file.replace("http://127.0.0.1:8000/media/", "")}}</td>
                        <!-- <td v-if="f.description[0].scale">
                            <router-link :to="{name:'Notations', params:{ f }}">
                                {{f.description[0].scale }}
                            </router-link>
                        </td> -->
                        <td v-else></td>
                        <td v-if="f.tags[0]">
                            <RouterLink :to="{path:'/sheetmuic/{:f}',name:'Notations', params:{f: f.tags[0].id }, props:true, component:SheetMusic}">

                                {{f.tags[0].artist }}
                            </RouterLink>
                        </td>
                        <td v-else></td>
                        <td v-if="f.tags[0]">
                            <RouterLink :to="{path:'/sheetmuic/{:f}',name:'Notations', params:{f: f.tags[0].id }, props:true, component:SheetMusic}">

                                {{f.tags[0].album }}
                            </RouterLink>
                        </td>
                        <td v-else></td>
                        <td v-if="f.tags[0]">
                            <RouterLink :to="{path:'/sheetmuic/{:f}',name:'Notations', params:{f: f.tags[0].id }, props:true, component:SheetMusic}">

                                {{f.tags[0].length }}
                                <!-- {{ files  }} -->
                                <!-- {{ files}} -->
                            </RouterLink>
                        </td> 
                        <td v-else></td>
                        <!-- <td v-if="f.tags[0]"> -->
                            <!-- <RouterLink  v-slot="{ SheetMusic }">
                                
                                <component
                                    :is="SheetMusic"
                                    view-prop='f'
                                />{{f.tags[0].length }}
                            </RouterLink> -->
                            
                        <!-- </td> -->
                    </tr>

                </tbody>
            
            <!-- </div> -->
        </table>
        
        </div>
    </div>
    <h1>
        Send id, full object, like array,  not supported as param. check param is correct mime type. That is all. 

        child component be router views, both libcontent and sheetmusic, side by side, toggled by file click. Something like this.
    </h1>
</template>



<style scoped>
    /* .audio { */
         /* width: 200px;  */
         /* } */
</style>