<template>
<div class="bg-gray-800 text-gray-300">
    App work<br>
    <router-link :to="{name: 'index'}">To Index</router-link><br>
    <router-link :to="{name: 'page'}">To Page</router-link><br>
</div>
<router-view/>
<!-- <div class="bg-gray-500 w-full h-64">
<router-view></router-view>
</div> -->
</template>

<script>
export default {
    name: 'App'
}

</script>

<style>

</style>
