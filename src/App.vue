<template>
  <div>{{$store.state.user.profile.nickname}}</div>
  <button @click="$store.commit('user/updateProfile',{nickname:'tthem'})">改变！</button>
</template>

<script>
import {ref} from 'vue';
import {useStore} from'vuex';
export default {
  setup(){
     // 创建store仓库
    const store = useStore();
    const changeName = () => {
      store.commit('updateUsername',name.value)
    }
   
    return {changeName}
  }
}
</script>

<style>

</style>