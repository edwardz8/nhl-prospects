<template>
  <h2>Create an Account</h2>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
</template>

<script setup>
import { ref } from 'vue';
import firebase from 'firebase';
import { useRouter } from 'vue-router'

const email = ref('');
const password = ref('');

const router = useRouter()

const register = () => {
    firebase.auth() // get the auth api
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((data) => {
        console.log('Registered!')
        router.push('/players')
    })
    .catch(err => {
        console.log(err.code)
        alert(err.message)
    })
};
</script>
