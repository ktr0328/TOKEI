<template>
  <div id="home">
    <h3 id="day">{{ day }}</h3>
    <v-container fill-height justify-center>
      <h1>{{ time }}</h1>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'home',
  mounted: function () {
    this.render()
    setInterval(this.render, 500)
  },
  data () {
    return {
      day: '',
      time: ''
    }
  },
  methods: {
    render () {
      const now = moment()
      this.day = now.format('YYYY/MM/DD')
      this.time = now.format('HH:mm:ss')
    }
  }
}
</script>

<style lang="sass">
#home
  color: #FF5722
  #day
    color: #FF9800
    position: absolute
    left: 5%
    top: 5%
</style>
