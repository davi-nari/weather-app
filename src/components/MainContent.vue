<template>
    <div class="main-content" v-if="getCurrentWeather">
        <div class="main-content-left">
            <p class="degree">{{Math.ceil(getCurrentWeather.temp)}}°</p>
            <p class="today">Сегодня</p>
            <p class="date">Время: 21:54</p>
            <p class="city">Город: {{getCity}}</p>
            <img :src="require('@/assets/img/' + getDesc + '.svg')" alt="">
        </div>
        <div class="main-content-right">
            <img src="@/assets/img/clouds.png" alt="">
            <div class="main-content-item">
                <img src="@/assets/img/temp.svg" alt="">
                <span class="title">Температура</span>
                <span class="info">{{Math.ceil(getCurrentWeather.temp)}}° - ощущается как {{Math.ceil(getCurrentWeather.feels_like)}}°</span>
            </div>
            <div class="main-content-item">
                <img src="@/assets/img/press.svg" alt="">
                <span class="title">Давление </span>
                <span class="info">{{getCurrentWeather.pressure}} мм ртутного столба - нормальное</span>
            </div>
            <div class="main-content-item">
                <img src="@/assets/img/precip.svg" alt="">
                <span class="title">Осадки</span>
                <span class="info">{{getCurrentWeather.humidity}}%</span>
            </div>
            <div class="main-content-item">
                <img src="@/assets/img/wind.svg" alt="">
                <span class="title">Ветер</span>
                <span class="info">{{getCurrentWeather.wind_speed}} м/с юго-запад - легкий ветер</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        computed: {
            ...mapGetters(['getCurrentWeather', 'getCity', 'getDesc'])
        },
        methods: {
            ...mapActions(['getWeather'])
        },
        created(){
            this.getWeather('Chirchiq')
        }
    }
</script>

<style lang="scss" scoped>

</style>