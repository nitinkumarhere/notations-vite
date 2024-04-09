import { defineStore } from "pinia";
import axios from 'axios'
// pinia.use(({ store }) => { store.router = markRaw(router) })
import router from '../router'
export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,

  },
  {persist:true,}),

  actions: {
    async fetchUser() {
      const res = await fetch("https://localhost:8000/user");

      const user = await res.json();
      this.user = user;
    },
    async signUp(email, password) {
      const res = await fetch("https://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const user = await res.json()
      this.user = user;
    },
    async signIn(email, password) {
      // resp = await axios.get("user/api-auth/login/")
      // .then(resp=>{
        // console.log(resp.data.csrfmiddlewaretoken)
        axios.post("/user/api-auth/login/", 
        // method: "POST",
        { 'username': email, 'password': password },
        {
          headers: {
          "Content-Type": "application/json",
          // "X-CSRFToken": resp.data.get('csrfmiddlewaretoken')
        },
        
      }
      );

      // })

      // const user = await res.json();
      // if(res.status==200){
      //   this.$router.push({path:'/library'})
      // }
      this.user = user;
      // console.log(this.user)
    },
    async logout()      {
      const resp = await fetch("http://localhost:8000/accounts/logout")
      method:"POST",
      this.user = null
    }
  },

});