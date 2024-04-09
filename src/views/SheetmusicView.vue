<script setup>
import Navbar from '../components/Navbar.vue'
import SideMenu from '../components/SideMenu.vue'
import SheetMusic from '@/components/SheetMusic.vue';
import { useUserStore } from '@/stores/user';
import LibraryContent from '@/components/LibraryContent.vue'

</script>

<template>
    <Navbar/>
    <div class="sidebar">
        <SideMenu/>
    </div>
    <div class="content">
        <!-- <RouterView/> -->
        <SheetMusic/>
    </div>
    
</template>
