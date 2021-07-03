<template>
    <h1> Players </h1>
    <h3> This page is for users only </h3>
</template>

<script setup>
import firebase from 'firebase'
import { useRouter } from 'vue-router'
import { onBeforeMount } from 'vue'

const router = useRouter()
const authListener = firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        alert('you must be logged in to view this page. redirecting to home page')
        router.push('/')
    }
})

onBeforeMount(() => {
    authListener()
})

</script>