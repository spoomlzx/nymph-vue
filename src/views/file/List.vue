<template>
    <div class="about">
        <h1>This is an about page</h1>
        <router-link to="/">
            about
        </router-link>
        <h2>{{$store.getters.token}}</h2>
        <div class="icon-item">
            <svg-icon icon-class="drag"/>
            <span>adsf</span>
        </div>
        <h1>list file</h1>


    </div>
</template>
