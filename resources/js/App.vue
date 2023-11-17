<template>
<div class="">
    App work
    <RouterLink :to="{name: 'index'}">Index</RouterLink>
    <RouterLink :to="{name: 'page'}">Page</RouterLink>
    <RouterView/>
</div>
</template>

<script>
export default {
    name: 'App'
}

</script>

<style>

</style>
