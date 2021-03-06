import Vuex from 'vuex'
// import user from "./module/user"
export default Vuex.createStore({
  state: {
    test: { a: 1 },
  },
  getters:{},
  mutations: {
    setTestA: (state, value) => {
      state.test.a = value;
    },
  },
  actions: {
    handleSetState({ commit }, value) {
      commit("state", value++);
    },
  },
  modules: {
  }
});
