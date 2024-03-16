<script>
import UploadFile from '../components/UploadFile.vue'
export default {

}
</script>
<template>
    <p>
        side menu
    </p>
    <div class="side-menu">
        <ul>
            <li>
                <a>
                    <router-link to='/library' class="button is-black is-fullwidth">
                        Library
                    </router-link>
                </a>
            </li>

            <li>
                <a><UploadFile/></a>      
            </li>
        </ul>

    </div>
</template>
