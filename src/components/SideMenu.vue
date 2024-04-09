<script>
import UploadFile from '../components/UploadFile.vue'
import { RouterLink } from 'vue-router';
export default {
    components:{UploadFile}

}
</script>
<template>
    <div class="side-menu">
        

        <a>
            <RouterLink to='/library' class="button">
                Library
            </RouterLink>
        </a>



        <a><UploadFile/></a>      



    </div>
</template>

