/*
 * @Descripttion:
 * @version:
 * @Author: SZF
 * @Date: 2023-08-08 09:00:48
 * @LastEditors: SZF
 * @LastEditTime: 2023-08-08 09:06:47
 */
import { createStore } from "vuex";

export default createStore({
  state: {
    username: 'TT',
  },
  getters: {
    myUsername(state) {
      return state.username + "!!!!!!!!";
    }
  },
  mutations: {
    updateUsername(state, newName) {
      console.log('有人调用我！！！');
      state.username = newName;
    }
  },
  actions: {
    updateUsername(ctx, newName) {
      setTimeout(() => {
        ctx.commit('updateUsername', newName)
      }, 2000);
    }
  },
  modules: {},
});
