import Vue from 'vue';
import axios from 'axios';

import VueRouter from 'vue-router';
import routes from './routes';

import VueToastr from '@deveodk/vue-toastr';
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
// If you would like custom styling of the toastr the css file can be replaced
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


Vue.use(VueRouter);
Vue.use(VueToastr, {
    defaultPosition: 'toast-top-right',
    defaultType: 'info',
    defaultTimeout: 1000
});


let app = new Vue({
    el: '#app',

    router: new VueRouter(routes)
});
