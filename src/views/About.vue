<template>
    <div class="about">
        <h1>This is an about page</h1>
        <router-link to="/">
            about
        </router-link>
        <h2>{{$store.getters.token}}</h2>
    </div>
</template>
