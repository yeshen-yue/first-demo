import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/* const store = new Vuex.Store({
    state: {
        name: 'libai',
        age: 14,
    },
    mutations: {
        updateAge(state, val) {
            state.age += val;
        }
    },
    getters: {
        getAge(state) {
            return state.age + 6;
        }
    },
    actions: {
        addAge(context, val) {
            setTimeout(() => {
                context.commit('updateAge', val)
            }, 1000)
        }
    }
}) */
const testStore = {
    namespaced: true,
    state: {
        name: 'libai',
        age: 14,
    },
    mutations: {
        updateAge(state, val) {
            state.age += val;
        }
    },
    getters: {
        getAge(state) {
            return state.age + 6;
        }
    },
    actions: {
        addAge(context, val) {
            setTimeout(() => {
                context.commit('updateAge', val)
            }, 1000)
        }
    }
}
const testStore2 = {
    state: {
        name: 'dufu',
        age: 24,
    },
    mutations: {
        updateAge(state, val) {
            state.age += val;
        }
    },
    getters: {
        getAge(state) {
            return state.age + 6;
        }
    },
    actions: {
        addAge(context, val) {
            setTimeout(() => {
                context.commit('updateAge', val)
            }, 1000)
        }
    }
}
export default new Vuex.Store({
    modules: {
        a: testStore, b: testStore2
    }
})