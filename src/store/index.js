import axios from 'axios'
import {
  createStore
} from 'vuex'
export default createStore({
  state: {
    apiKey: '852fea6c8191e19d3d72f836adf3521f',
    getFullWeather: {}
  },
  mutations: {
    getWeather(state, payload) {
      state.getFullWeather = payload
    }
  },
  getters: {
    getCurrentWeather(state) {
      return state.getFullWeather.current
    },
    getDailyWeather(state) {
      return state.getFullWeather.daily
    },
    getCity(state) {
      return state.getFullWeather.name
    },
    getDesc(state) {
      return state.getFullWeather.current.weather[0].main
    },
    getInfo(state) {
      return state.getFullWeather.current.weather[0].description
    }
  },
  actions: {
    async getWeather({
      commit,
      state
    }, city) {
      try {
        let res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&lang=Ru&appid=${state.apiKey}`)
        let weather = res.data[0]
        let {
          lat,
          lon,
          name
        } = weather
        let res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&lang=ru&exclude=minutely,hourly&units=metric&appid=${state.apiKey}`)
        let fullWeather = {
          ...res2.data,
          name
        }
        commit('getWeather', fullWeather)
      } catch (error) {
        console.error(error, 'Произошла ошибка при получении долготы и широты');
      }
    }
  },

})