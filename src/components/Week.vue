<template>
    <h2 class="week-title">На неделю</h2>
    <div class="week">
        <WeekDay 
            v-for="(day,idx) in getDailyWeather"
            :key="idx"
            :day="day"
        />
    </div>
</template>

<script>
import WeekDay from './WeekDay.vue'
import { mapGetters } from "vuex";
export default {
   components: { WeekDay },
   computed: {
    ...mapGetters(['getDailyWeather']),
   }
}
</script>

<style lang="scss" scoped>

</style>