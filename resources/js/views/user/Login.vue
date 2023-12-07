<template lang="">
    <div class="w-96 mx-auto">
        <div>
            <input v-model="email" type="email" name="email" placeholder="email" class="w-96 p-1 mb-2 border border-inherit rounded-lg">
        </div>
        <div>
            <input v-model="password" type="password" name="password" placeholder="********" class="w-96 p-1 mb-2 border border-inherit rounded-lg">
        </div>
        <div>
            <input @click.prevent="login()" type="submit" value="Login" class="block float-right mx-auto w-32 p-1 bg-sky-400 text-white">
        </div>
    </div>
</template>
<script>
export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null,
        }
    } ,

    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                console.log({email: this.email, password: this.password})
                axios.post('/api/login', {email: this.email, password: this.password})
                .then(respons => {
                    // console.log(respons.config.headers['X-XSRF-TOKEN'])
                    localStorage.setItem('x_xsrf_token', respons.config.headers['X-XSRF-TOKEN'])
                    this.$router.push({name: 'user.personal'})

                })
            })
        }
    },
}
</script>
<style lang="">
    
</style>