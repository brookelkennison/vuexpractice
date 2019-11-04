import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  render: h => h(App),
}).$mount('#app');

// new Vue({
//     // state
//     data () {
//         return {
//             count: 0
//         };
//     },
//     // view
//     template: `
//         <div>{{ count }}</div>
//     `,
//     // actions
//     methods: {
//         increment () {
//             this.count++;
//         }
//     }
// });

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations : {
        increment (state) {
            state.count++;
        }
    }
});

store.commit('increment');

/* eslint-disable no-console */
console.log(store.state.count);
/* eslint-enable no-console */
