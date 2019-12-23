import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        bands: [
            {
                id: 'test1',
                name: 'Teszt Elek 1',
                text: 'something1',
            },
            {
                id: 'test2',
                name: 'Teszt Elek 2',
                text: 'something2',
            },
            {
                id: 'test3',
                name: 'Teszt Elek 3',
                text: 'something3',
            },
            {
                id: 'test4',
                name: 'Teszt Elek 4',
                text: 'something4',
            },
            {
                id: 'test5',
                name: 'Teszt Elek 5',
                text: 'something5',
            },
            {
                id: 'test6',
                name: 'Teszt Elek 6',
                text: 'something6',
            },
            {
                id: 'test7',
                name: 'Teszt Elek 7',
                text: 'something7',
            },
        ],
    },
    getters: {
        bands: state => {
            return state.bands;
        },
        getBandById: state => id => {
            return state.bands.find(band => band.id === id);
        }
    },
    mutations: {
        updateBands: (state, payload) => {
            state.bands = payload;
        },
    },
    actions: {
        updateBands: ({commit}, payload) => {
            commit('updateBands', payload);
        },
    },
});