<script setup>
import Navbar from '../components/Navbar.vue';
import LoginSignUp from '../components/LoginSignUp.vue';
import LibraryView from './LibraryView.vue';
import { useUserStore } from '@/stores/user';

function isauthenticated(){
  if (useUserStore.user===null){
    return false
  } else {
    return true
  }
}
// import LoginSignUp from '@/components/LoginSignUp.vue';
// import DocumentationIcon from './icons/IconDocumentation.vue'
// import WelcomeItem from './WelcomeItem.vue'
// import LoginSignUp from './LoginSignUp.vue';
// isauthenticated = this.LoginSignUp.isauthenticated
// if(isauthenticated===true) {
//   this.$route.go('/library')
// }



</script>

<template>

    <main>
        <section>
          <div v-if="isauthenticated">
            <div class="primary-navbar">
              <Navbar />
            </div>
            <div class="container-section">
                <div class="even-columns">
                    <div class="image">
                        <img src="../assets/img.jpg" style="width: 600px; height: 700px; object-fit: cover; position: center; border-radius: 1vw;margin-top: 20px;" alt="Avatar woman">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deserunt ipsum, architecto nesciunt corporis doloribus dolorum sit at? Error maxime magnam deserunt eaque atque corrupti tenetur omnis ut facilis reprehenderit?</p>
                    </div>
                    <div class="login-form">
                      <!-- <h1>Hello</h1> -->
                        <LoginSignUp />
                    </div>
                </div>

            </div>
          </div>
          <div v-else>
            <LibraryView/>
          </div>

        </section>
    </main>
</template>

<style scoped>



.even-columns > img {
    border-radius: 1vw ;   
}







/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */

.container-section {
  margin-top: 20px;
  --max-width: 1110px;
  --container-padding: 1rem;

  width: min(var(--max-width), 100% - (var(--container-padding) * 2));
  margin-inline: auto;
}
/* .primary-navbar {
    display: inline-block;
} */

.even-columns {
  display: grid;
  gap: 1rem;

}

@media (min-width: 50em) {
  .even-columns {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
}

.vertical-align-center {
  align-items: center;
}

.justify-self-end {
  justify-self: end;
}
</style>