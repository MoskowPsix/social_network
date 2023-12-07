<template lang="">
    <div class="w-96 mx-auto">
        <div>
            <input v-model="name" type="name" name="name" placeholder="name" class="w-96 p-1 mb-2 border border-inherit rounded-lg">
        </div>
        <div>
            <input v-model="email" type="email" name="email" placeholder="email" class="w-96 p-1 mb-2 border border-inherit rounded-lg">
        </div>
        <div>
            <input v-model="password" type="password" name="password" placeholder="********" class="w-96 p-1 mb-2 border border-inherit rounded-lg">
        </div>
        <div>
            <input v-model="password_confirmation" type="password" name="password_confirmation" placeholder="********" class="w-96 p-1 mb-2 border border-inherit rounded-lg">
        </div>
        <div>
            <input @click.prevent="registration()" type="submit" value="register" class="block float-right mx-auto w-32 p-1 bg-sky-400 text-white rounded-lg">
        </div>
    </div>
</template>
<script>
export default {
    name: "Registration",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        }
    },
    methods: {
        registration() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/register', {name: this.name, email: this.email, password: this.password, password_confirmation: this.password_confirmation}).then(respons => {
                    localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN'])
                    console.log(respons)
                    // this.$router.push({name: 'user.personal'})
                }).catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error.response)
            })
        }
    }
}
</script>
<style lang="">
    
</style>