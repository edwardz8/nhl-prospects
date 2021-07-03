<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/players"> Players </router-link> |
      <span v-if="isLoggedIn">
        <button @click="signOut">Logout</button>
      </span>
      <span v-else>
        <router-link to="/register"> Register </router-link> |
        <router-link to="/sign-in"> Login </router-link> |
      </span>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router";


const router = useRouter();

const isLoggedIn = ref(true);

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }
});

const signOut = () => {
    firebase.auth().signOut()
    router.push('/')
}
</script>
