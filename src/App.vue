<template>
  <div>{{$store.state.username}}</div>
  <div>{{$store.getters.myUsername}}</div>
  <input type="text" v-model="name">
  <button @click="changeName">更名字啦</button>
</template>

<script>
import {ref} from 'vue';
import {useStore} from'vuex';
export default {
  setup(){
     // 创建store仓库
    const store = useStore();
    console.log(store.state.username);
    console.log(store.getters.myUsername);

    let name = ref('里斯');
    const changeName = () => {
      store.commit('updateUsername',name.value)
    }
   
    return {name, changeName}
  }
}
</script>

<style>

</style>