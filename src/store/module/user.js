import Vuex from "vuex";
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
});
