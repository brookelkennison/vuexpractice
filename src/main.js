import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
// import { mapState } from 'vuex';

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  render: h => h(App),
}).$mount('#app');

const store = new Vuex.Store({
    state: {
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        }
    }
});

export default {
    computed: {
        doneTodosCount () {
            return this.$store.getters.doneTodosCount;
        }
    }
};

/* eslint-disable no-console */
console.log(store.getters.doneTodos);
/* eslint-enable no-console */


// const store = new Vuex.Store({
//     state: {
//         count: 0
//     },
//     mutations : {
//         increment (state) {
//             state.count++;
//         }
//     }
// });
//
// const Counter = {
//     template: `<div>{{ count }}</div>`,
//     computed: {
//         count () {
//             return this.$store.state.count;
//         }
//     }
// };
//
// const app = new Vue({
//     el: '#app',
//     store,
//     components: { Counter },
//     template: `
//         <div class="app">
//             <counter></counter>
//         </div>
//     `
// });
//
// export default {
//     computed: mapState({
//         count: state => state.count,
//         countAlias: 'count',
//         countPlusLocalState (state) {
//             return state.count + this.localCount;
//         }
//     })
// };
//
// store.commit('increment');
//
// /* eslint-disable no-console */
// console.log(store.state.count);
// /* eslint-enable no-console */
