/*
 * @Descripttion:
 * @version:
 * @Author: SZF
 * @Date: 2023-08-08 09:00:48
 * @LastEditors: SZF
 * @LastEditTime: 2023-08-08 09:06:47
 */
import { createStore } from "vuex";
// import VuexPersister from 'vuex-persister'
import createPersistedstate from 'vuex-persistedstate'
import category from './modules/category';
import cart from './modules/cart';
import user from './modules/user';

export default createStore({
  modules: {
    category,
    cart,
    user
  },
  plugins: [createPersistedstate({
    key:'TTMall-pc-store',
    paths:[user,cart]
  })]
});
