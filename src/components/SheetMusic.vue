<script>
	import abcjs from "abcjs";
	import {useFileStore} from '../stores/file'
	import { mapState, mapWritableState } from "pinia";
	import { toRaw } from "vue";
	import Navbar from "../components/Navbar.vue";
	import SideMenu from "../components/SideMenu.vue"
	// import { defineProps } from "vue";

	export default {
		components:[Navbar, SideMenu],

		setup(){
		const fileStore = useFileStore()
			return {fileStore}
		}, 
	 
		computed: {
		// //     // ...mapGetters({"files":"processedFiles"}) 
			// ...mapState(useFileStore, ('files'),), 
			...mapWritableState(useFileStore, {files:toRaw('files'),},), 

			// console.log()
		},
   

		mounted()  {
			abcjs.renderAbc("paper", this.tune, {});
			// console.log("Shetmusic", this.f.tags[0].title)
			// console.log(this.f)
			console.log(this.files)
			this.file = this.files.find(el =>el.tags[0].id== this.$route.params.f)
			// this.title = this.file.tags[0].title,
			// this.filePath = this.file.file
			this.tune= 'X:1\nT:'+ this.file.tags[0].title + '\nM: 4/4\nL: 1/8\nR:' +this.file.tags[0].album +'\nK: Emin\nD2|:"Em"EB{c}BA B2 EB|~B2 AB dBAG|"D"FDAD BDAD|FDAD dAFD|\n"Em"EBBA B2 EB|B2 AB defg|"D"afe^c dBAF|1"Em"DEFD E2 D2:|2"Em"DEFD E2 gf||\n|:"Em"eB B2 efge|eB B2 gedB|"D"A2 FA DAFA|A2 FA defg|\n"Em"eB B2 eBgB|eB B2 defg|"D"afe^c dBAF|1"Em"DEFD E2 gf:|2"Em"DEFD E4|]\n'


		},
		name: 'SheetMusic',
		data () {
			return {
				
				file:Object,
				filePath:String,
				// file : this.files.find(el => el.tags[0].id == this.$route.params.f), 
				// fileSource: this.song.file.replace("/files", ""),
				title: String,
				tune : "",
			}
		},
		created() { 

				// this.title = this.song.tags[0].title
				this.file = this.files.find(el =>el.tags[0].id== this.$route.params.f)
				console.log("in Created", this.files.find(element =>element.tags[0].id== this.$route.params.f))
				console.log(toRaw(this.files))
				this.filePath = this.file.file
				this.title = this.file.tags[0].title,
				this.tune= 'X:1\nT:'	+ this.file.tags[0].title + '\nM: 4/4\nL: 1/8\nR:' +this.file.tags[0].album +'\nK: Emin\nD2|:"Em"EB{c}BA B2 EB|~B2 AB dBAG|"D"FDAD BDAD|FDAD dAFD|\n"Em"EBBA B2 EB|B2 AB defg|"D"afe^c dBAF|1"Em"DEFD E2 D2:|2"Em"DEFD E2 gf||\n|:"Em"eB B2 efge|eB B2 gedB|"D"A2 FA DAFA|A2 FA defg|\n"Em"eB B2 eBgB|eB B2 defg|"D"afe^c dBAF|1"Em"DEFD E2 gf:|2"Em"DEFD E4|]\n'

		},
		
	}
	
</script>

<template>
	<div>
		<h1> Get Time Signature and Scale </h1>
		<div id="paper"></div> 
		<audio class="player"
			controls style="width: 100%; height: 50px"
			v-bind:src="filePath">
		</audio>
		 <!-- <h1> -->
			<!-- sheetmusic {{ $route }} -->
			<!-- New Store for song atrributes research and final output -->
			<!-- {{ f. }} -->
			{{ $route.params.f }}
			<!-- {{ files }} -->
			<!-- {{ f }} -->
			<!-- {{ f }} -->
			<!-- {{ song }} -->
		 <!-- </h1> -->
	</div>
</template>

<style scoped>

.player {
	display: flex;
	width:100%;
	height: 100%;
     /* display: flex; */
	 align-items: flex-end;
	 /* height: 450px; */
	 /* align-text: center; */
  }

</style>