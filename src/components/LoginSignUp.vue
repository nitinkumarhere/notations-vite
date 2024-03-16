
<template>
    <div class="login-page">
        <transition name="fade">
            <div v-if="!registerActive" class="wallpaper-login"></div>
        </transition>
        <div class="wallpaper-register"></div>

        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                    <h1>Sign In</h1>
                    <form class="form-group">
                        <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
                        <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
                        <!-- <input type="hidden" name="CSRFToken" v-bind:value="getCSRFToken"> -->
                        <input type="submit" class="btn btn-primary" @click="doLogin">
                        <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign up here</a>
                        </p>
                        <p><a href="#">Forgot your password?</a></p>
                    </form>
                </div>

                <div v-else class="card register" v-bind:class="{ error: emptyFields }">
                    <h1>Sign Up</h1>
                    <form class="form-group">
                        <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
                        <input v-model="passwordReg" type="password" class="form-control" placeholder="Password" required>
                        <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirm Password" required>
                        <input type="submit" class="btn btn-primary" @click="doRegister">
                        <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign in here</a>
                        </p>
                    </form>
                </div>
                </div>
            </div>

        </div>
    </div>
</template>



 <script >
 import {  onMounted } from 'vue';
 import { useRouter } from "vue-router";
 import router from '../router'

//  import axios from 'axios'
import axios from 'axios';
// import Cookies from 'js-cookie';
// import Cookies from 'js-cookie'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.withXSRFToken = true
axios.defaults.withCredentials = true
// axios.interceptors.response.use(response => {
//     const sessionCookie = Cookie.get()
//     console.log('Cookie', sessionCookie)
//     return response
// })
// axios.defaults.headers.common['X-CSRF-TOKEN'] = Cookies.get()


axios.interceptors.request.use(function (config) {
  config.withCredentials = true
  return config
})
// const router = useRouter()
 export default {
   
//    props: {

// registerActive: false,
// emailLogin: "",
// passwordLogin: "",
// emailReg: "",
// passwordReg: "",
// confirmReg: "",
// emptyFields: false,
// token:""
// },
data() {
   return {
      registerActive: false,
      isAuthenticated:false,
      emailLogin: "",
      passwordLogin: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      emptyFields: false,
      token:""

   }
},
   // props: {

   //    registerActive: false,
   //    emailLogin: "",
   //    passwordLogin: "",
   //    emailReg: "",
   //    passwordReg: "",
   //    confirmReg: "",
   //    emptyFields: false
   // },
   
   methods: {
      // getCSRFToken() {

         
      //    const cookieValue = document.cookie.split('; ').find(row => row.startsWith('csrftoken='));
      //    if (cookieValue) {
      //       console.log(cookieValue)
      //       return cookieValue.split('=')[1];
      //    }
  
         // const tokenFromHeader = axios.defaults.headers.common['X-CSRFToken']; // Get from request headers
         // if (tokenFromHeader) {
         //    console.log(tokenFromHeader)
         //    return tokenFromHeader;
         // }
      // return null;
      // },

      // getCsrf() {
      //    const response = axios.get('http://127.0.0.1:8000/api-auth/login/',)
      //    .then(Response =>{
      //       console.log("csrf in getCsrf",$document.Cookies) 
      //       return Response.Cookies.csrftoken  
      //    })



         
      // },
      
      async doLogin() {

         if (this.emailLogin === "" || this.passwordLogin === "") {
            this.emptyFields = true;
            const csrfReq = await axios.get('http://localhost:8000/accounts/csrf/')
            .then(res=>{
                  const csrftoken = res.data.csrftoken

               })
         } else {
            // csrfReq = await axios.get('http://localhost:8000/accounts/csrf/')
            const url = 'http://localhost:8000/accounts/login/';
            const auth = { username: this.emailLogin, password: this.passwordLogin,
            };
            // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            // Correct username is 'foo' and password is 'bar'
            // console.log(auth)
            
            this.success = false;
            this.error = null;
            // axios.get(url)
            // const csrf_token = this.getCSRFToken()
            // console.log(csrf)
            try {
               // await axios.get(url)
               // .then(res=>{
               //    csrftoken = res.data.csrftoken

               // })
               // const csrftoken = this.getCSRFToken()
               const res = await axios.post(url, {
                  username: this.emailLogin,
                  password: this.passwordLogin
               },
                {
                  headers: {
                     'Content-Type': 'application/json',
                     'X-CSRFToken': self.csrftoken
                     // 'Cookie': "FJwu1xANJMtqnJHNtcLFthgXKhNqzhNV"
                  }
               }
               ).then(  res => {
                  if(res.status==200){
                     console.log('Login successful:', res.data);
                     
                     this.success = true 
                     this.isAuthenticated = true
                     this.$router.go({name:'library'});
                  }
                  else {
                     this.error = 'Invalid username or password';
                  }
                  
               })
               // Assuming successful login returns a token or user data
               // console.log('Login successful:', response.data);
               // Redirect the user to another page or perform other actions after successful login
               } catch (err) {
               console.error('Login failed:', err.message);
               
               }
               // this.$router.push('/home');
               
            //    await axios({
            //          method:"POST",
            //          url,
            //          auth,
                     
            //          headers: {
            //             'X-CSRFToken': this.getCSRFToken()
            //          }
            //          // xsrfCookieName: 'csrftoken',
            //          // xsrfHeaderName: 'X-CSRFTOKEN',
            //          // withCredentials: true

            //     })
                       
            //   .then(res => res.data)
            //       this.success = true;
            //    } catch (err) {
            //       this.error = err.message;
            //    }
         }
         
      },
               
      
      doRegister() {
         if (this.emailReg === "" || this.passwordReg === "" || this.confirmReg === "") {
            this.emptyFields = true;
         } else {
            alert("You are now registered");
         }
      }, 
   
      beforeCreate(){
         // axios.get('http://127.0.0.1:8000/accounts/csrf/')
         // .then((response) => {
         //    console.log(response.headers);
         // })
         // alert("You are now logged in");
      }
   }
}

</script>

 <style scoped>

 .container {
    border-color: black;
    border: 2px;
    margin: 5px;
    z-index: 10;
 }
 p {
   line-height: 1rem;
}

.card {
   padding: 20px;
   border:2px;
   margin: 5px;


}

.form-group {
   input {
      margin-bottom: 20px;
      display: flex;
      width: 100%;
   }
}

.login-page {
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 100vh;
   border: 2px;
   border-color: black;

   /* .wallpaper-login {
      background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) 
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
   } */
   
   .fade-enter-active,
   .fade-leave-active {
        transition: opacity .5s;
    }
   .fade-enter,
   .fade-leave-to {
      opacity: 0;
   }
   
   /* .wallpaper-register {
      background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: -1;
   } */

   h1 {
      margin-bottom: 1.5rem;
   }
}

.error {
   animation-name: errorShake;
   animation-duration: 0.3s;
}

@keyframes errorShake {
   0% {
      transform: translateX(-25px);
   }
   25% {
      transform: translateX(25px);
   }
   50% {
      transform: translateX(-25px);
   }
   75% {
      transform: translateX(25px);
   }
   100% {
      transform: translateX(0);
   }
}

 
 </style>../router