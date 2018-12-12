<template>
  <v-app id="app" :style='backgroundColor'>
    <router-view class="full-size"></router-view>
  </v-app>
</template>

<script>
import Util from '@/util'
const { KEY } = Util.Config

export default {
  name: 'tokei',
  mounted: function () {
    this.latestMoved = new Date().getTime()
    window.addEventListener('keydown', e => {
      const now = new Date().getTime()
      if (now - this.latestMoved < 100) return

      this.latestMoved = now
      if (e.keyCode === KEY.LEFT) this.$router.push(this.backRoute())
      else if (e.keyCode === KEY.RIGHT) this.$router.push(this.nextRoute())
    })
    document.querySelector('#app').addEventListener('click', this.handleRightClick)
  },
  data () {
    return {
      page: 0,
      routes: [
        { name: 'home' },
        { name: 'binary' },
        { name: 'circle' },
        { name: 'digital' }
      ],
      latestMoved: 0,
      opacity: 0.5,
      backgroundColor: { 'background-color': 'rgba(0, 0, 0, 0.5)' }
    }
  },
  methods: {
    handleRightClick (e) {
      if (e.shiftKey) {
        this.opacity = this.opacity === 0 ? 0.7 : 0
        this.backgroundColor = { 'background-color': `rgba(0, 0, 0, ${this.opacity})` }
      }
    },
    nextRoute () {
      this.page = this.page + 1
      this.page = this.page > (this.routes.length - 1) ? 0 : this.page
      return this.routes[this.page]
    },
    backRoute () {
      this.page = this.page - 1
      this.page = this.page < 0 ? (this.routes.length - 1) : this.page
      return this.routes[this.page]
    }
  }
}
</script>

<style lang="sass">
.full-size
  width: 100%
  height: 100%
html
  @extend .full-size
  -webkit-app-region: drag
  -webkit-user-select: none
  body
    @extend .full-size
    padding: 0
    margin: 0
  #app
    @extend .full-size
    font-family: "Source Han Code JP", "Ricty Diminished", sans-serif
    background-color: rgba(0, 0, 0, 0.0)
    overflow: hidden
</style>
