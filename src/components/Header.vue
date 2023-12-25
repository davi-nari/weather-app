<template>
<header class="header">
    <nav class="header-nav">
        <a href="#">
            <img src="@/assets/img/logo.svg" alt="">
            <span>VUE WEATHER</span>
        </a>
        <input 
            type="text" 
            placeholder="Выбрать город"
            v-model="query"
            @keydown.enter="getWeather(query)"
        >
    </nav>
</header>
</template>
<script>
    import { mapActions } from "vuex";
    export default {
        data() {
            return {
                query: ''
            }
        },
        methods: {
            ...mapActions(['getWeather'])
        }
    }
</script>
<style lang="scss" scoped>

</style>