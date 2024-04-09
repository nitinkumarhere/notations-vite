import axios from 'axios'

import Vue from 'vue'

// const productionInstance = createInstance("http://localhost:3000"); // will change later

axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.withXSRFToken = true
axios.defaults.withCredentials = true

axios.interceptors.request.use(function (config) {
    config.withCredentials = true
    return config
  })

function createInstance(baseURL){
    return axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${localStorage.token}`
        }
    });
}

export default {
    HTTP :createInstance("http://localhost:5173")
}


// export HTTP