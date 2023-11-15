import { createApp } from 'vue';
import { createStore } from 'vuex';

import * as getters from "./getters.js";
import * as mutations from './mutations.js';
import * as actions from './actions.js';

const store = createStore({
    modules: {},
    state: {},
    mutations,
    actions,
    getters,
});

export default store;
