<template>
  <div class='circle' id='circle-clock'>
    <v-icon class='needle' id='hour' :style='position.hour'>fas fa-circle</v-icon>
    <v-icon class='needle' id='minute' :style='position.minute'>fas fa-circle</v-icon>
    <v-icon class='needle' id='second' :style='position.second'>fas fa-circle</v-icon>
    <v-icon class='needle' id='mid' :style='position.mid'>fas fa-heart</v-icon>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'circle-clock',
  mounted: function () {
    const clock = document.querySelector('#circle-clock')
    this.mid.x = clock.clientWidth / 2
    this.mid.y = clock.clientHeight / 2
    this.position.mid = { left: this.mid.x + 'px', top: this.mid.y + 'px' }
    this.radius.h = this.mid.x * 0.3
    this.radius.m = this.mid.x * 0.6
    this.radius.s = this.mid.x * 0.9
    this.render()
    setInterval(this.render, 100)
  },
  data () {
    return {
      mid: {
        x: 150,
        y: 150
      },
      radius: {
        h: 0,
        m: 0,
        s: 0
      },
      position: {
        mid: { left: 0 + 'px', top: 0 + 'px' },
        hour: { left: 0 + 'px', top: 0 + 'px' },
        minute: { left: 0 + 'px', top: 0 + 'px' },
        second: { left: 0 + 'px', top: 0 + 'px' }
      }
    }
  },
  methods: {
    render () {
      const now = moment()
      const h = now.format('h')
      const m = now.format('m')

      const unixTime = new Date().getTime()
      const ms = unixTime - Math.floor(unixTime / 60000) * 60000

      const hp = h / 12
      const mp = m / 60
      const sp = ms / 60000

      const hAngle = 360 * hp - 90
      const mAngle = 360 * mp - 90
      const sAngle = 360 * sp - 90

      const ht = hAngle * (Math.PI / 180)
      const mt = mAngle * (Math.PI / 180)
      const st = sAngle * (Math.PI / 180)

      const hx = this.mid.x + this.radius.h * Math.cos(ht)
      const hy = this.mid.y + this.radius.h * Math.sin(ht)
      const mx = this.mid.x + this.radius.m * Math.cos(mt)
      const my = this.mid.y + this.radius.m * Math.sin(mt)
      const sx = this.mid.x + this.radius.s * Math.cos(st)
      const sy = this.mid.y + this.radius.s * Math.sin(st)

      this.position.hour = { left: hx + 'px', top: hy + 'px' }
      this.position.minute = { left: mx + 'px', top: my + 'px' }
      this.position.second = { left: sx + 'px', top: sy + 'px' }
    }
  }
}
</script>

<style lang="sass" scoped>
#circle-clock
.needle
  position: absolute
#mid
  color: rgba(233, 30, 99, 0.9)
  font-size: 20px
  animation: mid-animation 3s ease infinite
  @keyframes mid-animation
    0%
      opacity: .9
      transform: scale(1.5, 1.5)
    50%
      opacity: .3
      transform: scale(1, 1)
    100%
      opacity: .9
      transform: scale(1.5, 1.5)
#hour
  color: rgba(63, 81, 181, 0.8)
  font-size: 30px
#minute
  color: rgba(3, 169, 244, 0.8)
  font-size: 20px
#second
  color: rgba(76, 175, 80, 0.9)
  font-size: 0.8em
</style>
